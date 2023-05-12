/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "build",
  trailingSlash: true,
};

module.exports = nextConfig;
