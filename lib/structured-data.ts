export const doctorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://drsurbhinikam.com/#clinic",
      name: "Dr. Surbhi Nikam - Plastic & Cosmetic Surgery",
      description:
        "Board-certified plastic & cosmetic surgery clinic in Mumbai specialising in facial, breast, body, and hair restoration procedures.",
      url: "https://drsurbhinikam.com",
      telephone: "+91-98765-43210",
      email: "info@drsurbhinikam.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Medical Centre, Bandra West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400050",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.0596",
        longitude: "72.8295",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      priceRange: "₹₹₹",
      medicalSpecialty: "PlasticSurgery",
      sameAs: [
        "https://www.instagram.com/drsurbhinikam",
        "https://www.facebook.com/drsurbhinikam",
      ],
    },
    {
      "@type": ["Person", "Physician"],
      "@id": "https://drsurbhinikam.com/#doctor",
      name: "Dr. Surbhi Nikam",
      jobTitle: "Plastic & Cosmetic Surgeon",
      description:
        "Board-certified plastic & cosmetic surgeon in Mumbai with over 10 years of experience in reconstructive and aesthetic procedures.",
      url: "https://drsurbhinikam.com/about",
      telephone: "+91-98765-43210",
      worksFor: { "@id": "https://drsurbhinikam.com/#clinic" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Medical Council of India" },
      ],
      medicalSpecialty: "PlasticSurgery",
    },
  ],
};

export function getProcedureSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    procedureType: "Surgical",
    bodyLocation: name,
    preparation: "Consultation with Dr. Surbhi Nikam required before procedure.",
    followup: "Post-operative follow-up appointments included.",
    howPerformed: "Performed under anaesthesia in an accredited surgical facility.",
    provider: { "@id": "https://drsurbhinikam.com/#doctor" },
  };
}

export function getBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://drsurbhinikam.com${item.href}`,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
