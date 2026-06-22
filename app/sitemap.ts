import { MetadataRoute } from "next";

const BASE_URL = "https://frogsurfboards.com.br";

const STATIC_ROUTES = [
  "",
  "/sobre",
  "/pranchas",
  "/duvidas",
  "/contato",
  "/como-comprar",
  "/politica-de-privacidade",
  "/politica-de-cookies",
];

const LOCALES = ["pt", "en", "es"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of STATIC_ROUTES) {
    for (const locale of LOCALES) {
      const path = locale === "pt" ? route || "/" : `/${locale}${route || "/"}`;
      entries.push({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
