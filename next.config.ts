import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = '';

if (isGithubActions) {
  basePath = '/NO1insurence';
}

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [],
    qualities: [75],
  },
};

export default nextConfig;
