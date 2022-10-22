/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fiverr-res.cloudinary.com"],
  },
  env: {
    SENDGRID_KEY: process.env.SENDGRID_KEY,
  },
};

module.exports = nextConfig;
