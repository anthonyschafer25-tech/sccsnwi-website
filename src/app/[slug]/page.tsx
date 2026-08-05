import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, CITIES } from "@/lib/content";
import type { ServiceContent, CityContent } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { Phone, ArrowRight } from "@/components/Icons";

export function generateStaticParams() {
  return [...Object.keys(SERVICES), ...CITIES.map(c => c.slug)].map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  const city = CITIES.find(c => c.slug === slug);
  if (service) return { title: `${service.title} in NW Indiana`, description: service.description, alternates: { canonical: `/${slug}` } };
  if (city) return { title: `Restoration Services in ${city.name}, IN`, description: `24/7 water, fire, and mold restoration in ${city.name}, ${city.county} County, Indiana. Family-owned since 2012. Call (219) 779-8198.`, alternates: { canonical: `/${slug}` } };
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES[slug];
  const city = CITIES.find(c => c.slug === slug);
  if (!service && !city) notFound();

  return (<>
    <Navbar />
    <main>
      {service ? <ServicePage service={service} /> : city ? <CityPage city={city} /> : notFound()}
    </main>
    <Footer />
    <StickyCallFab />
  </>);
}

function ServicePage({ service }: { service: ServiceContent }) {
  return (<>
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Our Services</span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white">{service.heroTitle}</h1>
        <p className="mt-6 text-lg text-text-secondary max-w-xl">{service.heroSubtitle}</p>
        <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all"><Phone className="w-4 h-4" />Call {SITE.phoneDisplay}</a>
      </div>
    </section>
    <section className="pb-24 md:pb-32"><div className="max-w-4xl mx-auto px-6"><div className="space-y-12">{service.sections.map(s => <div key={s.heading}><h2 className="text-2xl md:text-3xl font-display tracking-tight text-white">{s.heading}</h2><p className="mt-4 text-text-secondary leading-relaxed whitespace-pre-line">{s.body}</p></div>)}</div></div></section>
    {service.relatedServices.length > 0 && <section className="py-20 bg-bg-900"><div className="max-w-7xl mx-auto px-6"><h2 className="text-2xl font-display tracking-tight text-white mb-8">Related Services</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{service.relatedServices.map(slug => {const r = SERVICES[slug]; if(!r) return null; return <Link key={slug} href={`/${slug}`} className="bg-bg-800 border border-border rounded-2xl p-6 hover:border-red-500/30 transition-all"><h3 className="font-semibold text-white">{r.title}</h3><div className="mt-3 flex items-center gap-1.5 text-sm text-text-tertiary hover:text-red-400 transition-colors">Learn more <ArrowRight className="w-3.5 h-3.5" /></div></Link>})}</div></div></section>}
  </>);
}

function CityPage({ city }: { city: CityContent }) {
  return (<>
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Proudly Serving {city.name}</span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white">Restoration services in {city.name}, Indiana</h1>
        <p className="mt-6 text-lg text-text-secondary max-w-xl">{city.description}. SCCS NWI provides 24/7 water, fire, and mold restoration throughout {city.county} County.</p>
        <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all"><Phone className="w-4 h-4" />{SITE.phoneDisplay}</a>
      </div>
    </section>
    <section className="pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-display tracking-tight text-white mb-8">All services in {city.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(SERVICES).map(([slug, svc]) => (
            <Link key={slug} href={`/${slug}`} className="bg-bg-800 border border-border rounded-2xl p-6 hover:border-red-500/30 transition-all">
              <h3 className="font-semibold text-white">{svc.title}</h3>
              <p className="mt-1.5 text-sm text-text-secondary line-clamp-2">{svc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>);
}
