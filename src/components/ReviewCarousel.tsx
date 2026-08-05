"use client";
import { useState } from "react";
import { Star, GoogleMark } from "@/components/Icons";
import { SITE } from "@/lib/site";

interface Review { name: string; time: string; rating: number; text: string; source: string; }

const REVIEWS: Review[] = [
  { name: "Jim Wheeler", time: "a week ago", rating: 5, source: "Google", text: "SCCS did a fantastic job restoring our basement after a flood. They were quick to start and worked every day until it was done. When I saw the finished basement for the first time, I thought it was brand new." },
  { name: "Carissa Hughes", time: "a month ago", rating: 5, source: "Google", text: "Thank you SCCS for fixing the mold the right way. We had someone else on it first and failed inspection. Vinnie and his team came in, did a fantastic job, and we passed. Highly recommend." },
  { name: "Danielle W.", time: "a year ago", rating: 5, source: "Google", text: "Vinnie and his team were absolutely amazing. The professionalism, communication, and punctuality were everything you could wish for. He called us back within an hour, showed up the next day, and explained everything in detail." },
  { name: "Mike R.", time: "2 months ago", rating: 5, source: "Google", text: "They came out at 2 AM when our basement flooded. Had equipment running within the hour. Saved our finished basement. Professional, fast, and knew exactly what to do." },
  { name: "James P.", time: "1 week ago", rating: 5, source: "Google", text: "Called at 11 PM after discovering a leak. They walked me through shutting off the water and had a crew here by midnight." },
];

export function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState<Review | null>(null);
  const r = REVIEWS[current];
  const prev = () => setCurrent(c => c === 0 ? REVIEWS.length - 1 : c - 1);
  const next = () => setCurrent(c => c === REVIEWS.length - 1 ? 0 : c + 1);

  return (
    <section className="py-24 md:py-32 bg-bg-900" id="reviews">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-red-500" />)}
          <span className="ml-2 text-text-tertiary text-sm font-medium">5.0 from 74 Google reviews</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">What our neighbors say.</h2>

        <div className="mt-12 bg-bg-800 border border-border rounded-2xl p-8 md:p-10 max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">{r.name[0]}</div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{r.name}</p>
              <p className="text-xs text-text-tertiary flex items-center gap-1.5"><GoogleMark className="w-3 h-3" />{r.source} · {r.time}</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-red-500" />)}</div>
          <p className="text-sm text-text-secondary leading-relaxed text-left">{r.text.length > 180 ? r.text.slice(0, 180) + "…" : r.text}</p>
          {r.text.length > 180 && <button onClick={() => setModal(r)} className="mt-2 text-xs text-red-400 font-medium hover:text-red-300 transition-colors">Read More</button>}
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={prev} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-bg-700 hover:text-white transition-all" aria-label="Previous review"><svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg></button>
          <div className="flex gap-1.5">{REVIEWS.map((_, i) => <button key={i} onClick={() => setCurrent(i)} aria-label={`Review ${i + 1}`} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-red-500" : "bg-bg-600"}`} />)}</div>
          <button onClick={next} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-bg-700 hover:text-white transition-all" aria-label="Next review"><svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></button>
        </div>

        <a href="https://www.google.com/search?q=SCCS+NWI+Valparaiso+reviews" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 mt-8 text-sm font-medium text-text-tertiary hover:text-white transition-colors">
          See All Google Reviews
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7m10 0v10"/></svg>
        </a>
      </div>

      {modal && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setModal(null)}>
          <div className="bg-bg-800 border border-border rounded-2xl max-w-lg w-full p-8 shadow-elevated" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">{modal.name[0]}</div><div><p className="font-semibold text-white">{modal.name}</p><p className="text-xs text-text-tertiary">{modal.time}</p></div></div>
            <div className="flex gap-1 mb-3">{[...Array(modal.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-red-500" />)}</div>
            <p className="text-text-secondary leading-relaxed">{modal.text}</p>
            <button onClick={() => setModal(null)} className="mt-6 text-sm text-text-tertiary hover:text-white transition-colors">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
