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
  fallback: ["system-ui", "arial"],
  preload: false,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap", 
  variable: "--font-roboto",
  fallback: ["system-ui", "arial"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Karhuno AI",
  description: "Karhuno AI - a signal-based search engine for global B2B sales.",
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
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="MdQm3LcQ4z30lGaZ8FmMb4MXQdz931PvTa0nfo0tDlo" />

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
        
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "7349946";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        
        {/* LinkedIn Insight Tag - Noscript fallback */}
        <noscript>
          <img height="1" width="1" style={{display:'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=7349946&fmt=gif" />
        </noscript>
        
        {/* Remove Next.js development indicators */}
        <Script id="remove-dev-indicators" strategy="afterInteractive">
          {`
            function removeDevIndicators() {
              // Remove all possible Next.js development indicators with ultra-aggressive approach
              const selectors = [
                '[data-nextjs-build-indicator]',
                '[data-nextjs-build-indicator="true"]',
                '[data-nextjs-build-indicator="false"]',
                '.__next-build-indicator',
                '[data-nextjs-router-prefetch]',
                'div[style*="position: fixed"][style*="bottom"]',
                'div[style*="position: fixed"][style*="left"]',
                'div[style*="position: fixed"][style*="right"]',
                'div[style*="position: fixed"][style*="z-index: 99"]',
                'div[style*="z-index: 999"]',
                'div[style*="z-index: 9999"]',
                'div[style*="z-index: 99999"]',
                '*[class*="__next"]',
                '*[id*="__next-build"]',
                '*[class*="nextjs"]',
                '*[class*="build-indicator"]',
                'div[style*="font-family: menlo"]',
                'div[style*="font-family: monaco"]',
                'div[style*="font-family: consolas"]',
                'div[style*="border-radius: 5px"][style*="position: fixed"]',
                'div[style*="padding: 2px"][style*="position: fixed"]'
              ];
              
              selectors.forEach(selector => {
                try {
                  const elements = document.querySelectorAll(selector);
                  elements.forEach(el => {
                    if (el && el.parentNode) {
                      el.style.display = 'none';
                      el.style.visibility = 'hidden';
                      el.style.opacity = '0';
                      el.style.position = 'absolute';
                      el.style.left = '-99999px';
                      el.style.top = '-99999px';
                      el.style.width = '0';
                      el.style.height = '0';
                      el.style.zIndex = '-1';
                      el.remove();
                    }
                  });
                } catch (e) {
                  // Silent fail
                }
              });
              
              // Check for any element containing development indicator text
              const textPatterns = ['Static route', '⚡', '🔥', 'build', 'compiled'];
              textPatterns.forEach(pattern => {
                const walker = document.createTreeWalker(
                  document.body || document.documentElement,
                  NodeFilter.SHOW_TEXT,
                  null,
                  false
                );
                
                const textNodes = [];
                let node;
                while (node = walker.nextNode()) {
                  if (node.textContent && node.textContent.toLowerCase().includes(pattern.toLowerCase())) {
                    textNodes.push(node);
                  }
                }
                
                textNodes.forEach(textNode => {
                  const parent = textNode.parentElement;
                  if (parent && parent.tagName === 'DIV') {
                    const style = window.getComputedStyle(parent);
                    if (style.position === 'fixed' || style.zIndex > 99) {
                      parent.style.display = 'none';
                      parent.remove();
                    }
                  }
                });
              });
              
              // Remove any fixed positioned elements in development areas
              const fixedElements = document.querySelectorAll('div[style*="position: fixed"]');
              fixedElements.forEach(el => {
                const style = window.getComputedStyle(el);
                const rect = el.getBoundingClientRect();
                // Check if it's a small element positioned at bottom/corner (typical for dev indicators)
                if ((rect.bottom > window.innerHeight - 100 || rect.right < 200 || rect.left > window.innerWidth - 200) && 
                    rect.width < 200 && rect.height < 100) {
                  el.style.display = 'none';
                  el.remove();
                }
              });
            }
            
            // Remove immediately
            removeDevIndicators();
            
            // Remove on DOM ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', removeDevIndicators);
            } else {
              removeDevIndicators();
            }
            
            // Remove frequently
            setInterval(removeDevIndicators, 500);
            
            // Remove on page interactions
            document.addEventListener('visibilitychange', removeDevIndicators);
            document.addEventListener('focus', removeDevIndicators);
            window.addEventListener('resize', removeDevIndicators);
            
            // Override any potential Next.js functions that might create indicators
            if (typeof window !== 'undefined') {
              const originalCreateElement = document.createElement;
              document.createElement = function(tagName) {
                const element = originalCreateElement.call(this, tagName);
                if (tagName.toLowerCase() === 'div') {
                  const observer = new MutationObserver(() => {
                    const style = window.getComputedStyle(element);
                    if (style.position === 'fixed' && 
                        (element.textContent?.includes('Static') || element.textContent?.includes('⚡'))) {
                      element.style.display = 'none';
                      element.remove();
                    }
                  });
                  observer.observe(element, { childList: true, subtree: true, attributes: true });
                }
                return element;
              };
            }
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
