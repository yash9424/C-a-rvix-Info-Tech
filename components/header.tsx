"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white dark:bg-gray-900 px-4 sm:px-6 py-4 transition-colors sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <img src="/logo.svg" alt="Cłaîrvix Info Tech" className="w-8 h-8 sm:w-10 sm:h-10" />
            <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
              <span className="hidden sm:inline">Cłaîr<span className="text-blue-500">v</span>ix Info Tech</span>
              <span className="sm:hidden">Cłaîrvix</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              About us
            </Link>
            <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              Portfolio
            </Link>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              Careers
            </a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <button className="hidden sm:block border border-gray-300 dark:border-gray-600 px-4 sm:px-6 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors text-sm sm:text-base">
              Contact Us
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-6 pt-20">
              <nav className="space-y-6">
                <Link href="/" className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                  About us
                </Link>
                <Link href="/services" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
                <Link href="/portfolio" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </Link>
                <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                  Careers
                </a>
                <button className="w-full mt-6 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors">
                  Contact Us
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}