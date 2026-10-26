import { handsOnSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/hands-on'>) {
  return (
      <DocsLayout tree={handsOnSource.getPageTree()} {...baseOptions()}>
        {children}
      </DocsLayout>
  );
}
