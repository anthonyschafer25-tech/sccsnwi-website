import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { ReviewCarousel } from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Reviews — 5.0 Stars from NW Indiana Homeowners",
  description: "Read what Northwest Indiana homeowners say about SCCS NWI. 5.0 stars across 74 Google reviews. 100% recommended on Facebook.",
};

export default function ReviewsPage() {
  return (<>
    <Navbar />
    <main className="pt-16">
      <ReviewCarousel />
    </main>
    <Footer />
    <StickyCallFab />
  </>);
}
