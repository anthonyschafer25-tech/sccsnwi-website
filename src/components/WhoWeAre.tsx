import Image from "next/image";
import { SITE } from "@/lib/site";
import { Phone } from "@/components/Icons";

const STATS = [
  { value: "Fast", label: "Rapid Response", desc: "Quick to respond on urgent jobs for homes & businesses across Northwest Indiana." },
  { value: "5", label: "Core Service Lines", desc: "Water, fire, mold, trauma cleanup & junk removal for homes & businesses." },
  { value: "NWI", label: "Based & Operating", desc: "Serving Porter, Lake, La Porte & Jasper counties since 2012." },
];

export function WhoWeAre() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Who we are</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white leading-tight">
              It started with mold in our own house. We have kept it out of other people's homes ever since.
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed">
              SCCS NWI was founded in 2012 by Vinnie Nowarita, after hidden mold made his own son sick. After that, Vinnie set a few rules he still runs the company by: do the work right the first time, leave the house cleaner than you found it, and treat people the way you would want your own family treated.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              We are independently owned, not a franchise. You work directly with the crew doing the job, never a corporate call center, and your pricing stays honest because there are no franchise fees built into the bill.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/about" className="inline-flex items-center justify-center px-6 py-3 border border-border text-white font-semibold rounded-xl hover:bg-bg-700 transition-all">Why Homeowners Choose Us →</a>
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl hover:text-red-400 transition-all"><Phone className="w-4 h-4" />Call Us: {SITE.phoneDisplay}</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <Image src="/vinnie-family.png" alt="Vinnie Nowarita and family, owners of SCCS NWI" width={640} height={800} className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-950 to-transparent p-6 pt-16">
                <p className="text-2xl font-display text-white">2012</p>
                <p className="text-xs tracking-[0.15em] uppercase text-text-tertiary">Family owned & operated</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map(s => (
            <div key={s.label} className="border-t border-border pt-6">
              <p className="text-3xl font-display text-red-500">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-white">{s.label}</p>
              <p className="mt-2 text-sm text-text-tertiary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
