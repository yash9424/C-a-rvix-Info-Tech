"use client"

import { Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [expandedIndustry, setExpandedIndustry] = useState("Entertainment")
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      text: "The team delivered exceptional results that exceeded our expectations. Their technical expertise and attention to detail made all the difference in our project success.",
      author: "John Smith",
      company: "USA",
    },
    {
      text: "Outstanding service and professional approach. They transformed our vision into reality with remarkable precision and delivered on time with excellent quality.",
      author: "Maria Silva",
      company: "Portugal",
    },
  ]

  const industries = [
    {
      name: "Entertainment",
      icon: "🎬",
      expanded: true,
      content:
        "Video Streaming Platforms Music Streaming platforms Podcasts platform Audio Books platform Online Games Etc.",
    },
    { name: "Networking", icon: "🌐" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Travel & Hospitality", icon: "✈️" },
    { name: "Education", icon: "🎓" },
    { name: "Finance", icon: "💰" },
    { name: "Realty-Estate", icon: "🏠" },
    { name: "Ecommerce", icon: "🛒" },
    { name: "Business Software", icon: "💼" },
    { name: "Food & Beverages", icon: "🍽️" },
    { name: "Logistics", icon: "🚚" },
    { name: "Sports", icon: "⚽" },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">

      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 px-6 py-20 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-8">
                <span className="text-xl font-light">Got A </span>
                <span className="text-xl font-light text-blue-200 dark:text-blue-300">idea</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                LET'S EXPLORE MORE TO
                <br />
                TURN IT INTO REALITY !
              </h1>
              <p className="text-blue-100 dark:text-blue-200 text-lg leading-relaxed max-w-md">
                Planning is one thing and ensuring it is manifested is another, that's what we are here for
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative z-20 bg-gray-300 dark:bg-gray-600 rounded-lg p-4 w-80 h-48 mx-auto transform rotate-12 transition-colors">
                <div className="bg-gray-400 dark:bg-gray-500 rounded-full w-3 h-3 absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-white dark:bg-gray-800 rounded h-40 mt-4 p-4 transition-colors">
                  <div className="space-y-2">
                    <div className="bg-gray-200 dark:bg-gray-600 h-2 w-3/4 rounded"></div>
                    <div className="bg-gray-200 dark:bg-gray-600 h-2 w-1/2 rounded"></div>
                    <div className="bg-gray-200 dark:bg-gray-600 h-2 w-2/3 rounded"></div>
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-500 rounded-full w-16 h-16 mt-4 ml-auto"></div>
                </div>
              </div>
              <div className="absolute top-20 right-0 z-30 bg-gray-800 dark:bg-gray-700 rounded-2xl p-2 w-20 h-36 transform -rotate-12 transition-colors">
                <div className="bg-gray-600 dark:bg-gray-800 rounded-xl h-full p-2">
                  <div className="bg-white dark:bg-gray-900 rounded-lg h-full p-2 transition-colors">
                    <div className="space-y-1">
                      <div className="bg-gray-200 dark:bg-gray-600 h-1 w-full rounded"></div>
                      <div className="bg-gray-200 dark:bg-gray-600 h-1 w-3/4 rounded"></div>
                    </div>
                    <div className="bg-gray-300 dark:bg-gray-500 rounded-full w-8 h-8 mt-2 mx-auto"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 left-10 bg-blue-300 dark:bg-blue-400 rounded-full w-16 h-16 opacity-60"></div>
              <div className="absolute top-10 right-20 bg-white dark:bg-gray-200 rounded-full w-3 h-3 opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-200 dark:bg-gray-600 rounded-full w-32 h-32 absolute -top-8 -left-8 opacity-30"></div>
              <div className="bg-purple-300 dark:bg-purple-400 rounded-full w-24 h-24 absolute top-20 left-40 opacity-40"></div>
              <div className="relative z-10 flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-gray-700 dark:bg-gray-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white text-sm">👨‍💻</div>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-600 w-20 h-32 rounded-lg mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-700 dark:bg-gray-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white text-sm">👩‍💻</div>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-600 w-20 h-32 rounded-lg mx-auto"></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-black mb-8">
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
                  ABOUT{" "}
                </span>
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
                  US
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Webjet technology is a budding company armed with experienced individuals excelling in serving and
                executing client's IT requirement. Like every successful journey, we started by training and excelling
                as individuals with a goal to serve the businesses digitalize themselves in order to add value and
                success to their businesses. Optimization and expected execution are the objectives we cater to best of
                our abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-4">
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
              OUR{" "}
            </span>
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
              SERVICES
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Better Chance To Know Our Valuable Services</p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium">
              Web Development
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
              Designing
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
              Mobile Application
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
              Business Consultation
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
              Digital Marketing
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
              Maintenance
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
              Content Writing
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-gray-900 dark:border-gray-600 rounded-2xl w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{"</>"}</div>
            </div>
            <h3 className="text-2xl font-bold text-blue-500 mb-6">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              At Webjet, our web development services involve crafting tailored and scalable websites and web
              applications to meet our clients' unique requirements. Our expertise lies in creating visually appealing
              user interfaces through front-end development, ensuring a seamless and engaging user experience. Our
              expertise extends to back-end development for robust server-side functionality and efficient database
              integration for effective data management. With skilled developers utilizing various programming languages
              and frameworks, we prioritize optimal performance and security in every project. Our commitment extends
              beyond the initial development, encompassing regular updates, maintenance, and responsive support for
              reliable and sustainable web solutions.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                PHP
              </div>
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                W
              </div>
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                SQL
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8">
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
                  WHY CHOOSE{" "}
                </span>
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
                  US
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Webjet technology is a budding company armed with experienced individuals excelling in serving and
                executing client's IT requirement. Like every successful journey, we started by training and excelling
                as individuals with a goal to serve the businesses digitalize themselves in order to add value and
                success to their businesses. Optimization and expected execution are the objectives we cater to best of
                our abilities.
              </p>
            </div>
            <div className="relative">
              <div className="bg-purple-300 dark:bg-purple-400 rounded-full w-32 h-32 absolute -top-8 -right-8 opacity-30"></div>
              <div className="bg-gray-300 dark:bg-gray-500 rounded-full w-24 h-24 absolute bottom-10 left-10 opacity-40"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="bg-gray-700 dark:bg-gray-600 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <div className="text-white text-lg">🤝</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-600 w-16 h-32 rounded-lg mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-700 dark:bg-gray-600 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <div className="text-white text-lg">👔</div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-600 w-16 h-32 rounded-lg mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
                INDUSTRIES WE{" "}
              </span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
                ARE IN
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Better Chance To Know Our Valuable Services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {industries.slice(0, 6).map((industry) => (
                <div key={industry.name} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setExpandedIndustry(expandedIndustry === industry.name ? "" : industry.name)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{industry.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{industry.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedIndustry === industry.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedIndustry === industry.name && industry.content && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{industry.content}</p>
                      <button className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                        Explore
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {industries.slice(6).map((industry) => (
                <div key={industry.name} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setExpandedIndustry(expandedIndustry === industry.name ? "" : industry.name)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{industry.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{industry.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedIndustry === industry.name ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-purple-300 dark:bg-purple-400 rounded-full w-32 h-32 absolute -top-8 -left-8 opacity-30"></div>
              <div className="bg-gray-300 dark:bg-gray-500 rounded-full w-24 h-24 absolute bottom-10 right-10 opacity-40"></div>
              <div className="relative z-10 flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-gray-700 dark:bg-gray-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white text-sm">💻</div>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-600 w-20 h-32 rounded-lg mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-700 dark:bg-gray-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white text-sm">📊</div>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-600 w-20 h-32 rounded-lg mx-auto"></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-black mb-8">
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
                  METHODOLOGY
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                We work on client methodology and have a plan for listening in easy-to-digest and bite-sized
                requirements. 3 Contacts can cut it for us to change & Document is the solid foundation and this is the
                sign-off and get started from where we left off. We are always available at the time of execution and
                the operating time on anything that delays the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 px-6 py-20 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-16">
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
              CLIENT{" "}
            </span>
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
              REVIEWS
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg relative">
                <div className="text-6xl text-red-500 absolute top-4 left-4">"</div>
                <div className="text-6xl text-red-500 absolute bottom-4 right-4">"</div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 mt-8">{review.text}</p>
                <div className="text-center">
                  <p className="font-bold text-gray-900 dark:text-white">{review.author}</p>
                  <p className="text-gray-500 dark:text-gray-400">{review.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentReview ? "bg-red-500" : "bg-gray-300 dark:bg-gray-600"}`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-16">
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #374151", color: "transparent" }}>
              LET'S GROW{" "}
            </span>
            <span className="text-transparent" style={{ WebkitTextStroke: "2.5px #ef4444", color: "transparent" }}>
              TOGETHER
            </span>
          </h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <select className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>Select Services</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Digital Marketing</option>
              </select>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-900 dark:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </section>


    </main>
  )
}
