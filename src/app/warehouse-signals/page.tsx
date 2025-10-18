"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Montserrat, Roboto } from "next/font/google";
import { 
  Building2, 
  Clock, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Truck, 
  Shield, 
  Zap,
  TrendingUp,
  MapPin,
  Calendar,
  Mail,
  Linkedin,
  Info
} from "lucide-react";
import Footer from "@/components/home/footer";
import { Metadata } from "next";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['system-ui', 'arial'],
  preload: false
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  fallback: ['system-ui', 'arial'],
  preload: false
});

// Form state and handlers
const useCustomSignalForm = () => {
  const [formData, setFormData] = useState({
    companyType: "",
    location: ""
  });
  const [errors, setErrors] = useState({
    companyType: false,
    location: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: false }));
  };

  const handleFormSubmit = async () => {
    const newErrors = {
      companyType: !formData.companyType.trim(),
      location: !formData.location.trim()
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/early-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            email: `custom-signal-request-${Date.now()}@karhuno.com`,
            companyType: formData.companyType,
            news: "new warehouse announced",
            location: formData.location
          }),
        });

        if (response.ok) {
          setShowSuccess(true);
          setFormData({ companyType: "", location: "" });
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        } else {
          throw new Error('Failed to submit');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    showSuccess,
    handleInputChange,
    handleFormSubmit
  };
};

const businessTypes = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Logistics & Supply Chain",
    description: "Fleet management, transportation, and distribution services"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Warehouse Software",
    description: "WMS, inventory management, and automation solutions"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security Systems",
    description: "Surveillance, access control, and safety equipment"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Staffing Agencies",
    description: "Temporary workers, recruitment, and HR services"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Equipment Suppliers",
    description: "Forklifts, conveyors, and warehouse machinery"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Consulting Services",
    description: "Operations optimization and process improvement"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Real-time Monitoring",
    description: "Our AI continuously scans news, press releases, and job boards for warehouse opening announcements across your target markets."
  },
  {
    step: "02", 
    title: "Instant Alerts",
    description: "Get notified within minutes when a new warehouse is announced, complete with company details and decision-maker information."
  },
  {
    step: "03",
    title: "Verified Contacts",
    description: "Access verified email addresses and LinkedIn profiles of key stakeholders involved in the warehouse expansion decision."
  }
];

const exampleSignals = [
  {
    company: "TechLogistics Inc",
    location: "Dallas, TX",
    signal: "Announced 500,000 sq ft warehouse expansion",
    timing: "2 hours ago",
    proof: "Press release + LinkedIn post"
  },
  {
    company: "GlobalRetail Corp",
    location: "Atlanta, GA", 
    signal: "Hiring 200+ warehouse staff for new facility",
    timing: "4 hours ago",
    proof: "Job board + Company blog"
  },
  {
    company: "EcoSupply Solutions",
    location: "Phoenix, AZ",
    signal: "Breaking ground on automated distribution center",
    timing: "6 hours ago", 
    proof: "Local news + Construction permits"
  }
];

const timingBenefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "First Mover Advantage",
    description: "Be the first vendor to reach out when budgets are being allocated"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Higher Conversion Rates", 
    description: "Early outreach converts 3x better than cold outreach to established facilities"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precise Timing",
    description: "Know exactly when companies are in buying mode for your services"
  }
];

export default function WarehouseSignalsPage() {
  const {
    formData,
    errors,
    isSubmitting,
    showSuccess,
    handleInputChange,
    handleFormSubmit
  } = useCustomSignalForm();

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className={`inline-block px-4 py-2 bg-purple-700/20 rounded-full text-purple-300 text-sm font-medium ${montserrat.className}`}>
              Warehouse Intelligence
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${roboto.className}`}
          >
            Beat Your Competitors to
            <span className="block bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
              Every Warehouse Opening
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed ${montserrat.className}`}
          >
            Get real-time alerts when companies announce new warehouse openings. 
            Be the first vendor to reach out when budgets are being allocated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="relative group">
              <a 
                href="https://my.karhuno.com/signup"
                className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 ${montserrat.className}`}
              >
                Sign Up to Unlock Signals
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap relative">
                  Promo code required. Limited-time access.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
            <a 
              href="#how-it-works"
              className={`text-gray-300 hover:text-white px-8 py-4 rounded-full border border-gray-600 hover:border-gray-400 font-medium transition-all duration-300 ${montserrat.className}`}
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}>
              Who Benefits from <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Warehouse Signals</span>?
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${montserrat.className}`}>
              If your business sells products or services to companies opening new warehouses, 
              you need to know about these opportunities before your competitors do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">
                  {business.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${roboto.className}`}>
                  {business.title}
                </h3>
                <p className={`text-gray-300 ${montserrat.className}`}>
                  {business.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}>
              How <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Karhuno AI</span> Works
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${montserrat.className}`}>
              Our AI monitors the web 24/7 to catch warehouse opening announcements 
              the moment they're published.
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className={`text-2xl font-bold ${roboto.className}`}>
                        {step.step}
                      </span>
                    </div>
                    <h3 className={`text-3xl font-bold ${roboto.className}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-lg text-gray-300 leading-relaxed ${montserrat.className}`}>
                    {step.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-white/10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <p className={`text-gray-300 ${montserrat.className}`}>
                        {index === 0 && "Monitoring 50+ sources"}
                        {index === 1 && "Instant notifications"}
                        {index === 2 && "Verified contact data"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Signals Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}>
              Real <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Signals</span> We Track
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${montserrat.className}`}>
              Here are actual warehouse opening signals our AI detected in the last 24 hours.
            </p>
          </motion.div>

          <div className="space-y-6">
            {exampleSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-purple-400" />
                      <h3 className={`text-xl font-semibold ${roboto.className}`}>
                        {signal.company}
                      </h3>
                      <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                        {signal.timing}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className={montserrat.className}>{signal.location}</span>
                    </div>
                    <p className={`text-gray-200 ${montserrat.className}`}>
                      {signal.signal}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className={montserrat.className}>Verified: {signal.proof}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Get Contact
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Buying Signals Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}>
              Other <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Buying Signals</span> We Track
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${montserrat.className}`}>
              Warehouse openings are just one of several high-intent signals that give you a strategic sales advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Logistics Hiring",
                description: "Mass hiring for warehouse operations signals expansion plans and new facility needs.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Construction Permits",
                description: "Building permits for industrial facilities indicate upcoming warehouse or distribution center projects.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Office Relocations",
                description: "Companies moving headquarters often need new warehouse facilities in their new location.",
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Funding News",
                description: "Series A/B funding rounds typically trigger warehouse expansion and infrastructure investments.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Geographic Expansion",
                description: "Entering new markets requires local distribution centers and warehouse facilities.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Logistics Partnerships",
                description: "New shipping partnerships often indicate warehouse capacity needs and expansion plans.",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${signal.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {signal.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${roboto.className}`}>
                  {signal.title}
                </h3>
                <p className={`text-gray-300 leading-relaxed ${montserrat.className}`}>
                  {signal.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <a 
              href="https://my.karhuno.com/signup"
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 ${montserrat.className}`}
            >
              Want to track these too? Sign Up to Unlock Signals
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Timing Matters Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}>
              Why <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Timing</span> Matters
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${montserrat.className}`}>
              The first vendor to reach out when a warehouse is announced has a significant advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {timingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${roboto.className}`}>
                  {benefit.title}
                </h3>
                <p className={`text-gray-300 leading-relaxed ${montserrat.className}`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-white/10 text-center"
          >
            <h3 className={`text-2xl font-bold mb-4 ${roboto.className}`}>
              Don't Miss Another Opportunity
            </h3>
            <p className={`text-lg text-gray-300 mb-6 max-w-2xl mx-auto ${montserrat.className}`}>
              Every day you wait, your competitors are getting ahead. 
              Start tracking warehouse signals today and never miss a new opportunity again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://my.karhuno.com/signup"
                className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 ${montserrat.className}`}
              >
                Sign Up to Redeem Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://calendly.com/team-karhuno/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 hover:text-white px-8 py-4 rounded-full border border-gray-600 hover:border-gray-400 font-medium transition-all duration-300 ${montserrat.className}`}
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Teams Trust Karhuno AI Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${roboto.className}`}>
              Why Teams <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Trust</span> Karhuno AI
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {/* Quotation Mark Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">"</span>
                </div>
                
                <blockquote className={`text-xl md:text-2xl text-gray-100 leading-relaxed mb-6 ${montserrat.className}`}>
                  "We closed a deal in 24 hours after receiving a warehouse signal from Karhuno. 
                  It's like having a sales radar no one else has."
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className={`font-semibold text-white ${roboto.className}`}>
                      Head of Sales, Industrial Services Company
                    </p>
                    <p className={`text-gray-400 text-sm ${montserrat.className}`}>
                      🇺🇸 United States
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Trust Statement & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold text-white mb-4 ${roboto.className}`}>
                  100+ teams trust Karhuno AI to spot real buying intent.
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg">🌍</span>
                  </div>
                  <div>
                    <p className={`text-lg text-gray-200 leading-relaxed ${montserrat.className}`}>
                      Works in any country, in any language
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg">📬</span>
                  </div>
                  <div>
                    <p className={`text-lg text-gray-200 leading-relaxed ${montserrat.className}`}>
                      New signals added daily, no manual input required
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Signal Request Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">🧠</span>
              <span className={`text-lg font-semibold text-gray-700 ${montserrat.className}`}>
                Custom Signal Request
              </span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${roboto.className}`}>
              Get a <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">Custom Search</span> for Warehouse Signals
            </h2>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${montserrat.className}`}>
              Tell us what type of companies you're targeting, and we'll find warehouse opening signals specifically for your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 sm:p-8 shadow-lg max-w-2xl mx-auto"
          >
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${montserrat.className}`}>
                  What kind of company? <span className="text-xs italic text-gray-500">(required)</span>
                </label>
                <input
                  type="text"
                  name="companyType"
                  value={formData.companyType}
                  onChange={(e) => handleInputChange('companyType', e.target.value)}
                  placeholder="e.g. IT company, forklift supplier, logistics startup"
                  className={`w-full rounded-xl px-4 py-3 text-gray-900 border ${errors.companyType ? 'border-red-500' : 'border-gray-200'} bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${montserrat.className}`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${montserrat.className}`}>
                  What news? <span className="text-xs italic text-gray-500">(pre-filled)</span>
                </label>
                <input
                  type="text"
                  name="news"
                  value="new warehouse announced"
                  readOnly
                  className={`w-full rounded-xl px-4 py-3 text-gray-600 border border-gray-200 bg-gray-100 cursor-not-allowed ${montserrat.className}`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${montserrat.className}`}>
                  Where? <span className="text-xs italic text-gray-500">(required)</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="e.g. Milan, Italy or UK and California"
                  className={`w-full rounded-xl px-4 py-3 text-gray-900 border ${errors.location ? 'border-red-500' : 'border-gray-200'} bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${montserrat.className}`}
                />
              </div>
            </div>
            
            <button
              onClick={handleFormSubmit}
              disabled={isSubmitting}
              className={`w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${montserrat.className}`}
            >
              {isSubmitting ? "Finding Signals..." : "Find Signals"}
            </button>
            
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl"
              >
                <p className={`text-green-700 text-center ${montserrat.className}`}>
                  ✅ Request submitted! We'll send you warehouse signals via email.
                </p>
              </motion.div>
            )}
            
            <p className={`text-sm text-gray-500 text-center mt-4 ${montserrat.className}`}>
              You'll receive fresh signals via email — no signup needed.
            </p>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
