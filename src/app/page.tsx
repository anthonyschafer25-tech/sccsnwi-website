import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoHero } from "@/components/VideoHero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { WhoWeAre } from "@/components/WhoWeAre";
import { ServicesGrid } from "@/components/ServicesGrid";
import { RealtorSection } from "@/components/RealtorSection";
import { WhySCCS } from "@/components/WhySCCS";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { StickyCallFab } from "@/components/StickyCallFab";

export const metadata: Metadata = {
  title: "SCCS NWI | Water, Fire & Mold Restoration in NW Indiana",
  description: "Family-owned restoration company serving NW Indiana since 2012. 24/7 emergency water, fire, and mold remediation. IICRC certified. Call (219) 779-8198.",
};

export default function Home() {
  return (<>
    <Navbar />
    <VideoHero />
    <TrustMarquee />
    <WhoWeAre />
    <ServicesGrid />
    <RealtorSection />
    <WhySCCS />
    <ServiceAreaMap />
    <ReviewCarousel />
    <FAQ />
    <ContactSection />
    <Footer />
    <StickyCallFab />
  </>);
}
