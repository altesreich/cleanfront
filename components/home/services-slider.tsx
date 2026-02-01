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
    image: "/images/web/web-6.jpg",
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Professional office cleaning services with focus on workspaces, common areas, and maintaining a pristine business environment.",
    image: "/images/web/web-7.jpg",
  },
  {
    id: "moving",
    title: "Move-In/Move-Out Cleaning",
    description:
      "Thorough cleaning from ceiling to floor, including appliances, closets, cabinets, and all surfaces for seamless transitions.",
    image: "/images/web/web-8.jpg",
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
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-card via-card to-background/50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`flex items-center justify-between mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-primary">Professional Services</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-wide">
              Our <span className="text-primary italic relative">
                Premium Services
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-md">
              Discover our comprehensive range of professional cleaning services designed for perfection.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-primary/20"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-primary/20"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6" />
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
                  <div className="p-8">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                      {service.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <span className="text-sm font-semibold">Learn more</span>
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
