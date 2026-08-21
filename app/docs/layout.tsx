import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      <a
        href="https://energy.sorkol.com"
        className="fixed right-5 top-4 z-40 hidden rounded-md bg-[#071b3b] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0b3471] md:inline-flex"
      >
        Sign in
      </a>
      {children}
    </DocsLayout>
  );
}
