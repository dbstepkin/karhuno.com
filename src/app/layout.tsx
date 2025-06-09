import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { CookieConsent } from "@/components/cookie-content";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap", 
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Karhuno AI - Find real unparalleled AI solutions for your business",
  description: "Karhuno AI provides tailored AI solutions to boost your business efficiency and innovation. Get started today with our consultation.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VQ94784XQM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VQ94784XQM');
          `}
        </Script>
        
        {/* Remove Next.js development indicators */}
        <Script id="remove-dev-indicators" strategy="afterInteractive">
          {`
            function removeDevIndicators() {
              // Remove all possible Next.js development indicators
              const selectors = [
                '[data-nextjs-build-indicator]',
                '.__next-build-indicator',
                '[data-nextjs-router-prefetch]',
                'div[style*="position: fixed"][style*="bottom"]',
                'div[style*="position: fixed"][style*="z-index: 99"]',
                '*[class*="__next"]',
                '*[id*="__next-build"]'
              ];
              
              selectors.forEach(selector => {
                try {
                  const elements = document.querySelectorAll(selector);
                  elements.forEach(el => {
                    if (el && el.parentNode) {
                      el.parentNode.removeChild(el);
                    }
                  });
                } catch (e) {
                  // Silent fail
                }
              });
              
              // Also check for elements containing "Static route" text
              const walker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                null,
                false
              );
              
              const textNodes = [];
              let node;
              while (node = walker.nextNode()) {
                if (node.textContent && node.textContent.includes('Static route')) {
                  textNodes.push(node);
                }
              }
              
              textNodes.forEach(textNode => {
                const parent = textNode.parentElement;
                if (parent) {
                  parent.style.display = 'none';
                }
              });
            }
            
            // Remove on DOM ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', removeDevIndicators);
            } else {
              removeDevIndicators();
            }
            
            // Remove periodically in case they get added back
            setInterval(removeDevIndicators, 1000);
            
            // Also remove when page visibility changes
            document.addEventListener('visibilitychange', removeDevIndicators);
          `}
        </Script>
      </head>
      <body 
        className={`${montserrat.variable} ${roboto.variable} font-montserrat bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 min-h-screen pt-16`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
