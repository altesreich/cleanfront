"use client"

import { useState, useEffect } from "react"
import { MessageSquare } from "lucide-react"

export function SmsButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000)
    const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 12000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltipTimer)
    }
  }, [])

  const phoneNumber = "+15551232468"
  const defaultMessage = "Hello! I'm interested in your cleaning services."
  
  const handleSmsClick = () => {
    // Create SMS link with message as body
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(defaultMessage)}`
    window.location.href = smsUrl
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          showTooltip && !isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-card border border-border rounded-lg shadow-lg px-3 py-2 whitespace-nowrap text-sm text-muted-foreground">
          Send us a message
        </div>
      </div>

      {/* Expanded Card on Hover */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-card border border-border rounded-2xl shadow-xl p-4 w-[280px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Prestige Cleaning <span className="italic">By <span className="not-italic">C</span>aro</span></p>
              <p className="text-xs text-muted-foreground">Text us anytime</p>
            </div>
          </div>
          <div className="bg-secondary rounded-xl p-3 mb-3">
            <p className="text-sm text-foreground">
              Send us a text message and we'll get back to you as soon as possible!
            </p>
          </div>
          <button
            onClick={handleSmsClick}
            className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-5 h-5" />
            Send SMS
          </button>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={handleSmsClick}
        onMouseEnter={() => {
          setIsHovered(true)
          setShowTooltip(false)
        }}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Send us an SMS"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />

        {/* Icon */}
        <MessageSquare className="w-8 h-8 text-white relative z-10" />
      </button>
    </div>
  )
}
