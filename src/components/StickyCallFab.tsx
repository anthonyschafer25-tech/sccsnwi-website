"use client";
import { useState, useEffect, useRef } from "react";
import { Phone } from "@/components/Icons";
import { SITE } from "@/lib/site";

export function StickyCallFab() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); }; if (open) document.addEventListener("click", h); return () => document.removeEventListener("click", h); }, [open]);

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-50">
      <div className={`absolute bottom-[76px] right-0 w-72 bg-bg-800 rounded-2xl border border-border shadow-elevated overflow-hidden transition-all duration-300 ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95 pointer-events-none"}`}>
        <div className="p-4 border-b border-border"><p className="text-xs text-text-tertiary font-medium uppercase tracking-wider">Contact SCCS NWI</p><p className="text-xs text-text-tertiary/60 mt-0.5">24/7 Emergency Response</p></div>
        <a href={SITE.phoneHref} onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-4 hover:bg-bg-700 transition-colors border-b border-border/50">
          <div className="w-9 h-9 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-red-400" /></div>
          <div><p className="text-xs text-text-tertiary">Main Office</p><p className="text-sm font-bold text-white">{SITE.phoneDisplay}</p></div>
        </a>
        <a href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-4 hover:bg-bg-700 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0"><MailIcon /></div>
          <div><p className="text-xs text-text-tertiary">Prefer email?</p><p className="text-sm font-bold text-white">Request a Quote</p></div>
        </a>
      </div>
      <button onClick={() => setOpen(!open)} className="relative w-14 h-14 rounded-2xl bg-red-500 text-white shadow-[0_4px_20px_rgba(212,37,66,0.4)] flex items-center justify-center hover:bg-red-400 transition-all active:scale-95" aria-expanded={open} aria-label="Contact options">
        <span className="absolute inset-0 rounded-2xl bg-red-500 animate-ping opacity-20" />
        {open ? <svg viewBox="0 0 24 24" className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> : <Phone className="w-5 h-5 relative z-10" />}
      </button>
    </div>
  );
}

function MailIcon() {
  return <svg className="w-4 h-4 text-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}
