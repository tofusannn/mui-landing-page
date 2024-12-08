import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["d38b044pevnwc9.cloudfront.net"], // Replace with actual logo source domains if not hosted locally.
  },
};

export default nextConfig;
