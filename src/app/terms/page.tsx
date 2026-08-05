import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Terms of Service", description: "SCCS NWI terms of service." };

export default function TermsPage() {
  return (<>
    <Navbar />
    <main className="pt-32 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-display tracking-tight text-white">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-sm text-text-secondary leading-relaxed">
          <p>By using this website, you agree to these terms. This site is operated by SCCS NWI (Specialty Cleaning & Contracting Services), Valparaiso, Indiana.</p>
          <h2 className="text-lg font-semibold text-white pt-4">Website content</h2>
          <p>Content on this site is provided for general information about our restoration services. It does not constitute a quote, contract, or professional assessment. Actual service terms are provided in writing before any work begins.</p>
          <h2 className="text-lg font-semibold text-white pt-4">No warranty</h2>
          <p>This website is provided "as is." We make no warranties about the accuracy or completeness of the site's content.</p>
          <h2 className="text-lg font-semibold text-white pt-4">Contact</h2>
          <p>Questions about these terms? Call (219) 779-8198 or email info@sccsnwi.com.</p>
          <p className="text-text-tertiary text-xs pt-4">Last updated: 2026</p>
        </div>
      </div>
    </main>
    <Footer />
  </>);
}
