import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, InstagramMark, FacebookMark, YoutubeMark } from "@/components/Icons";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-bg-900 border-t border-border">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-text-tertiary">Ready to talk</span>
          <h3 className="mt-2 text-2xl md:text-3xl font-display tracking-tight text-white">Get a quote in 24 hours.</h3>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98]">Request a Quote</Link>
            <a href={SITE.phoneHref} className="px-6 py-3 border border-border text-white font-semibold rounded-xl hover:bg-bg-700 transition-all">{SITE.phoneDisplay}</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/"><Image src="/sccs-logo.png" alt="SCCS NWI" width={120} height={60} className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" /></Link>
            <p className="mt-4 text-sm text-text-tertiary max-w-xs leading-relaxed">Family-owned restoration company serving Northwest Indiana since 2012. 24/7 emergency response.</p>
            <div className="flex gap-3 mt-5">
              <a href={SITE.social.instagram} target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-bg-800 flex items-center justify-center text-text-tertiary hover:bg-bg-700 hover:text-white transition-all" aria-label="Instagram"><InstagramMark /></a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-bg-800 flex items-center justify-center text-text-tertiary hover:bg-bg-700 hover:text-white transition-all" aria-label="Facebook"><FacebookMark /></a>
              <a href={SITE.social.youtube} target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-bg-800 flex items-center justify-center text-text-tertiary hover:bg-bg-700 hover:text-white transition-all" aria-label="YouTube"><YoutubeMark /></a>
            </div>
          </div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-tertiary mb-4">Navigate</h4><ul className="space-y-2.5">{["Home","About","Services","Contact","Service Area","Reviews"].map(l=><li key={l}><Link href={`/${l.toLowerCase().replace(/\s+/g,"-")}`} className="text-sm text-text-secondary hover:text-white transition-colors">{l}</Link></li>)}</ul></div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-tertiary mb-4">Services</h4><ul className="space-y-2.5">{["Water Damage","Fire Damage","Mold Remediation","Mold Inspection","Smoke Damage","Trauma Cleanup"].map(s=><li key={s}><Link href={`/${s.toLowerCase().replace(/\s+/g,"-")}`} className="text-sm text-text-secondary hover:text-white transition-colors">{s}</Link></li>)}</ul></div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-tertiary mb-4">Contact</h4><ul className="space-y-3"><li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-red-500 shrink-0" /><a href={SITE.phoneHref} className="text-sm text-white font-semibold hover:text-red-400 transition-colors">{SITE.phoneDisplay}</a></li><li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-text-tertiary shrink-0" /><span className="text-sm text-text-secondary">Valparaiso, IN 46383</span></li><li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-text-tertiary shrink-0" /><a href={`mailto:${SITE.email}`} className="text-sm text-text-secondary hover:text-white transition-colors">{SITE.email}</a></li></ul></div>
        </div>
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-tertiary"><p>&copy; 2026 SCCS NWI · Specialty Cleaning & Contracting Services. All rights reserved.</p><div className="flex gap-6"><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></div></div>
      </div>
    </footer>
  );
}
