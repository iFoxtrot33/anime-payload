/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
    domains: ["http://localhost:3000", "https://anime-payload.vercel.app"],
  },
};

module.exports = nextConfig;
