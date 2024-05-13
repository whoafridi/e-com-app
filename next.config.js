/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "next-admin-bay.vercel.app",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "next-admin-bay.vercel.app",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      }
    ],

  },
};

module.exports = nextConfig;
