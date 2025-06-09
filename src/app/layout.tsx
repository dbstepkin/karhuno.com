import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { CookieConsent } from "@/components/cookie-content";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Karhuno AI",
  description: "Karhuno AI - Your AI Assistant",
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
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
