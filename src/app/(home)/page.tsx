"use client";
// REACT
import type React from "react";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Montserrat, Roboto } from "next/font/google";

// UI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// COMPONENTS
import { Textarea } from "@/components/ui/textarea";
import WhatYouGet from "@/components/home/what-you-get";
import CaseStudies from "@/components/home/case-studies";
import Automation from "@/components/home/automation";
import ContactCarousel from "@/components/home/contact-carousel";
import ComparisonTable from "@/components/home/comparison-table";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import SignalCarousel from "@/components/home/signal-carousel";
import HowItWorks from "@/components/home/how-it-works";
import { sendToWebhook } from "@/lib/webhook";

// Type definition for email parameters
interface SendEmailParams {
  to: string;
  ICP: string;
  moreDetails: string;
  company: string;
  name: string;
}

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

const placeholderTexts = [
  "European energy companies working with startups",
  "Companies announcing warehouse launch plans",
  "Companies developing internal entrepreneurship",
];

export default function Home() {
  const [isICPDialogOpen, setIsICPDialogOpen] = useState(false);
  const [buttonAction, setButtonAction] = useState<() => void>(() => {});
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [isThirdDialogOpen, setIsThirdDialogOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [icp, setIcp] = useState("");
  const [isThankYouDialogOpen, setIsThankYouDialogOpen] = useState(false);

  const [formData, setFormData] = useState<SendEmailParams>({
    to: "",
    ICP: "",
    moreDetails: "",
    company: "",
    name: "",
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animatePlaceholder = () => {
      const currentText = placeholderTexts[placeholderIndex];

      if (!isDeleting) {
        if (placeholder.length < currentText.length) {
          setPlaceholder(currentText.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 12.5);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
        } else {
          setPlaceholder(placeholder.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 2);
        }
      }
    };

    timeout = setTimeout(animatePlaceholder, 20.5);
    return () => clearTimeout(timeout);
  }, [placeholder, placeholderIndex, isDeleting]);

  // Load Tawk.to script directly
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/67cb23b4d19cb2190dbd2fbb/1iloo6u5l';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  const openChat = () => {
    // Use Tawk_API if available
    if (typeof window !== 'undefined' && (window as any).Tawk_API) {
      (window as any).Tawk_API.showWidget();
    }
  };

  const handleButtonClick = (action: () => void) => {
    if (action === handleFind) {
      action();
    } else {
      setButtonAction(() => action);
      setIsICPDialogOpen(true);
    }
  };

  const handleICPSubmit = () => {
    setIsICPDialogOpen(false);
    buttonAction();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: SendEmailParams) => ({ ...prev, [name]: value }));

    // Track form field changes
    // Note: debounceTimeout was removed as it wasn't defined
  };

  const handleFind = () => {
    if (icp.trim()) {
      setIsFirstDialogOpen(true);
      formData.ICP = icp;
      setFormData({ ...formData, ICP: icp });
    }
  };

  const handleSubmit = async () => {
    setIsThirdDialogOpen(false);
    setTimeout(() => {
      setIsThankYouDialogOpen(true);
    }, 500);

    try {
      const userEmailData: SendEmailParams = {
        to: formData.to, // Admin email is auto-set in the API
        ICP: formData.ICP,
        moreDetails: formData.moreDetails,
        company: formData.company,
        name: formData.name,
      };
      const result = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEmailData),
      }).then((res) => res.json());
      if (result.success) {
        sendToWebhook({
          icp: formData.ICP,
          name: formData.name,
          to: formData.to,
          moreDetails: formData.moreDetails,
          company: formData.company,
          type: "email_success",
          timestamp: new Date().toISOString(),
        });
      } else {
        // Track error
        sendToWebhook({
          icp: "error",
          name: "error",
          to: "error",
          moreDetails: "error",
          company: "error",
          type: "email_error",
          error: result.error,
          timestamp: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setFormData({
        to: "",
        ICP: "",
        moreDetails: "",
        company: "",
        name: "",
      });
    }
  };

  return (
    <>
      <header className="relative overflow-hidden mt-12">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4 max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 max-w-4xl ${roboto.className}`}>
            <span className="text-black">Stop Searching,</span>
            <br />
            <span className="text-[#792abf]">Start Selling</span>
            </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto text-center ${montserrat.className}`}>
            Find real-time market signals for B2B companies with unparalleled precision. Transforms thousands of data points into sales wins.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl flex mb-8">
            <input
                  type="text"
              placeholder={placeholder || "Companies developing internal entreprene"}
              className={`flex-1 rounded-l-full px-6 py-3 text-gray-900 border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${montserrat.className}`}
            />
            <button 
                onClick={handleFind}
              className={`bg-purple-700 text-white rounded-r-full px-6 py-3 hover:bg-purple-800 transition-colors ${montserrat.className}`}
              >
                Find
            </button>
          </div>

          {/* Try for free button */}
          <button 
            onClick={() => window.location.href = '/early-access'}
            className={`bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors font-medium ${montserrat.className}`}
          >
            Try for free
          </button>
        </div>
      </header>

      <WhatYouGet />
      <SignalCarousel />
      <HowItWorks />
      <CaseStudies id="case-studies" />
      <Automation />
      <ComparisonTable />
      <Footer />
    </>
  );
}
