/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.prismic.io",
      "prismic-io.s3.amazonaws.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
