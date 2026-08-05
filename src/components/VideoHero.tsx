"use client";
import { useEffect, useRef } from "react";
import { Phone, Star } from "@/components/Icons";
import { SITE } from "@/lib/site";

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden">
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline poster="/hero-poster.jpg">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-950 via-bg-950/60 to-bg-950/30" />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
        <p className="text-xs tracking-[0.2em] uppercase text-red-400 font-semibold">Family owned, serving NW Indiana since 2012</p>
        <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-display tracking-tight text-white leading-[0.95]">
          When disaster hits,<br />we move first.
        </h1>
        <p className="mt-6 text-lg text-text-secondary max-w-xl">
          We handle water, fire, and mold damage for homes and businesses across Northwest Indiana. We are a local family, and we treat your house the way we would want ours treated.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98]">
            <Phone className="w-4 h-4" />{SITE.phoneDisplay}
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-white font-semibold rounded-xl hover:bg-bg-700 transition-all">
            Request an inspection →
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <div className="flex items-center gap-2"><span className="text-xl font-bold text-white">5.0</span><Star className="w-4 h-4 text-red-500" /><span className="text-sm text-text-tertiary">74 five-star reviews</span></div>
          <div className="flex items-center gap-2"><span className="text-xl font-bold text-white">Fast</span><span className="text-sm text-text-tertiary">Local Response</span></div>
          <div className="flex items-center gap-2"><span className="text-xl font-bold text-white">IICRC</span><span className="text-sm text-text-tertiary">certified firm</span></div>
        </div>
      </div>
    </section>
  );
}
