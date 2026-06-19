import { XMLParser } from 'fast-xml-parser';

export const MEDIUM_FEED_URL = 'https://mikeyoungdesign.medium.com/feed';
export const MEDIUM_PROFILE_URL = 'https://mikeyoungdesign.medium.com/';

/**
 * Slugs (the trailing segment of a Medium article URL, including the hash id)
 * that should NOT appear on the Writings page.
 */
export const EXCLUDED_SLUGS: string[] = ['figma-sites-a-first-impression-99404b0b457b'];

/**
 * Slugs of the articles to feature on the homepage, in display order.
 * Curated explicitly so the homepage list stays fixed at 3 as new articles
 * are published — update this list to change what's featured.
 */
export const FEATURED_SLUGS: string[] = [
  'once-upon-a-product-designing-for-time-place-14c4cea8b4e1',
  'the-founding-product-designers-guide-to-staying-sane-88fbdf092530',
  'how-design-shapes-perception-e97bc2a07181',
];

export type MediumPost = {
  title: string;
  url: string;
  excerpt: string;
  image: string | null;
  publishedAt: string;
  slug: string;
};

type RssItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  'content:encoded'?: string;
};

type RssFeed = {
  rss?: {
    channel?: {
      item?: RssItem | RssItem[];
    };
  };
};

function slugFromUrl(url: string): string {
  try {
    const path = new URL(url).pathname.replace(/\/+$/, '');
    return path.split('/').pop() ?? '';
  } catch {
    return '';
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstImageFromHtml(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

function makeExcerpt(contentHtml: string, fallbackHtml: string): string {
  // Posts follow the structure: tagline paragraph(s) → <figure> featured image → body.
  // The excerpt is everything before the first <figure>. Falls back to the full
  // description if no <figure> is present.
  const figureIndex = contentHtml.search(/<figure[\s>]/i);
  const source = figureIndex >= 0 ? contentHtml.slice(0, figureIndex) : fallbackHtml;
  return stripHtml(source).trim();
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
    });
    if (!res.ok) {
      console.warn(`[medium] Feed responded ${res.status}`);
      return [];
    }
    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      cdataPropName: '__cdata',
      textNodeName: '#text',
    });
    const parsed = parser.parse(xml) as RssFeed;
    const rawItems = parsed.rss?.channel?.item;
    if (!rawItems) return [];
    const items = Array.isArray(rawItems) ? rawItems : [rawItems];

    const unwrap = (v: unknown): string => {
      if (v == null) return '';
      if (typeof v === 'string') return v;
      if (typeof v === 'object') {
        const obj = v as { __cdata?: string; '#text'?: string };
        return obj.__cdata ?? obj['#text'] ?? '';
      }
      return String(v);
    };

    const posts: MediumPost[] = items
      .map((item) => {
        const title = unwrap(item.title);
        const url = unwrap(item.link);
        const slug = slugFromUrl(url);
        const contentHtml = unwrap(item['content:encoded']);
        const descriptionHtml = unwrap(item.description);
        const image = firstImageFromHtml(contentHtml) ?? firstImageFromHtml(descriptionHtml);
        const excerpt = makeExcerpt(contentHtml, descriptionHtml);
        return {
          title,
          url,
          slug,
          excerpt,
          image,
          publishedAt: unwrap(item.pubDate),
        };
      })
      .filter((p) => p.url && p.title && !EXCLUDED_SLUGS.includes(p.slug));

    return posts;
  } catch (err) {
    console.warn('[medium] Failed to load feed', err);
    return [];
  }
}

/**
 * The curated homepage articles, resolved from the live feed and returned in
 * the order defined by {@link FEATURED_SLUGS}. Any slug not present in the feed
 * is silently dropped.
 */
export async function getFeaturedPosts(): Promise<MediumPost[]> {
  const posts = await getMediumPosts();
  return FEATURED_SLUGS.map(slug => posts.find(p => p.slug === slug)).filter(
    (p): p is MediumPost => Boolean(p)
  );
}
