"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

// Helper functions for cookie management
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Google Analytics control functions
function enableAnalytics() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-VQ94784XQM', {
      anonymize_ip: false
    });
    (window as any).gtag('consent', 'update', {
      analytics_storage: 'granted'
    });
  }
}

function disableAnalytics() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      analytics_storage: 'denied'
    });
    // Disable future GA tracking
    (window as any)['ga-disable-G-VQ94784XQM'] = true;
  }
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: true,
    marketing: true,
  });

  // Check if cookies are already accepted on component mount
  useEffect(() => {
    const cookieConsent = getCookie("cookie-consent");
    if (!cookieConsent) {
      setShowBanner(true);
      // Default deny analytics until user consents
      disableAnalytics();
    } else {
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setPreferences(savedPreferences);
        
        // Apply saved preferences to Google Analytics
        if (savedPreferences.analytics) {
          enableAnalytics();
        } else {
          disableAnalytics();
        }
      } catch (e) {
        console.warn("Failed to parse cookie consent", e);
        setShowBanner(true);
        disableAnalytics();
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    setCookie("cookie-consent", JSON.stringify(allAccepted), 365);
    setShowBanner(false);
    
    // Enable Google Analytics
    enableAnalytics();
  };

  const decline = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(minimal);
    setCookie("cookie-consent", JSON.stringify(minimal), 365);
    setShowBanner(false);
    
    // Disable Google Analytics
    disableAnalytics();
  };

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-5 left-5 w-2/5 z-50 p-4 bg-background rounded-2xl shadow-lg">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Cookie Preferences</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    We use cookies to enhance your browsing experience and analyze our traffic with Google Analytics.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={decline}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col lg:flex-row justify-end space-2">
                <Button variant="outline" onClick={decline}>
                  Decline All
                </Button>
                <Button onClick={acceptAll}>Accept All</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
