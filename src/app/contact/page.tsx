import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — 24/7 Emergency Line",
  description: "Contact SCCS NWI for a free inspection. 24/7 emergency response for water, fire, and mold damage across Northwest Indiana. Call (219) 779-8198.",
};

export default function ContactPage() {
  return (<>
    <Navbar />
    <main className="pt-16">
      <ContactSection />
    </main>
    <Footer />
    <StickyCallFab />
  </>);
}
