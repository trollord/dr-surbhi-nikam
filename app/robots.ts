import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://drsurbhinikam.com/sitemap.xml",
    host: "https://drsurbhinikam.com",
  };
}
