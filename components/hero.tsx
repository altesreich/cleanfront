"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
    alt: "Clean modern living room",
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    alt: "Sparkling clean bathroom",
  },
  {
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1600&q=80",
    alt: "Pristine kitchen",
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    alt: "Professional cleaning supplies",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section ref={ref} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(69,120,120,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Cleaning Services</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight text-balance">
              Immaculate spaces,{" "}
              <span className="text-primary italic">effortlessly</span>{" "}
              delivered
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Experience exceptional cleaning that leaves more than just a fresh scent — it leaves a lasting impression. Residential and commercial services tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-base group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-medium px-8 h-14 text-base bg-transparent">
                View Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Shield, title: "Fully Insured", subtitle: "Peace of mind" },
                { icon: Clock, title: "Flexible Scheduling", subtitle: "Your convenience" },
                { icon: Sparkles, title: "Eco-Friendly", subtitle: "Safe products" },
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className={`flex items-center gap-2 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Slider */}
          <div 
            className={`relative lg:h-[600px] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Slider */}
            <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden bg-secondary">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.alt}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Slider Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "w-8 bg-primary-foreground" 
                        : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div 
              className={`absolute -bottom-4 left-4 lg:left-8 bg-card border border-border rounded-2xl p-6 shadow-lg w-[280px] transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card" />
                  <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-card" />
                  <div className="w-10 h-10 rounded-full bg-primary/40 border-2 border-card" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-semibold text-foreground">2,500+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
