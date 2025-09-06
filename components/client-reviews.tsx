"use client"

import { useState } from "react"

export default function ClientReviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      text: "The team is outstanding, professional, and Great to work with. They go above & beyond to support. Their technical knowledge and expertise are top-notch, and they consistently deliver high-quality work. I'm grateful for their talent and commitment.",
      author: "LP",
      company: "USA",
    },
    {
      text: "Working with this team has been an absolute pleasure. Their professionalism, expertise and end up as a true partner that empowered our organization. Their commitment to excellence and attention to detail have been instrumental in our success. I highly recommend their services to anyone looking for growth and technical with new standard.",
      author: "LP",
      company: "Portugal",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-12">
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2.5px #374151",
              textStroke: "2.5px #374151",
            }}
          >
            CLIENT{" "}
          </span>
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2.5px #ef4444",
              textStroke: "2.5px #ef4444",
            }}
          >
            REVIEWS
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-4xl text-red-500 mb-4">"</div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{review.text}</p>
              <div className="text-center">
                <p className="font-semibold text-gray-800">{review.author}</p>
                <p className="text-gray-500 text-sm">{review.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2, 3, 4, 5].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full ${dot === currentReview ? "bg-red-500" : "bg-gray-300"}`}
              onClick={() => setCurrentReview(dot)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
