'use client';

import { fetchClient } from 'fumadocs-core/search/client/fetch';
import { useDocsSearch } from 'fumadocs-core/search/client';
import Link from 'next/link';
import { ArrowUpRight, FileText, Hash, Search, LoaderCircle } from 'lucide-react';
import { useId, useState } from 'react';

const searchClient = fetchClient();

function renderHighlightedContent(content: string) {
  return content.split(/(<mark>[\s\S]*?<\/mark>)/g).map((part, index) => {
    const match = part.match(/^<mark>([\s\S]*)<\/mark>$/);

    return match ? (
      <mark key={index} className="rounded-sm bg-[#d9ecfb] px-0.5 text-[#174e7d] dark:bg-[#244d6e] dark:text-[#b9e0ff]">
        {match[1]}
      </mark>
    ) : part;
  });
}

export function LandingSearch() {
  const { search, setSearch, query } = useDocsSearch({ client: searchClient, delayMs: 150 });
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();
  const results = Array.isArray(query.data) ? query.data.filter((result) => result.type !== 'text') : [];

  return (
    <div
      className="relative mx-auto mt-[clamp(2.3rem,6vh,3.4rem)] w-full max-w-[590px] text-left"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <label className="sr-only" htmlFor={`${listId}-input`}>Search documentation</label>
      <div className="flex min-h-16 items-center gap-3 rounded-[5px] border border-[#c5d5e2] bg-white/95 px-4 text-[#263d51] shadow-[0_16px_45px_rgba(22,57,85,0.1),0_0_0_4px_rgba(39,110,176,0.035)] transition-[border-color,background-color,box-shadow] focus-within:border-[#6b9cc5] focus-within:shadow-[0_16px_45px_rgba(22,57,85,0.13),0_0_0_4px_rgba(39,110,176,0.09)] dark:border-[rgba(174,207,233,0.35)] dark:bg-[rgba(15,36,53,0.92)] dark:text-[#e8f2fa] dark:shadow-[0_18px_55px_rgba(0,0,0,0.22),0_0_0_4px_rgba(119,191,255,0.04)]">
        <Search aria-hidden="true" className="size-5 shrink-0 text-[#276eb0] dark:text-[#8dcaff]" />
        <input
          id={`${listId}-input`}
          type="search"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen && search.length > 0}
          aria-controls={listId}
          autoComplete="off"
          placeholder="Cari topik atau materi..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setIsOpen(false);
          }}
          className="min-w-0 flex-1 bg-transparent py-4 text-[0.95rem] text-[#263d51] outline-none placeholder:text-[#8397a8] dark:text-[#e8f2fa] dark:placeholder:text-[#91a8ba]"
        />
        {query.isLoading && <LoaderCircle aria-label="Searching" className="size-4 animate-spin text-[#6b879e]" />}
        <kbd className="hidden rounded border border-[#d4e0e9] bg-[#f1f6fa] px-2 py-1 font-mono text-xs text-[#526c81] sm:block dark:border-[rgba(174,207,233,0.24)] dark:bg-white/5 dark:text-[#9fb5c6]">⌕</kbd>
      </div>

      {isOpen && search.trim().length > 0 && (
        <div id={listId} role="listbox" aria-label="Search results" className="relative z-30 mt-2 max-h-[min(60vh,24rem)] overflow-y-auto rounded-lg border border-[#d4e0e9] bg-white p-2 shadow-[0_20px_60px_rgba(18,45,67,0.2)] dark:border-white/10 dark:bg-[#102435]">
          {results.length > 0 ? (
            <>
              <div className="flex items-center justify-between border-b border-[#e6edf2] px-3 pb-2 pt-1 font-mono text-[0.62rem] font-semibold tracking-[0.12em] text-[#71889b] dark:border-white/10 dark:text-[#9aafbf]">
                <span>RESULTS</span>
                <span>{results.length}</span>
              </div>
              <div className="mt-1 space-y-0.5">
                {results.map((result) => {
                  const ResultIcon = result.type === 'heading' ? Hash : FileText;
                  const kind = result.type === 'page' ? 'Guide' : result.type === 'heading' ? 'Section' : 'Excerpt';

                  return (
                    <Link
                      key={result.id}
                      href={result.url}
                      role="option"
                      aria-selected="false"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-[#263d51] outline-none transition-colors hover:bg-[#edf5fb] focus-visible:bg-[#edf5fb] dark:text-[#e6f0f7] dark:hover:bg-white/10 dark:focus-visible:bg-white/10"
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#edf5fb] text-[#527895] dark:bg-white/5 dark:text-[#9bbbd3]">
                        <ResultIcon aria-hidden="true" className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        {result.breadcrumbs && result.breadcrumbs.length > 0 && (
                          <span className="mb-0.5 block truncate text-[0.68rem] text-[#71889b] dark:text-[#9aafbf]">
                            {result.breadcrumbs.join('  /  ')}
                          </span>
                        )}
                        <span className={`block line-clamp-2 text-sm ${result.type === 'text' ? 'font-normal text-[#50677a] dark:text-[#bdcbd6]' : 'font-medium'}`}>
                          {renderHighlightedContent(result.content)}
                        </span>
                      </span>
                      <span className="hidden shrink-0 items-center gap-1 text-[0.65rem] text-[#8297a8] sm:flex">
                        {kind}<ArrowUpRight aria-hidden="true" className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : !query.isLoading && (
            <div className="px-3 py-6 text-center">
              <p className="text-sm font-medium text-[#263d51] dark:text-[#e6f0f7]">No results found</p>
              <p className="mt-1 text-xs text-[#71889b] dark:text-[#9aafbf]">Try another keyword.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
