"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, Clock, Users, Award, Zap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Thank you! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" suppressHydrationWarning>
          {typeof window !== 'undefined' && [...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto text-center text-white relative z-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent px-4">
            LET'S CREATE
            <br />
            <span className="text-yellow-300">SOMETHING AMAZING</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Ready to transform your ideas into digital reality? We're here to make it happen!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm px-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span>24h Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-300" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-300" />
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 py-12 sm:py-16 lg:py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mr-2 sm:mr-3" />
                Start Your Project
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm sm:text-base"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="">Select Service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="consultation">Business Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none text-sm sm:text-base"
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  Ready to bring your vision to life? Our team of experts is here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 9988556644</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">clairvix.official@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">Sector 34, Chandigarh 160022</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>5+ Years of Experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>150+ Successful Projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>24/7 Support Available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>100% Client Satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}