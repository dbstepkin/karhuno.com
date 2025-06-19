"use client";

import { useState, useEffect } from "react";
import { X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md mx-4"
        >
          <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/20 p-6">
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Cookies & Privacy
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      We use only essential cookies to ensure a smooth experience on Karhuno AI. No tracking, no ads.
                    </p>
                  </div>
                  <button
                    onClick={decline}
                    className="flex-shrink-0 ml-2 p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    onClick={decline}
                    className="flex-1 h-10 px-4 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-200 rounded-xl"
                  >
                    Decline
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="flex-1 h-10 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 rounded-xl shadow-lg hover:shadow-purple-500/25"
                  >
                    Accept
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
