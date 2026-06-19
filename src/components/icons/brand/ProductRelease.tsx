type ProductReleaseProps = {
  className?: string;
  size?: number;
};

export function ProductRelease({ className, size = 24 }: ProductReleaseProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20.9304 19.2013L12.1339 24L3.37947 19.2136L3.36677 14.75L10 18.5L12.1339 16.75L14 18.5L21 14.75L20.9304 19.2013Z"
        fill="currentColor"
      />
      <path
        d="M7.57585 7.5V8.29884L4.1295 10.1588L12.0505 14.2574L19.9994 9.94994L17.1367 8.40943V7.57669L20.9165 9.58446V9.59195L20.9304 9.58451L23.5 12.1575L14.1461 17.2825L12.0483 15.2756L9.75482 17.2825L1 12.1575L3.36677 9.78637L3.37947 9.79305L7.57585 7.5Z"
        fill="currentColor"
      />
      <path d="M19 3.64998V6.81665L20.9 5.23332L19 3.64998Z" fill="currentColor" />
      <path
        d="M19.5 4.7998V5.70019H15.4502V10H14.5498V4.7998H19.5Z"
        fill="currentColor"
      />
      <path d="M5.64999 3.50002V6.66669L3.74999 5.08335L5.64999 3.50002Z" fill="currentColor" />
      <path
        d="M5.14999 4.64984V5.55023H9.1998V9.85004H10.1002V4.64984H5.14999Z"
        fill="currentColor"
      />
      <path d="M10.75 2.4H13.9167L12.3333 0.5L10.75 2.4Z" fill="currentColor" />
      <path d="M11.8873 1.88751H12.7877V12.1375H11.8873V1.88751Z" fill="currentColor" />
    </svg>
  );
}
