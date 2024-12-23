import type { NextConfig } from 'next';

// noinspection SpellCheckingInspection
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'olavorw.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '4934.tech',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
