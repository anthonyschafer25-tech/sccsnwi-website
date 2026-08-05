// Shared site-wide constants — single source of truth
export const SITE = {
  name: "SCCS NWI",
  url: "https://www.sccsnwi.com",
  phoneDisplay: "(219) 779-8198",
  phoneHref: "tel:+12197798198",
  email: "info@sccsnwi.com",
  address: {
    city: "Valparaiso",
    state: "IN",
    zip: "46383",
  },
  foundingYear: 2012,
  social: {
    instagram: "https://instagram.com/sccsnwi",
    facebook: "https://facebook.com/sccsnwi",
    youtube: "https://youtube.com/channel/UColP0SsCnNmIj4BkDG3co4w",
  },
};

// LocalBusiness structured data (JSON-LD) — injected once in the root layout.
// Feeds Google's local map pack and knowledge panel.
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  telephone: "+1-219-779-8198",
  email: SITE.email,
  foundingDate: String(SITE.foundingYear),
  description:
    "Family-owned, IICRC certified restoration company serving Northwest Indiana since 2012. 24/7 emergency water damage, fire damage, and mold remediation.",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Porter County, IN" },
    { "@type": "AdministrativeArea", name: "Lake County, IN" },
    { "@type": "AdministrativeArea", name: "La Porte County, IN" },
    { "@type": "AdministrativeArea", name: "Jasper County, IN" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.youtube],
};
