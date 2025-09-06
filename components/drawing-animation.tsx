"use client"

import { useEffect, useState } from "react"

export default function DrawingAnimation() {
  const [step, setStep] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setStep(prev => prev < 10 ? prev + 1 : prev)
    }, 300)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full max-w-md mx-auto" suppressHydrationWarning>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto"
        fill="none"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Desk */}
        {step >= 1 && (
          <path
            d="M50 200 L350 200 L350 220 L50 220 Z"
            style={{
              strokeDasharray: 600,
              strokeDashoffset: step >= 1 ? 0 : 600,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}
        {step >= 2 && (
          <path
            d="M80 220 L80 280 M320 220 L320 280"
            style={{
              strokeDasharray: 120,
              strokeDashoffset: step >= 2 ? 0 : 120,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}

        {/* Monitor */}
        {step >= 3 && (
          <path
            d="M150 120 L300 120 L300 180 L150 180 Z"
            style={{
              strokeDasharray: 420,
              strokeDashoffset: step >= 3 ? 0 : 420,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}
        {step >= 4 && (
          <path
            d="M160 130 L290 130 L290 170 L160 170 Z"
            style={{
              strokeDasharray: 360,
              strokeDashoffset: step >= 4 ? 0 : 360,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}
        {step >= 5 && (
          <path
            d="M220 180 L230 180 L235 200 L215 200 Z"
            style={{
              strokeDasharray: 60,
              strokeDashoffset: step >= 5 ? 0 : 60,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}

        {/* Keyboard */}
        {step >= 6 && (
          <path
            d="M120 190 L280 190 L280 200 L120 200 Z"
            style={{
              strokeDasharray: 180,
              strokeDashoffset: step >= 6 ? 0 : 180,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}

        {/* Person Head */}
        {step >= 7 && (
          <circle
            cx="100"
            cy="80"
            r="15"
            style={{
              strokeDasharray: 94,
              strokeDashoffset: step >= 7 ? 0 : 94,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}

        {/* Person Body */}
        {step >= 8 && (
          <path
            d="M100 95 L100 150"
            style={{
              strokeDasharray: 55,
              strokeDashoffset: step >= 8 ? 0 : 55,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}

        {/* Person Arms */}
        {step >= 9 && (
          <path
            d="M100 110 L130 130 L140 125 M100 110 L80 130"
            style={{
              strokeDasharray: 80,
              strokeDashoffset: step >= 9 ? 0 : 80,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}

        {/* Code on screen */}
        {step >= 10 && (
          <path
            d="M170 140 L200 140 M170 145 L220 145 M170 150 L190 150 M170 155 L210 155"
            stroke="#3b82f6"
            strokeWidth="1"
            style={{
              strokeDasharray: 120,
              strokeDashoffset: step >= 10 ? 0 : 120,
              transition: "stroke-dashoffset 0.5s ease"
            }}
          />
        )}

        {/* Pencil */}
        {step >= 1 && (
          <g
            style={{
              transform: `translate(${Math.min(step * 30, 300)}px, ${Math.max(100 - step * 10, 20)}px)`,
              transition: "transform 0.3s ease"
            }}
          >
            <path
              d="M0 0 L10 -10 L15 -5 L5 5 Z"
              fill="#fbbf24"
              stroke="#f59e0b"
              strokeWidth="1"
            />
            <path
              d="M10 -10 L20 -20"
              stroke="#374151"
              strokeWidth="2"
            />
          </g>
        )}
      </svg>
    </div>
  )
}