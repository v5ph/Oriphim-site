/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    isrMemoryCacheSize: 52 * 1024 * 1024, // 52 MB
  },
};

export default nextConfig;
