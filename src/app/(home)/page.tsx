import { FullSearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';

export default function HomePage() {
  return (
    <main className="home-landing relative isolate grid min-h-[min(780px,calc(100svh-3.5rem))] place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_44%,rgba(39,110,176,0.14),transparent_50%),#f5f9fc] px-6 pt-[clamp(4rem,10vh,7rem)] pb-20 text-center text-[#102235] dark:bg-[radial-gradient(ellipse_at_50%_44%,rgba(39,110,176,0.25),transparent_48%),#091723] dark:text-[#f5f9fc]">
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

        <div className="mx-auto mt-[clamp(2.3rem,6vh,3.4rem)] w-full max-w-[590px] text-left">
          <FullSearchTrigger
            className="min-h-16 w-full rounded-[5px] border border-[#c5d5e2] bg-white/95 px-4 py-3.5 text-left text-[0.95rem] text-[#263d51] shadow-[0_16px_45px_rgba(22,57,85,0.1),0_0_0_4px_rgba(39,110,176,0.035)] transition-[border-color,background-color,box-shadow] hover:border-[#6b9cc5] hover:bg-white hover:shadow-[0_16px_45px_rgba(22,57,85,0.13),0_0_0_4px_rgba(39,110,176,0.09)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#276eb0] [&>svg]:text-[#276eb0] [&_kbd]:border-[#d4e0e9] [&_kbd]:bg-[#f1f6fa] [&_kbd]:text-[#526c81] dark:border-[rgba(174,207,233,0.35)] dark:bg-[rgba(15,36,53,0.92)] dark:text-[#e8f2fa] dark:shadow-[0_18px_55px_rgba(0,0,0,0.22),0_0_0_4px_rgba(119,191,255,0.04)] dark:hover:border-[rgba(141,202,255,0.8)] dark:hover:bg-[#102a3f] dark:hover:shadow-[0_18px_55px_rgba(0,0,0,0.24),0_0_0_4px_rgba(119,191,255,0.1)] dark:focus-visible:outline-[#8dcaff] dark:[&>svg]:text-[#8dcaff] dark:[&_kbd]:border-[rgba(174,207,233,0.24)] dark:[&_kbd]:bg-white/5 dark:[&_kbd]:text-[#9fb5c6] max-[500px]:min-h-[3.6rem]"
          />
          <span className="mt-3 block pl-1 text-[0.78rem] text-[#627a8e] dark:text-[#7f98ab] max-[500px]:text-center">
            Cari topik, panduan, atau materi
          </span>
        </div>
      </div>
    </main>
  );
}
