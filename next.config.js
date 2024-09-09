/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agni-byte.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
