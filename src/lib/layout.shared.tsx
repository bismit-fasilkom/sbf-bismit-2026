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
            {
                type: 'menu',
                text: 'Resources',
                on: 'nav',
                secondary: true,
                items: [
                    {
                        text: 'Material',
                        url: '/docs/',
                        description: 'Course materials and documentation',
                    },
                    {
                        text: 'Hands-On',
                        url: '/hands-on',
                        description: 'Practical exercises and tutorials',
                    },
                    {
                        text: 'Playground',
                        url: 'https://codepen.io/pen/',
                        description: 'External interactive code environment',
                        external: true,
                    },
                ],
            },
        ],
    };
}