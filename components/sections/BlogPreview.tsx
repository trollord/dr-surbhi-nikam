import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "what-to-expect-rhinoplasty-recovery",
    title: "What to Expect During Rhinoplasty Recovery",
    excerpt:
      "A week-by-week guide to rhinoplasty recovery — from swelling timelines to final results and care tips.",
    category: "Recovery",
    readTime: "5 min read",
    date: "Feb 2026",
  },
  {
    slug: "breast-augmentation-vs-lift-which-is-right",
    title: "Breast Augmentation vs. Lift: Which is Right for You?",
    excerpt:
      "Understanding the difference between augmentation and lift procedures to help you make an informed decision.",
    category: "Procedures",
    readTime: "4 min read",
    date: "Jan 2026",
  },
  {
    slug: "fue-hair-transplant-mumbai-guide",
    title: "FUE Hair Transplant in Mumbai: Your Complete Guide",
    excerpt:
      "Everything you need to know about FUE hair transplants — candidacy, procedure, and what results to expect.",
    category: "Hair",
    readTime: "6 min read",
    date: "Dec 2025",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-[#0a1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">
              Knowledge Base
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#FAFAFA]">
              Articles & Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C9A96E] font-sans text-sm font-medium hover:gap-3 transition-all group shrink-0"
          >
            View All Articles
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="h-full bg-[#1a2a45] border border-[#243355] rounded-2xl overflow-hidden hover:border-[#C9A96E]/30 hover:shadow-lg hover:shadow-[#C9A96E]/5 transition-all duration-300">
                {/* Placeholder image header */}
                <div className="h-44 bg-gradient-to-br from-[#243355] to-[#1a2a45] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl font-bold text-[#C9A96E]/10 group-hover:text-[#C9A96E]/15 transition-colors">
                      {post.category[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#C9A96E]/20 border border-[#C9A96E]/30 rounded-full text-xs text-[#C9A96E] font-sans uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#94a3b8] font-sans mb-3">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#FAFAFA] mb-3 group-hover:text-[#C9A96E] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm font-sans leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-sans font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
