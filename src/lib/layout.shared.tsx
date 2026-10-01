import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import bismitLogo from '../public/images/bismit.svg';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
          <span className="flex items-center gap-2">
          <Image src={bismitLogo} alt="" className="h-7 w-auto" />
          <span>SBF Fasilkom 2026</span>
        </span>
      ),
    },
    links: [
        { text: 'Material', url: '/docs', on: 'nav', secondary: true },
        { text: 'Hands-On', url: '/docs', on: 'nav', secondary: true },
        { text: 'Playground', url: 'https://codepen.io/pen/', on: 'nav', secondary: true }],
  };
}
