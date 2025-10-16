import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Karhuno AI - Access Your B2B Sales Intelligence Dashboard",
  description: "Login to your Karhuno AI account to access your B2B sales intelligence dashboard. Track LinkedIn signals, corporate news, and competitor monitoring.",
  keywords: "Karhuno AI login, B2B sales dashboard, sales intelligence login, LinkedIn monitoring login",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://karhuno.com/login",
  },
};

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Login</h1>
      {/* Content will be added later */}
    </div>
  )
}
