"use client";
import { useRef, useEffect } from "react";
import { Shield, Check, GoogleMark, FacebookMark } from "@/components/Icons";

const ITEMS = [
  { icon: Shield, label: "IICRC Certified Firm" },
  { icon: Check, label: "Licensed & Bonded" },
  { icon: Check, label: "Independently Owned" },
  { icon: Shield, label: "Realtor Trusted & Recommended" },
  { icon: Check, label: "Family Owned Since 2012" },
  { icon: Check, label: "Quick Response Time" },
  { icon: GoogleMark, label: "74+ Google Reviews" },
  { icon: FacebookMark, label: "100% Recommended on Facebook" },
];

// Duplicate the list for a seamless loop
const TRACK = [...ITEMS, ...ITEMS];

export function TrustMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current; if (!track) return;
    let pos = 0; let id: number;
    const animate = () => { pos -= 0.4; if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0; track.style.transform = `translateX(${pos}px)`; id = requestAnimationFrame(animate); };
    id = requestAnimationFrame(animate); return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="bg-bg-900 border-b border-border py-5 overflow-hidden" aria-label="Trust badges">
      <div className="mb-3 text-center"><span className="text-xs tracking-[0.15em] uppercase text-text-tertiary font-medium">Trusted by Northwest Indiana</span></div>
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap w-max">
        {TRACK.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 shrink-0">
            <item.icon className="w-4 h-4 text-red-500" />
            <span className="text-sm text-text-secondary font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
