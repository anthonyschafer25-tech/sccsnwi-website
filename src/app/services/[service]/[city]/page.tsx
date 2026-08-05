import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, CITY_SERVICE_PAGES } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { Phone, ArrowRight } from "@/components/Icons";

export function generateStaticParams() { return CITY_SERVICE_PAGES.map(p => ({ service: p.service, city: p.city })); }

export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }): Promise<Metadata> {
  const { service: sSlug, city: cSlug } = await params;
  const page = CITY_SERVICE_PAGES.find(p => p.service === sSlug && p.city === cSlug);
  if (!page) return {};
  return {
    title: `${page.serviceTitle} in ${page.cityName}, IN`,
    description: `${page.serviceTitle} in ${page.cityName}, Indiana. 24/7 emergency response from a family-owned, IICRC certified company. Call (219) 779-8198.`,
    alternates: { canonical: `/services/${sSlug}/${cSlug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service: sSlug, city: cSlug } = await params;
  const service = SERVICES[sSlug];
  const page = CITY_SERVICE_PAGES.find(p => p.service === sSlug && p.city === cSlug);
  if (!service || !page) notFound();

  return (<>
    <Navbar /><main>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">{page.cityName}, Indiana</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white">{page.serviceTitle} in {page.cityName}</h1>
          <p className="mt-6 text-text-secondary max-w-xl">SCCS NWI provides {page.serviceTitle.toLowerCase()} in {page.cityName} and throughout Northwest Indiana. 24/7 emergencies.</p>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all"><Phone className="w-4 h-4" />{SITE.phoneDisplay}</a>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">{service.sections.slice(0,2).map(s => <div key={s.heading}><h2 className="text-2xl font-display tracking-tight text-white">{s.heading}</h2><p className="mt-4 text-text-secondary leading-relaxed whitespace-pre-line">{s.body}</p></div>)}</div>
          <div className="mt-10"><Link href={`/${sSlug}`} className="inline-flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors">Full {page.serviceTitle.toLowerCase()} details <ArrowRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
      <section className="py-20 bg-red-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-display tracking-tight text-white">Need {page.serviceTitle.toLowerCase()} in {page.cityName}?</h2>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-white text-red-500 font-bold rounded-xl hover:bg-white/90 transition-all"><Phone className="w-5 h-5" />{SITE.phoneDisplay}</a>
        </div>
      </section>
    </main>
    <Footer /><StickyCallFab />
  </>);
}
