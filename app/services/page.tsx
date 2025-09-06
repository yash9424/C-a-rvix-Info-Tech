import { Code, Palette, Smartphone, Users, TrendingUp, Settings } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      technologies: ["React", "Next.js", "Node.js", "PHP", "Laravel", "WordPress"],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Creative and user-centered design solutions that enhance user engagement and drive business growth.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless functionality.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Business Consultation",
      description: "Strategic IT consulting to help businesses optimize their digital transformation journey.",
      technologies: ["Strategy", "Analysis", "Planning", "Implementation"],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and reach target audiences.",
      technologies: ["SEO", "SEM", "Social Media", "Content Marketing", "Analytics"],
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Maintenance & Support",
      description: "Ongoing technical support and maintenance services to ensure your systems run smoothly.",
      technologies: ["24/7 Support", "Updates", "Security", "Performance Optimization"],
    },
  ]

  const technologies = {
    Frontend: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
    Backend: ["Node.js", "PHP", "Python", "Java", "C#", ".NET", "Laravel", "Express.js", "Django", "Spring Boot"],
    Database: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase", "Oracle", "SQL Server"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Git", "CI/CD"],
    "Design Tools": ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "InVision", "Zeplin"],
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 px-6 min-h-screen flex items-center transition-colors overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/Clairvix Info Tech  Innovating Your Success_free.mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}>
                OUR{" "}
              </span>
              <span className="text-blue-400">SERVICES</span>
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 leading-relaxed">
              Comprehensive digital solutions tailored to transform your business and drive growth through innovative
              technology
            </p>
          </div>
          <div className="relative">
            <video
              autoPlay
              loop
              controls
              className="w-full h-auto rounded-lg shadow-lg"
            >
              <source src="/Clairvix Info Tech  Innovating Your Success_free.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Expert solutions across multiple domains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technologies & Languages</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Cutting-edge tools and frameworks we master</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business needs and project requirements",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating detailed project roadmap and technical specifications",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with best practices and modern technologies",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, deployment, and ongoing support for your project",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your ideas into reality with our expert services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
