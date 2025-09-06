"use client"

import { Moon, Sun, ArrowLeft } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProjectDetail() {
  const { theme, setTheme } = useTheme()
  const params = useParams()
  const projectId = params.id

  const projects = {
    "1": {
      title: "E-Commerce Platform",
      category: "Website",
      language: "React",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "Full-featured e-commerce platform with payment integration",
      details: "This comprehensive e-commerce solution provides businesses with everything needed to sell products online. Features include user authentication, product catalog, shopping cart, secure payment processing, and admin dashboard.",
      features: ["User authentication", "Product catalog", "Shopping cart", "Payment processing", "Order management", "Admin dashboard"],
      useCase: "Perfect for businesses looking to establish an online presence and sell products directly to customers."
    },
    "2": {
      title: "Task Management App",
      category: "App", 
      language: "React Native",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      description: "Cross-platform mobile app for task and project management",
      details: "A powerful productivity app that helps teams organize work efficiently. Built with React Native for seamless performance across iOS and Android.",
      features: ["Task creation", "Project organization", "Team collaboration", "Real-time sync", "Progress tracking", "Notifications"],
      useCase: "Ideal for teams and individuals who need to organize tasks and collaborate on projects."
    },
    "3": {
      title: "CRM Software",
      category: "Software",
      language: "PHP", 
      tech: ["PHP", "Laravel", "MySQL", "Vue.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Customer relationship management system for businesses",
      details: "Comprehensive CRM solution built with Laravel, providing tools to manage customer data, track sales opportunities, and improve relationships.",
      features: ["Customer database", "Sales pipeline", "Lead management", "Email integration", "Reporting", "Task scheduling"],
      useCase: "Essential for businesses looking to streamline customer management and improve sales processes."
    },
    "4": {
      title: "Restaurant Website",
      category: "Website",
      language: "Next.js",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: "Modern restaurant website with online ordering system",
      details: "Sophisticated restaurant website built with Next.js, offering customers an intuitive way to explore menus, make reservations, and place orders.",
      features: ["Digital menu", "Table reservations", "Online ordering", "Gallery", "Reviews", "Location map"],
      useCase: "Perfect for restaurants wanting to enhance their online presence and provide convenient services."
    },
    "5": {
      title: "Fitness Tracker",
      category: "App",
      language: "Flutter",
      tech: ["Flutter", "Dart", "SQLite"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description: "Mobile fitness tracking app with workout plans",
      details: "Feature-rich fitness app built with Flutter, helping users track their fitness journey and follow workout plans.",
      features: ["Workout tracking", "Exercise routines", "Progress monitoring", "Calorie tracking", "Goal setting", "Social sharing"],
      useCase: "Ideal for fitness enthusiasts and anyone looking to maintain a healthy lifestyle."
    },
    "6": {
      title: "Inventory System",
      category: "Software",
      language: "Python",
      tech: ["Python", "Django", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      description: "Warehouse inventory management system",
      details: "Robust inventory management solution built with Django, providing complete control over stock levels and warehouse operations.",
      features: ["Real-time tracking", "Low-stock alerts", "Barcode scanning", "Purchase orders", "Supplier management", "Reporting"],
      useCase: "Essential for businesses with complex inventory needs and warehouse operations."
    },
    "7": {
      title: "Portfolio Website",
      category: "Website",
      language: "Vue.js",
      tech: ["Vue.js", "Nuxt.js", "SCSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      description: "Creative portfolio website for digital agency",
      details: "Elegant portfolio website built with Vue.js and Nuxt.js, designed to showcase creative work and attract potential clients.",
      features: ["Project showcase", "Animations", "Client testimonials", "Service presentation", "Contact form", "SEO optimization"],
      useCase: "Perfect for creative agencies and professionals who want to showcase their work."
    },
    "8": {
      title: "Chat Application",
      category: "App",
      language: "Swift",
      tech: ["Swift", "iOS", "Firebase"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      description: "Real-time messaging app for iOS platform",
      details: "Secure messaging app built natively for iOS using Swift, offering users fast and reliable communication.",
      features: ["Real-time messaging", "Media sharing", "Group chat", "End-to-end encryption", "Voice calls", "Push notifications"],
      useCase: "Ideal for businesses or communities needing secure communication tools."
    }
  }

  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-900 px-6 py-4 transition-colors sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Cłaîr<span className="text-blue-500">v</span>ix Info Tech
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/portfolio" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  project.category === 'Website' ? 'bg-green-500' :
                  project.category === 'App' ? 'bg-blue-500' : 'bg-purple-500'
                }`}>
                  {project.category}
                </span>
                <span className="text-blue-200">{project.language}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-blue-100 leading-relaxed">{project.description}</p>
            </div>
            <div>
              <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{project.details}</p>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Use Case</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.useCase}</p>
            </div>

            <div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                <div className="space-y-3">
                  {project.tech.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-600 to-red-500 p-6 rounded-xl text-white text-center">
                <h3 className="text-xl font-bold mb-4">Interested in Similar Project?</h3>
                <p className="mb-4 opacity-90">Let's discuss how we can build something amazing for you</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}