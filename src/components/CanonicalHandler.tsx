"use client";

import { useEffect } from "react";
import Head from "next/head";

interface CanonicalHandlerProps {
  canonicalUrl: string;
  baseUrl?: string;
}

export default function CanonicalHandler({ canonicalUrl, baseUrl = "https://karhuno.com" }: CanonicalHandlerProps) {
  useEffect(() => {
    // Get current URL and clean it
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    
    // Remove query parameters that don't affect content
    const paramsToRemove = ['ref', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid'];
    paramsToRemove.forEach(param => {
      url.searchParams.delete(param);
    });
    
    // Clean the URL
    const cleanUrl = url.toString().replace(/\/$/, '') || baseUrl;
    
    // Remove any existing canonical tags
    const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach(canonical => canonical.remove());

    // Add the canonical tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = cleanUrl;
    document.head.appendChild(canonicalLink);
  }, [canonicalUrl, baseUrl]);

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
