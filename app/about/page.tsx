"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 px-6 py-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Cłaîr<span className="text-blue-500">v</span>ix Info Tech
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium border-b-2 border-blue-600 pb-1"
            >
              About us
            </Link>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Careers
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button className="border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 px-6 py-20 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="text-transparent" style={{ WebkitTextStroke: "3px #ffffff", color: "transparent" }}>
              ABOUT{" "}
            </span>
            <span className="text-red-500">WEBJET</span>
          </h1>
          <p className="text-blue-100 dark:text-blue-200 text-xl leading-relaxed max-w-3xl mx-auto">
            Discover our journey, approach, and commitment to transforming ideas into digital reality through innovative
            technology solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8">
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
                  OUR{" "}
                </span>
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
                  STORY
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Webjet technology began as a vision to bridge the gap between innovative ideas and digital reality.
                Founded by experienced professionals who understood the challenges businesses face in their digital
                transformation journey.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                We started by training and excelling as individuals with a goal to serve businesses digitalize
                themselves, adding value and success to their operations. Today, we stand as a trusted partner for
                companies seeking reliable, scalable, and innovative technology solutions.
              </p>
            </div>
            <div className="relative">
              <img
                src="/modern-office-collaboration.png"
                alt="Webjet team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Approach Section */}
      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
                HOW WE{" "}
              </span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
                APPROACH
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our systematic approach to understanding and solving your business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Discovery & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We begin by thoroughly understanding your business goals, challenges, and requirements through detailed
                consultation and analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Strategic Planning</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We develop comprehensive strategies and roadmaps tailored to your specific needs, ensuring optimal
                resource utilization and timeline management.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Solution Design</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our expert team designs innovative, scalable solutions that align with your business objectives and
                future growth plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/agile-team-collaboration.png"
                alt="Development team working"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-6 left-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Agile Methodology</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-8">
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
                  HOW WE{" "}
                </span>
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
                  WORK
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Collaborative Planning</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We work closely with your team to define project scope, milestones, and deliverables through
                      transparent communication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Iterative Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Using agile methodologies, we deliver working solutions in iterations, allowing for continuous
                      feedback and improvements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Quality Assurance</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Every solution undergoes rigorous testing and quality checks to ensure optimal performance and
                      reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
                HOW WE{" "}
              </span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
                DELIVER
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Our commitment to excellence in every delivery</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">On-Time Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We respect deadlines and ensure timely project completion without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Precision & Accuracy</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Every detail is carefully crafted to meet your exact specifications and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Ongoing Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Our relationship doesn't end at delivery - we provide continuous support and maintenance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Scalable Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We build solutions that grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16">
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
              OUR{" "}
            </span>
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
              VALUES
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img
                src="/innovation-technology.png"
                alt="Innovation"
                className="rounded-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly explore new technologies and methodologies to deliver cutting-edge solutions that give you
                a competitive advantage.
              </p>
            </div>
            <div>
              <img src="/team-collaboration-trust.png" alt="Trust" className="rounded-lg mb-6 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Trust</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building long-term relationships based on transparency, reliability, and consistent delivery of
                exceptional results.
              </p>
            </div>
            <div>
              <img
                src="/excellence-quality-standards.png"
                alt="Excellence"
                className="rounded-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain the highest standards in everything we do, from code quality to customer service and project
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Ideas?</h2>
          <p className="text-blue-100 dark:text-blue-200 text-lg mb-8">
            Let's discuss how we can help bring your vision to life with our expertise and innovative approach.
          </p>
          <Link
            href="/#contact"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white px-6 py-16 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center mb-4">
                <div className="text-2xl font-bold">
                  Cłaîr<span className="text-blue-500">v</span>ix Info Tech
                </div>
              </Link>
              <p className="text-gray-300 leading-relaxed max-w-md">
                We believe in the power and control offered to us by having flexibility and freedom to be creative and
                innovative. Our commitment to excellence drives us to deliver outstanding results.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+91 9988556644</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✉️</span>
                  <span>webjet.official@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>
                    Webjet Office
                    <br />
                    Sector 34, Chandigarh 160022
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🌐</span>
                  <span>www.webjet.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-white">
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  📷
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  💼
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  📺
                </a>
              </div>
              <p className="text-gray-400 text-sm">© 2024 Cłaîrvix Info Tech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
