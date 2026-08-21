import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: 'SORKOL | Documentation',
    },
    links: [
      { text: 'Sorkol.com', url: 'https://sorkol.com' },
      { text: 'Sign in', url: 'https://energy.sorkol.com' },
    ],
  };
}
