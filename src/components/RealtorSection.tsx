"use client";
import { useState } from "react";
import { Phone } from "@/components/Icons";
import { SITE } from "@/lib/site";

const POINTS = [
  { title: "Built around your deadlines", body: "We schedule quickly and turn the work around to fit your closing timeline, not the other way around." },
  { title: "Documentation you can hand off", body: "Photo reports and a clear, written scope of work for buyers, sellers, and lenders." },
  { title: "Done so it passes re-inspection", body: "We find and fix the source, not just the surface, so the property holds up when it is checked again." },
];

export function RealtorSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">For real estate professionals</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white leading-tight">Realtors trust us to keep deals on track.</h2>
          <p className="mt-6 text-text-secondary leading-relaxed">
            When an inspection turns up water damage or mold, the deal does not have to fall apart. Real estate agents across Northwest Indiana recommend us because we move fast, document the work clearly, and fix the problem the right way, so the property passes re-inspection.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {POINTS.map((p, i) => (
            <div key={p.title} className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 px-7 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98]">
            <Phone className="w-4 h-4" />Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
