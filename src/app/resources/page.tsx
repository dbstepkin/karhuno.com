import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Karhuno AI - B2B Sales Intelligence Resources & Guides",
  description: "Access comprehensive resources, guides, and tools for B2B sales intelligence. Learn best practices for LinkedIn signals, corporate news monitoring, and competitor tracking.",
  keywords: "B2B sales resources, sales intelligence guides, LinkedIn monitoring resources, buyer intent guides, sales automation resources",
  openGraph: {
    title: "Resources | Karhuno AI - B2B Sales Intelligence Resources",
    description: "Access comprehensive resources, guides, and tools for B2B sales intelligence. Learn best practices for LinkedIn signals and corporate news monitoring.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Karhuno AI - B2B Sales Intelligence Resources",
    description: "Access comprehensive resources, guides, and tools for B2B sales intelligence.",
  },
  alternates: {
    canonical: "https://karhuno.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Resources</h1>
      {/* Content will be added later */}
    </div>
  );
} 