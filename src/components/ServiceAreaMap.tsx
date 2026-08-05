"use client";
import { CITIES } from "@/lib/content";

const FEATURED = ["valparaiso","portage","chesterton","michigan-city","crown-point","merrillville","hobart","gary","la-porte","hammond","munster","schererville"];

export function ServiceAreaMap() {
  const featured = CITIES.filter(c => FEATURED.includes(c.slug));
  return (
    <section className="py-24 md:py-32" id="service-area">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Service area</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">All of Northwest Indiana.</h2>
          <p className="mt-6 text-text-secondary leading-relaxed">
            Porter, Lake, La Porte, and Jasper counties. More than 30 towns. If you are anywhere in Northwest Indiana, odds are we have already worked a few streets over.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-3">
          {featured.map(c => (
            <a key={c.slug} href={`/${c.slug}`} className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors group">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform" />
              {c.name}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a href="/service-area" className="text-sm font-medium text-text-tertiary hover:text-white transition-colors">See all {CITIES.length} towns we serve →</a>
        </div>
      </div>
    </section>
  );
}
