import { Check } from "@/components/Icons";

const REASONS = [
  {
    num: "01",
    title: "Clean, organized crews",
    body: "We seal off the work area, lay down protection, and clean up at the end of every day. You will not find our mess in the rest of your house.",
    points: ["Containment on every job", "Daily site walkthroughs"],
  },
  {
    num: "02",
    title: "Honestly competitive pricing",
    body: "Because we are not a franchise, there is no markup to cover someone else's name. You get a written quote up front with no surprises.",
    points: ["Upfront written estimates", "Detailed photos and documentation"],
  },
  {
    num: "03",
    title: "Efficient, quality work",
    body: "Our techs are trained and IICRC certified, and they work fast without cutting corners. We finish the job and do not leave you with a list of loose ends.",
    points: ["IICRC certified technicians", "Source fixed, not just surface"],
  },
];

export function WhySCCS() {
  return (
    <section className="py-24 md:py-32 bg-bg-900" id="why-sccs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Why SCCS</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white leading-tight">You can tell a lot about a crew by the house they leave behind.</h2>
          <p className="mt-6 text-text-secondary leading-relaxed">
            The big franchises are chasing the next job. We live here, so the people we work for are our neighbors. The same trained, certified crew works every job, and we treat your house like it was our own.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {REASONS.map(r => (
            <div key={r.num}>
              <p className="text-sm font-mono text-red-500">{r.num}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{r.title}</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">{r.body}</p>
              <ul className="mt-4 space-y-2">
                {r.points.map(pt => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-text-secondary"><Check className="w-3.5 h-3.5 text-red-500 shrink-0" />{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-10">
          <p className="text-text-secondary">Certified, local, and family owned, every job done right the first time.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98] shrink-0">Request an inspection →</a>
        </div>
      </div>
    </section>
  );
}
