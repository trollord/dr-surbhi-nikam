import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  { label: "Rhinoplasty", category: "Face", aspect: "aspect-[3/4]" },
  { label: "Breast Augmentation", category: "Breast", aspect: "aspect-square" },
  { label: "Liposuction", category: "Body", aspect: "aspect-[3/4]" },
  { label: "Facelift", category: "Face", aspect: "aspect-square" },
  { label: "Hair Transplant", category: "Hair", aspect: "aspect-[3/4]" },
  { label: "Tummy Tuck", category: "Body", aspect: "aspect-square" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-[#0a1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">
              Transformations
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#FAFAFA]">
              Before & After
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[#C9A96E] font-sans text-sm font-medium hover:gap-3 transition-all group shrink-0"
          >
            View Full Gallery
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative ${item.aspect} rounded-xl overflow-hidden group cursor-pointer`}
            >
              {/* Placeholder image (gradient) */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${135 + i * 30}deg, #1a2a45 0%, #243355 50%, #1a2a45 100%)`,
                }}
              />
              {/* Before/After overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0f1a2e]/70 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex gap-3 mb-2 justify-center">
                    <span className="px-2.5 py-1 bg-[#243355] rounded text-xs text-[#94a3b8] font-sans">
                      Before
                    </span>
                    <span className="px-2.5 py-1 bg-[#C9A96E] rounded text-xs text-[#0f1a2e] font-sans font-medium">
                      After
                    </span>
                  </div>
                  <p className="text-[#FAFAFA] font-serif text-sm font-semibold">
                    {item.label}
                  </p>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0f1a2e]/80 backdrop-blur-sm rounded-full">
                <span className="text-xs text-[#C9A96E] font-sans uppercase tracking-wide">
                  {item.category}
                </span>
              </div>
              {/* Gold corner accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#94a3b8] font-sans mt-6">
          * All before & after photos are of actual patients. Published with consent.
        </p>
      </div>
    </section>
  );
}
