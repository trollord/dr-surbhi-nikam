import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { doctorSchema } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drgirish.com"),
  title: {
    default: "Dr. Girish N. Mirajkar | Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai",
    template: "%s | Dr. Girish N. Mirajkar - Plastic Surgeon Mumbai",
  },
  description:
    "Dr. Girish N. Mirajkar is a leading board-certified Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai, specializing in face, breast, body, and hair restoration procedures. Book a consultation today.",
  keywords: [
    "plastic surgeon Mumbai, Dr Girish Mirajkar",
    "cosmetic surgeon Mumbai",
    "rhinoplasty Mumbai",
    "breast augmentation Mumbai",
    "liposuction Mumbai",
    "hair transplant Mumbai",
    "Dr Girish Mirajkar plastic surgeon", "DrNB plastic surgery Mumbai", "MCh plastic surgeon Mumbai",
    "cosmetic surgery Mumbai",
    "facelift Mumbai",
    "tummy tuck Mumbai",
  ],
  authors: [{ name: "Dr. Girish N. Mirajkar" }],
  creator: "Dr. Girish N. Mirajkar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drgirish.com",
    siteName: "Dr. Girish N. Mirajkar - Consultant Plastic, Aesthetic & Reconstructive Surgeon",
    title: "Dr. Girish N. Mirajkar | Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai",
    description:
      "Leading Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai specializing in face, breast, body, and hair restoration. Transform your confidence with expert care.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Girish N. Mirajkar - Consultant Plastic, Aesthetic & Reconstructive Surgeon Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Girish N. Mirajkar | Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai",
    description:
      "Leading Consultant Plastic, Aesthetic & Reconstructive Surgeon in Mumbai. Expert care in facial, breast, body & hair restoration procedures.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
