import Link from "next/link";
import { Droplet, Flame, Warning, Shield, Wrench, ArrowRight } from "@/components/Icons";

const SERVICES = [
  { icon: Droplet, title: "Water Damage Restoration", desc: "Emergency water extraction, structural drying, and full restoration.", href: "/water-damage-restoration" },
  { icon: Flame, title: "Fire Damage Restoration", desc: "Smoke and soot cleanup, structural repairs, and content cleaning.", href: "/fire-damage-restoration" },
  { icon: Warning, title: "Mold Inspection & Testing", desc: "Advanced particle-ID mold testing and air quality assessment.", href: "/mold-inspection-and-testing" },
  { icon: Warning, title: "Mold Remediation", desc: "Complete mold removal with containment and HEPA filtration.", href: "/mold-remediation" },
  { icon: Shield, title: "Trauma & Crime Scene Cleanup", desc: "Discreet, certified biohazard remediation.", href: "/crime-scene-cleanup" },
  { icon: Wrench, title: "Junk Removal", desc: "Removal and disposal of damaged materials and debris.", href: "/junk-removal" },
];

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-bg-900" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">What we do</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">We handle the whole job, not just the easy part.</h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-text-tertiary hover:text-white transition-colors shrink-0">Explore all services <ArrowRight className="w-4 h-4" /></Link>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(svc => (
            <Link key={svc.title} href={svc.href} className="group bg-bg-800 border border-border rounded-2xl p-7 hover:border-red-500/30 hover:bg-bg-700 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-5"><svc.icon className="w-5 h-5 text-red-500" /></div>
              <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">{svc.title}</h3>
              <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{svc.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-text-tertiary group-hover:text-red-400 transition-colors">Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
