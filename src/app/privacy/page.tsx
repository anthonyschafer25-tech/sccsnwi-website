import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Privacy Policy", description: "SCCS NWI privacy policy." };

export default function PrivacyPage() {
  return (<>
    <Navbar />
    <main className="pt-32 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-display tracking-tight text-white">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-sm text-text-secondary leading-relaxed">
          <p>SCCS NWI respects your privacy. This policy explains what information we collect and how we use it.</p>
          <h2 className="text-lg font-semibold text-white pt-4">Information we collect</h2>
          <p>When you submit a form on this site, we collect the information you provide: your name, phone number, email address, property address, and details about your restoration needs. We use this only to respond to your request and provide our services.</p>
          <h2 className="text-lg font-semibold text-white pt-4">How we use it</h2>
          <p>We use your information to contact you about your inquiry, schedule inspections, and perform services. We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          <h2 className="text-lg font-semibold text-white pt-4">Contact</h2>
          <p>Questions about this policy? Call us at (219) 779-8198 or email info@sccsnwi.com.</p>
          <p className="text-text-tertiary text-xs pt-4">Last updated: 2026</p>
        </div>
      </div>
    </main>
    <Footer />
  </>);
}
