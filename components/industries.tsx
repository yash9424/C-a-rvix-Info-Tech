"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Industries() {
  const [expandedIndustry, setExpandedIndustry] = useState("Entertainment")

  const leftColumnIndustries = [
    {
      name: "Entertainment",
      icon: "🎬",
      content:
        "Video Streaming Platforms Music Streaming platforms Podcasts platform Audio Books platform Online Games Etc.",
    },
    { name: "Networking", icon: "🔗" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Travel & Hospitality", icon: "✈️" },
    { name: "Education", icon: "🎓" },
    { name: "Finance", icon: "💰" },
  ]

  const rightColumnIndustries = [
    { name: "Realty-Estate", icon: "🏠" },
    { name: "Ecommerce", icon: "🛒" },
    { name: "Business Software", icon: "💼" },
    { name: "Food & Beverages", icon: "🍽️" },
    { name: "Logistics", icon: "🚚" },
    { name: "Sports", icon: "⚽" },
  ]

  const toggleIndustry = (industryName: string) => {
    setExpandedIndustry(expandedIndustry === industryName ? "" : industryName)
  }

  const IndustryItem = ({ industry, isExpanded }: { industry: any; isExpanded: boolean }) => (
    <div className="border border-gray-200 rounded-lg mb-3">
      <button
        onClick={() => toggleIndustry(industry.name)}
        className={`w-full p-4 flex items-center justify-between text-left ${
          isExpanded ? "bg-blue-900 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{industry.icon}</span>
          <span className="font-medium">{industry.name}</span>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && industry.content && (
        <div className="p-4 bg-white border-t">
          <p className="text-gray-600 text-sm mb-4">{industry.content}</p>
          <button className="px-6 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">Explore</button>
        </div>
      )}
    </div>
  )

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "2.5px #374151",
                textStroke: "2.5px #374151",
                fontWeight: "900",
              }}
            >
              INDUSTRIES WE{" "}
            </span>
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "2.5px #ef4444",
                textStroke: "2.5px #ef4444",
                fontWeight: "900",
              }}
            >
              ARE IN
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Better Chance To Know Our Valuable Services</p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {leftColumnIndustries.map((industry) => (
              <IndustryItem key={industry.name} industry={industry} isExpanded={expandedIndustry === industry.name} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnIndustries.map((industry) => (
              <IndustryItem key={industry.name} industry={industry} isExpanded={expandedIndustry === industry.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
