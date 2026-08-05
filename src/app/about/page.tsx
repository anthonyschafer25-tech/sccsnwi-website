import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { SITE } from "@/lib/site";
import { Phone } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description: "Family-owned and operated since 2012. Learn how SCCS NWI became Northwest Indiana's trusted restoration company. IICRC certified, independently owned.",
};

export default function AboutPage() {
  return (<>
    <Navbar />
    <main>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">About SCCS NWI</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white leading-tight">A local family keeping other families safe since 2012.</h1>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>SCCS NWI was founded in 2012 by Vinnie Nowarita, after hidden mold made his own son sick. That experience set the standard the company still runs by: do the work right the first time, leave the house cleaner than you found it, and treat people the way you would want your own family treated.</p>
            <p>We are independently owned, not a franchise. You work directly with the crew doing the job, never a corporate call center, and your pricing stays honest because there are no franchise fees built into the bill.</p>
            <p>Today SCCS NWI handles water damage restoration, fire and smoke cleanup, mold inspection and remediation, trauma and crime scene cleanup, and junk removal for homes and businesses across Porter, Lake, La Porte, and Jasper counties.</p>
            <div className="pt-4">
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 px-7 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-400 transition-all"><Phone className="w-4 h-4" />{SITE.phoneDisplay}</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-border"><Image src="/vinnie-portrait.png" alt="Vinnie Nowarita, founder of SCCS NWI" width={400} height={500} className="w-full h-auto object-cover" /></div>
            <div className="rounded-2xl overflow-hidden border border-border mt-8"><Image src="/vinnie-hazmat.png" alt="SCCS NWI technician in protective equipment" width={400} height={500} className="w-full h-auto object-cover" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-900 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "2012", l: "Founded" },
            { v: "74+", l: "Five-star Google reviews" },
            { v: "24/7", l: "Emergency response" },
            { v: "4", l: "Counties served" },
          ].map(s => <div key={s.l}><p className="text-3xl font-display text-red-500">{s.v}</p><p className="mt-1 text-xs tracking-[0.1em] uppercase text-text-tertiary">{s.l}</p></div>)}
        </div>
      </section>
    </main>
    <Footer />
    <StickyCallFab />
  </>);
}
