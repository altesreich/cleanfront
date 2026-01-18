"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    id: "residential",
    title: "Residential Cleaning",
    description:
      "Comprehensive home cleaning including kitchen, bathrooms, dusting, vacuuming, and mopping with hotel-level attention to detail.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Professional office cleaning services with focus on workspaces, common areas, and maintaining a pristine business environment.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "moving",
    title: "Move-In/Move-Out Cleaning",
    description:
      "Thorough cleaning from ceiling to floor, including appliances, closets, cabinets, and all surfaces for seamless transitions.",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
  },
]

export function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }, [])

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex items-center justify-between mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground uppercase">
            Our <span className="italic text-primary">Services</span>
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Slider */}
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="w-full flex-shrink-0 px-2 md:w-1/2 lg:w-1/3">
                <Link
                  href={`/services#${service.id}`}
                  className={`group block bg-background rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-sans text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 uppercase">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
