/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: [
      "carly.cdn.prismic.io",
      "images.prismic.io",
      "prismic-io.s3.amazonaws.com",
      "images.unsplash.com",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig;
