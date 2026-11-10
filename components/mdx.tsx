import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { StaticImageData } from 'next/image';
import type { ImgHTMLAttributes } from 'react';

const docsBasePath = process.env.GITHUB_ACTIONS === 'true' ? '/sorkol-documentation' : '';

type DocsImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src?: ImgHTMLAttributes<HTMLImageElement>['src'] | StaticImageData;
};

function DocsImage({ src, ...props }: DocsImageProps) {
  // MDX imports local images as metadata objects rather than URL strings.
  const importedImage = typeof src === 'object' && src !== null && 'src' in src ? src : undefined;
  const sourceUrl = typeof src === 'object' && src !== null && 'src' in src ? src.src : src;
  const imageSource = typeof sourceUrl === 'string' && sourceUrl.startsWith('/images/')
    ? `${docsBasePath}${sourceUrl}`
    : sourceUrl;

  return <img src={imageSource} width={importedImage?.width} height={importedImage?.height} {...props} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: DocsImage,
    DocsImage,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
