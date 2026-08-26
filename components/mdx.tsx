import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ImgHTMLAttributes } from 'react';

const docsBasePath = process.env.GITHUB_ACTIONS === 'true' ? '/sorkol-documentation' : '';

function DocsImage({ src, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const imageSource = typeof src === 'string' && src.startsWith('/images/')
    ? `${docsBasePath}${src}`
    : src;

  return <img src={imageSource} {...props} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: DocsImage,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
