'use client'

import { useState } from 'react'
import { CheckCircle, Mail, Send } from 'lucide-react'
import { Montserrat, Roboto } from 'next/font/google'
import Image from 'next/image'
import Footer from '@/components/home/footer'

const montserrat = Montserrat({ subsets: ['latin'] })
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'] 
})

export default function EarlyAccessPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setEmail('')
      } else {
        console.error('Error:', result.error)
        // You could add error state here if needed
        alert('There was an error. Please try again.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('There was an error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
          }
          100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
        }
        
        .pulse-glow-container {
          border-radius: 24px;
          border: 2px solid white;
          animation: pulseGlow 2.5s infinite ease-in-out;
        }
      `}</style>

      <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 ${montserrat.className}`}>
        {/* Main Content */}
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl w-full">
            {!isSubmitted ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row">
                  {/* Left Column - Image */}
                  <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
                    <div className="relative w-full max-w-md">
                      <div className="pulse-glow-container p-4">
                        <Image
                          src="/karhunosignup.png"
                          alt="Karhuno AI Signup"
                          width={500}
                          height={500}
                          className="w-full h-auto object-contain rounded-2xl"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Optional Divider */}
                  <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-purple-200 to-transparent"></div>

                  {/* Right Column - Form Content */}
                  <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
                    <div className="w-full max-w-md">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h1 className={`text-3xl font-bold text-center mb-4 ${roboto.className}`}>
                        <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">
                          Join Karhuno AI Early Access
                        </span>
                      </h1>
                      
                      {/* Description */}
                      <p className={`text-gray-600 text-center mb-8 leading-relaxed ${montserrat.className}`}>
                        We're currently onboarding users gradually. Leave your email and we'll notify you when it's your turn. You'll receive <strong>1,000 free credits</strong> to explore the platform.
                      </p>
                      
                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-2 ${montserrat.className}`}>
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50 ${montserrat.className}`}
                          />
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${montserrat.className}`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Joining...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Join Early Access
                            </>
                          )}
                        </button>
                      </form>
                      
                      {/* Trust indicators */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className={`text-xs text-gray-500 text-center ${montserrat.className}`}>
                          🔒 Your email is secure and will only be used for early access notifications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Success State */
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-green-100 p-8 text-center max-w-md mx-auto">
                {/* Success Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                
                {/* Success Title */}
                <h2 className={`text-2xl font-bold mb-4 ${roboto.className}`}>
                  🎉 <span className="bg-gradient-to-r from-[#a974ff] to-[#679eff] bg-clip-text text-transparent">You're on the list!</span>
                </h2>
                
                {/* Success Message */}
                <p className={`text-gray-600 mb-6 leading-relaxed ${montserrat.className}`}>
                  Thanks for joining our early access program! We'll notify you as soon as your account is ready. 
                  <br /><br />
                  <strong>Don't forget to check your spam folder</strong> for our emails.
                </p>
                
                {/* Back to Home */}
                <a
                  href="/"
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg ${montserrat.className}`}
                >
                  Back to Home
                </a>
              </div>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  )
} 