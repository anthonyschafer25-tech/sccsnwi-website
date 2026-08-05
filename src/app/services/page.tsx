import type { Metadata } from "next";
import Link from "next/link";
import { Droplet, Flame, Warning, Shield, Wrench, Search, ArrowRight } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";

export const metadata: Metadata = {
  title: "Restoration Services in NW Indiana",
  description: "Water damage, fire damage, mold remediation, trauma cleanup, and junk removal across Northwest Indiana. 24/7 emergency response. IICRC certified.",
};

const ALL_SERVICES = [
  { icon: Droplet, title: "Water Damage Restoration", desc: "Emergency water extraction, structural drying, and full restoration.", href: "/water-damage-restoration" },
  { icon: Flame, title: "Fire Damage Restoration", desc: "Smoke and soot cleanup, structural repairs, and content cleaning.", href: "/fire-damage-restoration" },
  { icon: Warning, title: "Mold Inspection and Testing", desc: "Advanced particle-ID mold testing and air quality assessment.", href: "/mold-inspection-and-testing" },
  { icon: Warning, title: "Mold Remediation", desc: "Complete mold removal with containment and HEPA filtration.", href: "/mold-remediation" },
  { icon: Warning, title: "Mold Mitigation", desc: "Preventative moisture control to stop future mold growth.", href: "/mold-mitigation" },
  { icon: Flame, title: "Smoke Damage", desc: "Smoke residue cleanup, thermal fogging, and air scrubbing.", href: "/smoke-damage" },
  { icon: Search, title: "Smoke Testing", desc: "Identify hidden smoke pathways using specialized equipment.", href: "/smoke-testing" },
  { icon: Wrench, title: "Soot Removal", desc: "Professional soot cleanup from walls, contents, and HVAC.", href: "/soot-removal" },
  { icon: Wrench, title: "Structural Drying", desc: "Industrial dehumidification and air movement.", href: "/structural-drying" },
  { icon: Shield, title: "Content Cleaning & Storage", desc: "Pack-out, cleaning, and secure storage during restoration.", href: "/content-cleaning-storage" },
  { icon: Droplet, title: "Flood Clean Up", desc: "Rapid water removal and sanitization after flooding.", href: "/flood-clean-up" },
  { icon: Droplet, title: "Water Removal", desc: "High-capacity extraction of standing water.", href: "/water-removal" },
  { icon: Wrench, title: "Junk Removal", desc: "Removal and disposal of damaged materials and debris.", href: "/junk-removal" },
  { icon: Shield, title: "Crime Scene Cleanup", desc: "Discreet, certified biohazard and trauma remediation.", href: "/crime-scene-cleanup" },
  { icon: Search, title: "Air Quality Testing", desc: "Measure mold spore levels and identify contamination.", href: "/air-quality-testing-to-measure-mold-levels" },
];

export default function ServicesPage() {
  return (<>
    <Navbar />
    <main>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">What We Do</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white">Complete restoration under one roof.</h1>
            <p className="mt-6 text-lg text-text-secondary max-w-xl">From emergency water extraction to full mold remediation. One call handles everything.</p>
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_SERVICES.map(svc => (
              <Link key={svc.title} href={svc.href} className="group bg-bg-800 border border-border rounded-2xl p-6 hover:border-red-500/30 hover:bg-bg-700 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4"><svc.icon className="w-5 h-5 text-red-500" /></div>
                <h2 className="font-semibold text-white group-hover:text-red-400 transition-colors">{svc.title}</h2>
                <p className="mt-1.5 text-sm text-text-secondary">{svc.desc}</p>
                <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-text-tertiary group-hover:text-red-400 transition-colors">Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <StickyCallFab />
  </>);
}
