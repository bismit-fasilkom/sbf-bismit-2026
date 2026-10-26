import { handsOnSource } from '@/lib/source';
import {
    DocsBody,
    DocsDescription,
    DocsPage,
    DocsTitle,
    MarkdownCopyButton,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getPageImageUrl, getPageMarkdownUrl } from '@/lib/shared';

export default async function Page(props: PageProps<'/hands-on/[[...slug]]'>) {
    const params = await props.params;
    if (!params.slug?.length) {
        const firstPage = handsOnSource.getPageTree().children.find((node) => node.type === 'page');
        if (firstPage?.type === 'page' && firstPage.url) redirect(firstPage.url);
        notFound();
    }

    const page = handsOnSource.getPage(params.slug);
    if (!page) notFound();

    const MDX = page.data.body;
    const markdownUrl = getPageMarkdownUrl(page).url;

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
            <div className="flex flex-row gap-2 items-center border-b pb-6">
                <MarkdownCopyButton markdownUrl={markdownUrl} />
            </div>
            <DocsBody>
                <MDX
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(handsOnSource, page),
                    })}
                />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return handsOnSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/hands-on/[[...slug]]'>): Promise<Metadata> {
    const params = await props.params;
    const page = params.slug?.length ? handsOnSource.getPage(params.slug) : handsOnSource.getPages()[0];
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            images: getPageImageUrl(page).url,
        },
    };
}
