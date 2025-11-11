import Link from "next/link";
import { Linkedin, Youtube, Twitter } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold mb-4 text-purple-300 ${roboto.className}`}>
              Contact Details
            </h4>
            <p className={`text-gray-300 ${montserrat.className}`}>+358 465381366</p>
            <p className={`text-gray-300 ${montserrat.className}`}>team@karhuno.com</p>
            <p className={`text-gray-300 ${montserrat.className}`}>
              Daring Spirit Oy <br /> Hiihtomäentie 14, 00810 <br /> Helsinki,
              Finland
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold mb-4 text-purple-300 ${roboto.className}`}>
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="/pricing"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                Pricing
              </Link>
              <Link
                href="/tutorial"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                Tutorial
              </Link>
              <Link
                href="/faq"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                FAQ
              </Link>
              <Link
                href="/roi-calculation"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                ROI Calculator
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold mb-4 text-purple-300 ${roboto.className}`}>
              Legal
            </h4>
            <div className="space-y-2">
              <Link
                href="/privacy-policy"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold mb-4 text-purple-300 ${roboto.className}`}>
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/karhuno-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/KarhunoAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@Karhuno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold mb-4 text-purple-300 ${roboto.className}`}>
              Company
            </h4>
            <div className="space-y-2">
              <Link
                href="/career"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                Career
              </Link>
              <Link
                href="/affiliate"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                Affiliate
              </Link>
              <Link
                href="/contact"
                className={`block text-gray-300 hover:text-white transition-colors ${montserrat.className}`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className={`text-gray-400 text-sm ${montserrat.className}`}>
            © 2024 Karhuno AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
