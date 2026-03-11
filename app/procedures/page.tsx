import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Activity, Scissors, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Procedures | Dr. Girish N. Mirajkar — Plastic Surgeon Mumbai",
  description:
    "Explore the full range of aesthetic and reconstructive procedures offered by Dr. Girish N. Mirajkar — Face, Breast, Body, and Hair Restoration.",
};

const categories = [
  {
    href: "/procedures/face",
    icon: Sparkles,
    title: "Face Procedures",
    subtitle: "Rhinoplasty · Facelift · Blepharoplasty · Lip Augmentation",
    description:
      "The face is the most expressive canvas we work on. From subtle refinements like lip augmentation to transformative procedures like rhinoplasty and facelifts, Dr. Girish N. Mirajkar's facial work is guided by symmetry, proportion, and the goal of a naturally youthful appearance.",
    tags: ["Rhinoplasty", "Facelift", "Eyelid Surgery", "Lip Augmentation"],
    gradient: "from-rose-900/30 to-[#1a2a45]",
  },
  {
    href: "/procedures/breast",
    icon: Activity,
    title: "Breast Procedures",
    subtitle: "Augmentation · Reduction · Lift",
    description:
      "Whether seeking fuller contours, relief from physical discomfort, or restoration after life changes, Dr. Girish N. Mirajkar delivers breast procedures that are tailored to your frame, lifestyle, and personal goals — with results designed to last.",
    tags: ["Augmentation", "Reduction", "Breast Lift", "Revision"],
    gradient: "from-violet-900/30 to-[#1a2a45]",
  },
  {
    href: "/procedures/body",
    icon: Scissors,
    title: "Body Contouring",
    subtitle: "Liposuction · Tummy Tuck · Mommy Makeover · Arm Lift",
    description:
      "Targeted body contouring addresses areas that resist diet and exercise. Dr. Girish N. Mirajkar's precise sculpting techniques — from liposuction to comprehensive mommy makeovers — are designed to reveal the silhouette you've worked toward.",
    tags: ["Liposuction", "Tummy Tuck", "Mommy Makeover", "Arm Lift"],
    gradient: "from-sky-900/30 to-[#1a2a45]",
  },
  {
    href: "/procedures/hair-restoration",
    icon: Wind,
    title: "Hair Restoration",
    subtitle: "FUE Transplant · PRP Therapy · Beard Transplant",
    description:
      "Hair loss affects confidence deeply. Using the latest FUE technology and regenerative PRP therapy, Dr. Girish N. Mirajkar restores natural-looking hairlines and density — with permanent, undetectable results for scalp and beard alike.",
    tags: ["FUE Transplant", "PRP Therapy", "Beard Transplant", "Hairline Design"],
    gradient: "from-emerald-900/30 to-[#1a2a45]",
  },
];

export default function ProceduresPage() {
  return (
    <main className="bg-[#0f1a2e] min-h-screen">
      {/* ─── Hero ─── */}
      <section className="pt-24 pb-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] font-sans text-sm tracking-widest uppercase mb-4">
            Surgical &amp; Non-Surgical Options
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAFAFA] leading-tight mb-6">
            Our{" "}
            <span className="text-[#C9A96E]">Procedures</span>
          </h1>
          <p className="text-[#94a3b8] font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            Every procedure offered at our practice is performed personally by Dr. Girish N. Mirajkar — ensuring
            the highest standard of care, consistency, and artistry from consultation to recovery.
          </p>
        </div>
      </section>

      {/* ─── Category Cards ─── */}
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group bg-[#1a2a45] border border-[#243355] hover:border-[#C9A96E]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.08)] flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center mb-6 group-hover:bg-[#C9A96E]/20 transition-colors duration-200">
                    <Icon className="w-7 h-7 text-[#C9A96E]" />
                  </div>

                  {/* Heading */}
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#FAFAFA] mb-1 group-hover:text-[#C9A96E] transition-colors duration-200">
                    {cat.title}
                  </h2>
                  <p className="font-sans text-sm text-[#C9A96E] mb-4">{cat.subtitle}</p>

                  {/* Description */}
                  <p className="font-sans text-[#94a3b8] leading-relaxed mb-6 flex-1">
                    {cat.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs text-[#94a3b8] bg-[#243355] border border-[#243355] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow CTA */}
                  <div className="flex items-center gap-2 text-[#C9A96E] font-sans text-sm font-semibold">
                    <span>Explore Procedures</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-4">
              Why Patients Choose Dr. Girish N. Mirajkar
            </h2>
            <p className="text-[#94a3b8] font-sans max-w-2xl mx-auto">
              Our practice stands apart through personalised care, advanced techniques, and a
              commitment to results that look and feel natural.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "2,000+", label: "Procedures Completed" },
              { stat: "10+", label: "Years of Experience" },
              { stat: "98%", label: "Patient Satisfaction" },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-8"
              >
                <p className="font-serif text-4xl text-[#C9A96E] mb-2">{item.stat}</p>
                <p className="font-sans text-[#94a3b8]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAFAFA] mb-5">
            Not Sure Which Procedure Is Right for You?
          </h2>
          <p className="text-[#94a3b8] font-sans mb-8 leading-relaxed">
            Schedule a complimentary consultation. Dr. Girish N. Mirajkar will evaluate your goals, anatomy, and
            health to recommend the most appropriate personalised plan.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A96E] hover:bg-[#D4B483] text-[#0f1a2e] font-sans font-semibold px-10 py-4 rounded-full transition-colors duration-200 text-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
