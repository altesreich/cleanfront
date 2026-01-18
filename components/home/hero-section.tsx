"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const heroImages = [
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight">
              <span className="italic text-primary">Custom</span> housekeeping on demand.
              <br />
              That&apos;s the <span className="italic text-primary">Vella</span> way.
            </h1>

            <p
              className={`text-lg text-muted-foreground leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Vella is an exceptional cleaning experience that leaves more than just a fresh scent
              &ndash; it leaves a lasting impression.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 bg-transparent"
              >
                Log In
              </Button>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 group relative overflow-hidden"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-foreground/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative h-[300px] rounded-3xl overflow-hidden group">
                {heroImages.map((img, index) => (
                  <img
                    key={img}
                    src={img || "/placeholder.svg"}
                    alt="Clean home"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Bottom images */}
              <div className="relative h-[200px] rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Vacuum cleaning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative h-[200px] rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80"
                  alt="Bathroom cleaning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentImage ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
