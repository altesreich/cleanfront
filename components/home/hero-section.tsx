"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const heroImages = [
  "/images/web/web-1.jpg",
  "/images/web/web-2.jpg",
  "/images/web/web-3.jpg",
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
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 text-primary/20 text-6xl animate-float">✦</div>
        <div className="absolute top-64 right-32 text-secondary/30 text-4xl animate-float-delayed">✦</div>
        <div className="absolute bottom-48 left-32 text-primary/15 text-5xl animate-float">✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary">Premium Cleaning Services</span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Residential & Commercial</span><br />
                <span className="text-foreground/90 relative">
                  Cleaning Excellence
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"></div>
                </span>
              </h1>
            </div>

            <p
              className={`text-lg text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Experience the pinnacle of cleaning perfection. Our meticulous attention to detail
              transforms spaces into havens of pristine beauty and lasting freshness.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-14 text-base transition-all duration-500 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/25 bg-background/80 backdrop-blur-sm"
              >
                Learn More
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary font-semibold px-8 h-14 text-base transition-all duration-500 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-primary/30 group relative overflow-hidden"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Main large image */}
              <div className="col-span-2 relative h-[320px] rounded-3xl overflow-hidden group shadow-2xl shadow-primary/10">
                {heroImages.map((img, index) => (
                  <img
                    key={img}
                    src={img || "/placeholder.svg"}
                    alt="Professional cleaning team at work in residential home"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <p className="text-sm font-medium text-foreground">Professional Cleaning Excellence</p>
                    <p className="text-xs text-muted-foreground">Meticulous attention to every detail</p>
                  </div>
                </div>
              </div>

              {/* Bottom images */}
              <div className="relative h-[220px] rounded-2xl overflow-hidden group shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-500">
                <img
                  src="/images/web/web-4.jpg"
                  alt="Professional housekeeper using vacuum cleaner in office space"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative h-[220px] rounded-2xl overflow-hidden group shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-500">
                <img
                  src="/images/web/web-5.jpg"
                  alt="Detailed bathroom cleaning by professional cleaning team"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
