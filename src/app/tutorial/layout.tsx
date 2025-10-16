import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karhuno AI Tutorial - Learn B2B Sales Intelligence in 15 Minutes",
  description: "Master Karhuno AI in minutes with our comprehensive video tutorials. Learn corporate news search, LinkedIn signals, and competitor monitoring. Complete guide with step-by-step instructions.",
  keywords: "Karhuno AI tutorial, B2B sales tutorial, LinkedIn signals guide, corporate news search tutorial, competitor monitoring guide",
  openGraph: {
    title: "Karhuno AI Tutorial - Learn B2B Sales Intelligence",
    description: "Master Karhuno AI in minutes with our comprehensive video tutorials. Learn corporate news search, LinkedIn signals, and competitor monitoring.",
    type: "website",
    url: "https://karhuno.com/tutorial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karhuno AI Tutorial - Learn B2B Sales Intelligence",
    description: "Master Karhuno AI in minutes with our comprehensive video tutorials.",
  },
  alternates: {
    canonical: "https://karhuno.com/tutorial",
  },
};

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
