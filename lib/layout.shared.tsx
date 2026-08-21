import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src="/images/sorkol-logo.png"
          alt="SORKOL"
          width={170}
          height={32}
          className="h-8 w-auto"
          priority
        />
      ),
      url: 'https://sorkol.com',
    },
  };
}
