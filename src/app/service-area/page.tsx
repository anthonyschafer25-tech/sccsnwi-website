import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { CITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service Area — All of Northwest Indiana",
  description: "SCCS NWI serves Porter, Lake, La Porte, and Jasper counties — 34 towns across Northwest Indiana. 24/7 emergency restoration. Call (219) 779-8198.",
};

const COUNTIES = ["Porter", "Lake", "La Porte", "Jasper"];

export default function ServiceAreaPage() {
  return (<>
    <Navbar />
    <main>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Service area</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white">All of Northwest Indiana.</h1>
          <p className="mt-6 text-lg text-text-secondary max-w-xl">Porter, Lake, La Porte, and Jasper counties. More than 30 towns. If you are anywhere in Northwest Indiana, odds are we have already worked a few streets over.</p>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {COUNTIES.map(county => {
            const towns = CITIES.filter(c => c.county === county);
            if (!towns.length) return null;
            return (
              <div key={county}>
                <h2 className="text-xl font-display tracking-tight text-white mb-5">{county} County</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-3">
                  {towns.map(c => (
                    <a key={c.slug} href={`/${c.slug}`} className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors group">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform" />
                      {c.name}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
    <Footer />
    <StickyCallFab />
  </>);
}
