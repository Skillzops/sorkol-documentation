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

  basePath: '/sorkol-documentation',

  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
