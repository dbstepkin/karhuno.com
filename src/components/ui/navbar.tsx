"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
});

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add shadow when scrolled
      setIsScrolled(currentScrollY > 20);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-4 left-16 right-12 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <nav className={`bg-white rounded-3xl px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'shadow-xl shadow-black/10' : 'shadow-lg shadow-black/5'
      }`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logonavbar.svg"
              alt="Karhuno AI Logo"
              width={160}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-3 py-2 rounded-full hover:bg-purple-50 ${montserrat.className}`}
            >
              Home
            </Link>
            
            {/* Resource Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors focus:outline-none px-3 py-2 rounded-full hover:bg-purple-50 ${montserrat.className}`}
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-180`} />
              </button>
              
              {/* Invisible hover bridge */}
              <div className="absolute -bottom-4 left-0 right-0 h-4 bg-transparent" />
              
              {/* Dropdown Menu */}
              <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-52 bg-white rounded-2xl shadow-xl py-3 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/tutorial"
                  className={`block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg mx-2 ${montserrat.className}`}
                >
                  <span className="flex items-center">
                    <Image
                      src="/images/lampadinatutorial1.png"
                      alt="Tutorial"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    Tutorial
                  </span>
                </Link>
                <Link
                  href="/faq"
                  className={`block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg mx-2 ${montserrat.className}`}
                >
                  <span className="flex items-center">
                    <Image
                      src="/images/domanda2.png"
                      alt="FAQ"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    F.A.Q.
                  </span>
                </Link>
                <Link
                  href="/roi-calculation"
                  className={`block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg mx-2 ${montserrat.className}`}
                >
                  <span className="flex items-center">
                    <Image
                      src="/roi1.png"
                      alt="ROI Calculation"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    ROI Calculation
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-3 py-2 rounded-full hover:bg-purple-50 ${montserrat.className}`}
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <Link
              href="/login"
              className={`border border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all ${montserrat.className}`}
            >
              Log in
            </Link>
            <Link
              href="/early-access"
              className={`bg-gradient-to-r from-[#792abf] to-[#792abf] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/25 transition-all ${montserrat.className}`}
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none p-2 rounded-full hover:bg-purple-50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50 ${montserrat.className}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Resource Links */}
              <div className="space-y-2 pl-2">
                <div className={`text-xs font-semibold text-gray-500 px-4 py-2 uppercase tracking-wider ${roboto.className}`}>Resources</div>
                <Link
                  href="/tutorial"
                  className={`block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50 ${montserrat.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <Image
                      src="/images/lampadinatutorial1.png"
                      alt="Tutorial"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    Tutorial
                  </span>
                </Link>
                <Link
                  href="/faq"
                  className={`block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50 ${montserrat.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <Image
                      src="/images/domanda2.png"
                      alt="FAQ"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    F.A.Q.
                  </span>
                </Link>
                <Link
                  href="/roi-calculation"
                  className={`block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50 ${montserrat.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <Image
                      src="/roi1.png"
                      alt="ROI Calculation"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    ROI Calculation
                  </span>
                </Link>
              </div>

              <Link
                href="/pricing"
                className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50 ${montserrat.className}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              <div className="pt-4 space-y-3">
                <Link
                  href="/login"
                  className={`block w-full border border-gray-300 px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center ${montserrat.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/early-access"
                  className={`block w-full bg-gradient-to-r from-[#792abf] to-[#792abf] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:brightness-110 transition-all text-center ${montserrat.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}; 