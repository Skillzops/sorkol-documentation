import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  turbopack: {
    root: process.cwd(),
  },

  output: 'export',

  trailingSlash: true,

  // GitHub Pages serves the production site from the repository path, while
  // local development should remain available at http://localhost:3000.
  basePath: isGitHubPagesBuild ? '/sorkol-documentation' : undefined,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/djckxdqzw/image/upload/**',
      },
    ],
  },
};

export default withMDX(config);
