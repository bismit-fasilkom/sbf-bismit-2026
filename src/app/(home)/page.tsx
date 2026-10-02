import { LandingSearch } from '@/components/landing-search';
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-landing relative isolate grid min-h-[min(780px,calc(100svh-3.5rem))] place-items-center bg-[radial-gradient(ellipse_at_50%_44%,rgba(39,110,176,0.14),transparent_50%),#f5f9fc] px-6 pt-[clamp(4rem,10vh,7rem)] pb-20 text-center text-[#102235] dark:bg-[radial-gradient(ellipse_at_50%_44%,rgba(39,110,176,0.25),transparent_48%),#091723] dark:text-[#f5f9fc]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(39,110,176,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(39,110,176,0.1)_1px,transparent_1px)] bg-size-[72px_72px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)] dark:bg-[linear-gradient(rgba(159,196,224,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(159,196,224,0.18)_1px,transparent_1px)] dark:opacity-[0.14]"
      />
      <div className="w-full max-w-[850px]">
        <p className="mb-6 flex items-center justify-center gap-2.5 font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-[#536d83] dark:text-[#a5bbcd]">
          SBF BISMIT 2026
        </p>
        <h1 className="m-0 text-[clamp(2.8rem,7vw,6rem)] leading-[1.02] font-semibold tracking-[-0.075em]">
          Dokumentasi Materi<br />
          <i className="font-serif font-normal text-[#276eb0] dark:text-[#80c2ff]">Software Engineering</i>
        </h1>

        <LandingSearch />
          <Link className="mt-6 inline-block rounded-lg bg-[#276eb0] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#276eb0]/90
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="/docs">
              Open Docs
          </Link>
      </div>
      <footer className="absolute inset-x-0 bottom-0 border-t border-[#d9e3eb] px-6 py-4 text-center text-xs text-[#627a8e] dark:border-white/10 dark:text-[#8fa5b7]">
        Biro Bisnis dan Kemitraan BEM Fasilkom UI © 2026 - All Rights Reserved.
      </footer>
    </main>
  );
}
