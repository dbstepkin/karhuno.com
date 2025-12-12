"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav 
        className="backdrop-blur-[8px] border-b border-white/20 shadow-sm transition-all duration-300 w-full"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 lg:h-20">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logonavbar.svg"
                  alt="Karhuno AI Logo"
                  width={160}
                  height={40}
                  className="h-9 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-3 py-2 rounded-full hover:bg-purple-50/80 ${montserrat.className}`}
            >
              Home
            </Link>
            
            {/* Resource Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors focus:outline-none px-3 py-2 rounded-full hover:bg-purple-50/80 ${montserrat.className}`}
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-180`} />
              </button>
              
              {/* Invisible hover bridge */}
              <div className="absolute -bottom-4 left-0 right-0 h-4 bg-transparent" />
              
              {/* Dropdown Menu */}
              <div 
                className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-52 py-3 z-50 border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Link
                  href="/tutorial"
                  className={`block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50/80 hover:text-purple-600 transition-colors rounded-lg mx-2 ${montserrat.className}`}
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
                  className={`block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50/80 hover:text-purple-600 transition-colors rounded-lg mx-2 ${montserrat.className}`}
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
                  className={`block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50/80 hover:text-purple-600 transition-colors rounded-lg mx-2 ${montserrat.className}`}
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
              className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-3 py-2 rounded-full hover:bg-purple-50/80 ${montserrat.className}`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-3 py-2 rounded-full hover:bg-purple-50/80 ${montserrat.className}`}
            >
              Blog
            </Link>
              </div>
            </div>

            {/* CTA Buttons - Right */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0 ml-auto">
            <Link
              href="https://my.karhuno.com/signin"
              className={`border border-gray-300/80 px-5 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50/80 hover:border-gray-400 transition-all ${montserrat.className}`}
            >
              Log in
            </Link>
            <Link
              href="https://my.karhuno.com/signup"
              className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ${montserrat.className}`}
            >
              Sign Up
            </Link>
          </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-shrink-0 ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none p-2 rounded-full hover:bg-purple-50/80 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-6 pt-4 border-t border-gray-100/50">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50/80 ${montserrat.className}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Resource Links */}
              <div className="space-y-2 pl-2">
                <div className={`text-xs font-semibold text-gray-500 px-4 py-2 uppercase tracking-wider ${roboto.className}`}>Resources</div>
                <Link
                  href="/tutorial"
                  className={`block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50/80 ${montserrat.className}`}
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
                  className={`block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50/80 ${montserrat.className}`}
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
                  className={`block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50/80 ${montserrat.className}`}
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
                className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50/80 ${montserrat.className}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className={`text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors px-4 py-3 rounded-xl hover:bg-purple-50/80 ${montserrat.className}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="pt-4 space-y-3">
                <Link
                  href="https://my.karhuno.com/signin"
                  className={`block w-full border border-gray-300/80 px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50/80 transition-colors text-center ${montserrat.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="https://my.karhuno.com/signup"
                  className={`block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-center ${montserrat.className}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}; 
