import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ['192.168.0.156', 'MacBook-Air.local', '*.local'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Accept-CH',
            value: 'Sec-CH-Prefers-Color-Scheme',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
