import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES, CITIES, CITY_SERVICE_PAGES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/contact", "/service-area", "/reviews", "/privacy", "/terms"];
  const servicePages = Object.keys(SERVICES).map((s) => `/${s}`);
  const cityPages = CITIES.map((c) => `/${c.slug}`);
  const cityServicePages = CITY_SERVICE_PAGES.map((p) => `/services/${p.service}/${p.city}`);

  return [...staticPages, ...servicePages, ...cityPages, ...cityServicePages].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
