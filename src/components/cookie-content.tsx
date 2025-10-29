"use client";

import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("karhuno_cookie_consent");
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("karhuno_cookie_consent", "accepted");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white/95 backdrop-blur p-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-gray-700">
            Usiamo cookie per analisi e migliorare l'esperienza. Continuando, accetti la nostra politica.
          </p>
          <div className="flex items-center gap-3">
            <a href="/privacy-policy" className="text-sm text-purple-700 hover:text-purple-800 underline">
              Privacy Policy
            </a>
            <button
              onClick={accept}
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:from-purple-700 hover:to-blue-700"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


