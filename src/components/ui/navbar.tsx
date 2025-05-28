"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-200`}>
      <nav className="bg-white">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logonavbar.svg"
              alt="Karhuno AI Logo"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              Home
            </Link>
            
            {/* Resource Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors focus:outline-none"
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-180`} />
              </button>
              
              {/* Invisible hover bridge */}
              <div className="absolute -bottom-5 left-0 right-0 h-5 bg-transparent" />
              
              {/* Dropdown Menu */}
              <div className="absolute top-[calc(100%+1.25rem)] left-1/2 transform -translate-x-1/2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/tutorial"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                >
                  <span className="flex items-center">
                    <span className="text-purple-600 mr-2">💡</span>
                    Tutorial
                  </span>
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                >
                  <span className="flex items-center">
                    <span className="text-purple-600 mr-2">❓</span>
                    F.A.Q.
                  </span>
                </Link>
                <Link
                  href="/roi-calculation"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors"
                >
                  <span className="flex items-center">
                    <span className="text-purple-600 mr-2">💰</span>
                    ROI Calculation
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="border border-gray-300 px-4 py-1.5 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-[#792abf] to-[#792abf] text-white px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
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
          <div className="md:hidden py-4 px-6 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Resource Links */}
              <div className="space-y-2 pl-4">
                <Link
                  href="/tutorial"
                  className="block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <span className="text-purple-600 mr-2">💡</span>
                    Tutorial
                  </span>
                </Link>
                <Link
                  href="/faq"
                  className="block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <span className="text-purple-600 mr-2">❓</span>
                    F.A.Q.
                  </span>
                </Link>
                <Link
                  href="/roi-calculation"
                  className="block text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <span className="text-purple-600 mr-2">💰</span>
                    ROI Calculation
                  </span>
                </Link>
              </div>

              <Link
                href="/pricing"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              <div className="pt-4 space-y-3">
                <Link
                  href="/login"
                  className="block w-full border border-gray-300 px-4 py-1.5 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block w-full bg-gradient-to-r from-[#792abf] to-[#792abf] text-white px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition-all text-center"
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