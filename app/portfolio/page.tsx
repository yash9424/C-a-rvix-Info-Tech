"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, ExternalLink, Github, Filter } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [activeFilter, setActiveFilter] = useState("All")
  const [visibleItems, setVisibleItems] = useState(new Set())

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Website",
      language: "React",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description: "Full-featured e-commerce platform with payment integration"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "App",
      language: "React Native",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Cross-platform mobile app for task and project management"
    },
    {
      id: 3,
      title: "CRM Software",
      category: "Software",
      language: "PHP",
      tech: ["PHP", "Laravel", "MySQL", "Vue.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      description: "Customer relationship management system for businesses"
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "Website",
      language: "Next.js",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      description: "Modern restaurant website with online ordering system"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      category: "App",
      language: "Flutter",
      tech: ["Flutter", "Dart", "SQLite"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Mobile fitness tracking app with workout plans"
    },
    {
      id: 6,
      title: "Inventory System",
      category: "Software",
      language: "Python",
      tech: ["Python", "Django", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      description: "Warehouse inventory management system"
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "Website",
      language: "Vue.js",
      tech: ["Vue.js", "Nuxt.js", "SCSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      description: "Creative portfolio website for digital agency"
    },
    {
      id: 8,
      title: "Chat Application",
      category: "App",
      language: "Swift",
      tech: ["Swift", "iOS", "Firebase"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop",
      description: "Real-time messaging app for iOS platform"
    }
  ]

  const filters = ["All", "Website", "App", "Software", "React", "PHP", "Python", "Flutter", "Swift"]

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "All") return true
    return project.category === activeFilter || project.language === activeFilter
  })

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

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 px-6 transition-colors overflow-hidden h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center text-white relative z-10 w-full">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" 
               id="hero-title" 
               style={visibleItems.has('hero-title') ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}>
                OUR{" "}
              </span>
              <span className="text-blue-400">PORTFOLIO</span>
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Showcasing our expertise across web development, mobile applications, and software solutions
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </section>

      {/* Filter Section */}
      <section className="bg-white dark:bg-gray-900 px-6 py-8 transition-colors border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-800" 
               id="filters" 
               style={visibleItems.has('filters') ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <div className="flex items-center justify-center mb-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 group"
                style={visibleItems.has(`project-${project.id}`) ? {
                  opacity: 1, 
                  transform: 'translateY(0)',
                  transitionDelay: `${index * 100}ms`
                } : {}}
              >
                <Link href={`/project/${project.id}`} className="block relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium">
                      View Details
                    </span>
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'Website' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      project.category === 'App' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {project.language}
                    </span>
                  </div>
                  
                  <Link href={`/project/${project.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" 
               id="stats" 
               style={visibleItems.has('stats') ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Numbers that speak for our expertise</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "15+", label: "Technologies" },
                { number: "5+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-500 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" 
               id="cta" 
               style={visibleItems.has('cta') ? {opacity: 1, transform: 'translateY(0)'} : {}}>
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's bring your ideas to life with our proven expertise and innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                View More Work
              </button>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}