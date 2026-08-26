import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src="https://res.cloudinary.com/djckxdqzw/image/upload/v1787741068/favicon_bqqeay.png"
          alt="SORKOL"
          width={32}
          height={32}
          className="h-8 w-8"
          priority
        />
      ),
      url: 'https://sorkol.com',
    },
  };
}
