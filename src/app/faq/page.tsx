import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Karhuno AI",
  description: "Find answers to common questions about Karhuno AI. Learn about pricing, features, setup, and how our B2B sales intelligence platform works.",
  keywords: "Karhuno AI FAQ, B2B sales questions, LinkedIn monitoring FAQ, corporate news search questions, buyer intent signals FAQ",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Karhuno AI",
    description: "Find answers to common questions about Karhuno AI. Learn about pricing, features, setup, and how our B2B sales intelligence platform works.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | Karhuno AI",
    description: "Find answers to common questions about Karhuno AI. Learn about pricing, features, setup, and how our B2B sales intelligence platform works.",
  },
  alternates: {
    canonical: "https://karhuno.com/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
} 