import type { NextConfig } from "next";
import path from "node:path";

// Ensure this path is correct and file exists
const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
  // Remove outputFileTracingRoot to avoid path issues
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove turbopack rule if loader file doesn't exist
  // turbopack: {
  //   rules: {
  //     '*.{jsx,tsx}': { loaders: [LOADER] }
  //   }
  // }
};

export default nextConfig;   