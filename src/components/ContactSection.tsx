"use client";
import { useState } from "react";
import { Phone } from "@/components/Icons";
import { SITE } from "@/lib/site";

const STEPS = [
  { label: "First, who should we contact?", fields: ["name", "phone", "email"] },
  { label: "Where is the property?", fields: ["address", "city"] },
  { label: "What do you need help with?", fields: ["service", "message"] },
];

export function ContactSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async () => {
    // Wired up in Batch 3 — sends to /api/lead
    try {
      await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } catch {}
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Get started</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white leading-tight">Need cleanup or restoration?</h2>
            <p className="mt-6 text-text-secondary leading-relaxed">
              Whether it is water, fire, mold, or a biohazard or crime scene cleanup, call us out for a free inspection. We will walk the property with you and tell you straight what it needs.
            </p>
            <a href={SITE.phoneHref} className="mt-8 inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-red-400 transition-colors">
              <Phone className="w-6 h-6" />{SITE.phoneDisplay}
            </a>
            <p className="mt-2 text-xs tracking-[0.15em] uppercase text-text-tertiary">Available 24 hours a day, 7 days a week</p>
          </div>

          <div className="bg-bg-800 border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-xl font-semibold text-white">Thanks, {form.name.split(" ")[0] || "there"}.</p>
                <p className="mt-2 text-sm text-text-secondary">We got your request and will reach out shortly. For emergencies, call us right now:</p>
                <a href={SITE.phoneHref} className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-400 transition-all"><Phone className="w-4 h-4" />{SITE.phoneDisplay}</a>
              </div>
            ) : (<>
              <p className="text-xs text-text-tertiary font-medium">Step {step + 1} of {STEPS.length}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{STEPS[step].label}</h3>

              <div className="mt-6 space-y-4">
                {step === 0 && (<>
                  <input value={form.name} onChange={set("name")} placeholder="Full name" className="w-full bg-bg-700 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-red-500/50" />
                  <input value={form.phone} onChange={set("phone")} placeholder="Phone number" type="tel" className="w-full bg-bg-700 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-red-500/50" />
                  <input value={form.email} onChange={set("email")} placeholder="Email address" type="email" className="w-full bg-bg-700 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-red-500/50" />
                </>)}
                {step === 1 && (<>
                  <input value={form.address} onChange={set("address")} placeholder="Street address" className="w-full bg-bg-700 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-red-500/50" />
                  <input value={form.city} onChange={set("city")} placeholder="City" className="w-full bg-bg-700 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-red-500/50" />
                </>)}
                {step === 2 && (<>
                  <select value={form.service} onChange={set("service")} className="w-full bg-bg-700 border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500/50">
                    <option value="">Select a service…</option>
                    <option>Water Damage Restoration</option>
                    <option>Fire & Smoke Damage</option>
                    <option>Mold Inspection & Testing</option>
                    <option>Mold Remediation</option>
                    <option>Trauma / Crime Scene Cleanup</option>
                    <option>Junk Removal</option>
                    <option>Something else</option>
                  </select>
                  <textarea value={form.message} onChange={set("message")} placeholder="Tell us what happened (optional)" rows={4} className="w-full bg-bg-700 border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary focus:outline-none focus:border-red-500/50 resize-none" />
                </>)}
              </div>

              <div className="mt-6 flex gap-3">
                {step > 0 && <button onClick={() => setStep(s => s - 1)} className="px-6 py-3 border border-border text-white font-semibold rounded-xl hover:bg-bg-700 transition-all">Back</button>}
                {step < STEPS.length - 1
                  ? <button onClick={() => setStep(s => s + 1)} className="flex-1 px-6 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98]">Continue →</button>
                  : <button onClick={handleSubmit} className="flex-1 px-6 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98]">Request inspection</button>}
              </div>
              <p className="mt-4 text-xs text-text-tertiary">By submitting, you agree to be contacted.</p>
            </>)}
          </div>
        </div>
      </div>
    </section>
  );
}
