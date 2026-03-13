"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f1a2e]">
      {/* Background gradient + pattern */}
      <div
        ref={ref}
        className="absolute inset-0 will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(201,169,110,0.06) 0%, transparent 60%)",
        }}
      />
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
          <span className="text-xs text-[#C9A96E] uppercase tracking-widest font-sans font-medium">
            Board Certified Plastic Surgeon · Mumbai
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-[#FAFAFA] leading-[1.1] mb-6">
          Transform Your
          <br />
          <span className="text-gold-gradient">Confidence</span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed">
          Expert plastic, aesthetic & reconstructive surgery in Mumbai. Personalized care,
          natural results, and advanced techniques tailored to you.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#C9A96E] text-[#0f1a2e] font-sans font-semibold text-sm rounded-full hover:bg-[#D4B483] hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all duration-200 min-w-[200px] text-center"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/procedures"
            className="px-8 py-4 text-[#C9A96E] font-sans font-medium text-sm rounded-full border border-[#C9A96E]/50 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-200 min-w-[200px] text-center"
          >
            Explore Procedures
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-16">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "2000+", label: "Procedures" },
            { value: "1500+", label: "Happy Patients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-[#C9A96E]">
                {stat.value}
              </div>
              <div className="text-xs text-[#94a3b8] uppercase tracking-widest font-sans mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8] animate-bounce">
        <span className="text-xs font-sans uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
