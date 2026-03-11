import { MetadataRoute } from "next";

const BASE_URL = "https://drgirish.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/procedures",
    "/procedures/face",
    "/procedures/breast",
    "/procedures/body",
    "/procedures/hair-restoration",
    "/gallery",
    "/testimonials",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/procedures/") ? 0.9 : 0.8,
  }));

  const blogPosts = [
    "what-to-expect-rhinoplasty-recovery",
    "breast-augmentation-vs-lift-which-is-right",
    "fue-hair-transplant-mumbai-guide",
    "liposuction-vs-tummy-tuck-differences",
    "facelift-recovery-tips-mumbai",
    "choosing-plastic-surgeon-mumbai",
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogPosts];
}
