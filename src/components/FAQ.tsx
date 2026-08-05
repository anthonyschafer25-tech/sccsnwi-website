"use client";
import { useState } from "react";

const FAQS = [
  { q: "How fast can you respond to an emergency?", a: "We answer the phone 24 hours a day, 7 days a week, and in most cases can be on-site within the hour for emergencies across Northwest Indiana. Water and fire damage get worse by the hour, so we treat every call as urgent." },
  { q: "What areas do you serve?", a: "All of Northwest Indiana — Porter, Lake, La Porte, and Jasper counties, including Valparaiso, Portage, Chesterton, Michigan City, Crown Point, Merrillville, Hobart, Gary, Hammond, and 25+ more towns." },
  { q: "Are you licensed and certified?", a: "Yes. SCCS NWI is an IICRC certified firm, licensed and bonded, and independently owned. Our technicians are trained and certified in water damage restoration, mold remediation, and biohazard cleanup." },
  { q: "What makes your mold testing different?", a: "Standard mold tests only check for spores in the air. Our testing uses advanced particle identification that looks at mold along with other particles commonly found in indoor air, compares indoor samples to an outdoor baseline, and gives you clear, easy-to-understand results." },
  { q: "Is mold inspection separate from mold removal?", a: "Yes. Inspection and testing tell you exactly what is there and where. Remediation is the removal work itself. We recommend testing first so the remediation plan targets the actual problem — and so you have documentation for insurance or a home sale." },
  { q: "How do you test for mold in my home?", a: "We start with a visual inspection and moisture mapping using thermal imaging, then take air and surface samples. Samples are analyzed and results are typically available the next business day, with a written report explaining what we found." },
  { q: "Who owns the company, and are you a franchise?", a: "SCCS NWI is family owned and independently operated, founded by Vinnie Nowarita in 2012. We are not a franchise — you work directly with the crew doing the job, and there are no franchise fees built into your bill." },
  { q: "What will you haul away with junk removal?", a: "Water-damaged carpet and flooring, fire-damaged materials, drywall, insulation, furniture, appliances, construction debris, and general household junk. We sort recyclable materials when possible." },
  { q: "Will my neighbors know you are here for a trauma cleanup?", a: "No. We use unmarked vehicles and work discreetly. Trauma and crime scene cleanup is handled with complete confidentiality and compassion." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-bg-900" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Common questions</span>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">Straight answers.</h2>

        <div className="mt-12 divide-y divide-border border-t border-b border-border">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={openIdx === i}
              >
                <span className="text-base font-semibold text-white">{f.q}</span>
                <span className={`text-red-500 text-xl leading-none shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? "max-h-96 pb-5" : "max-h-0"}`}>
                <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
