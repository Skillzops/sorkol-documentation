import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import './global.css';
import { Inter } from 'next/font/google';
import { StaticSearchDialog } from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

const assetPrefix = process.env.GITHUB_ACTIONS === 'true' ? '/sorkol-documentation' : '';

export const metadata: Metadata = {
  icons: {
    icon: [{ url: `${assetPrefix}/favicon.png`, type: 'image/png' }],
    shortcut: `${assetPrefix}/favicon.png`,
    apple: `${assetPrefix}/apple-touch-icon.png`,
  },
  metadataBase: new URL('https://skillzops.github.io/sorkol-documentation'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog: StaticSearchDialog }}>{children}</RootProvider>
      </body>
    </html>
  );
}
