import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

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
  basePath: process.env.NODE_ENV === 'production' ? '/sorkol-documentation' : undefined,

  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
