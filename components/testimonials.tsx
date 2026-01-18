"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    content: "Pristine Clean has completely transformed my home. Their attention to detail is remarkable, and I love that they use eco-friendly products. It's like coming home to a spa every time!",
    rating: 5,
    image: "SM",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "As a business owner, first impressions matter. Pristine Clean keeps our office spotless and professional. Our clients always comment on how clean and welcoming our space feels.",
    rating: 5,
    image: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Working Mom",
    content: "Between work and kids, I never have time to clean properly. Pristine Clean gives me my weekends back while keeping our home healthy and safe for my family. They're absolute lifesavers!",
    rating: 5,
    image: "ER",
  },
  {
    name: "David Thompson",
    role: "Property Manager",
    content: "Managing multiple properties requires reliable cleaning services. Pristine Clean has been our go-to for over 3 years now. Consistent quality, professional staff, and great communication.",
    rating: 5,
    image: "DT",
  },
  {
    name: "Jessica Park",
    role: "Interior Designer",
    content: "I recommend Pristine Clean to all my clients. They understand the importance of maintaining beautiful spaces. Their deep cleaning service is exceptional and reasonably priced.",
    rating: 5,
    image: "JP",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - slidesToShow)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section ref={ref} id="testimonials" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            What our clients say
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it — hear from the families and businesses who trust us with their spaces.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:border-primary/30 transition-all shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:border-primary/30 transition-all shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden mx-4 lg:mx-8">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div 
                    className={`relative bg-card rounded-3xl p-8 border border-border h-full transition-all duration-500 hover:border-primary/30 hover:shadow-lg ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-4 right-8">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Quote className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground leading-relaxed mb-8 line-clamp-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-serif text-lg font-semibold text-primary">
                          {testimonial.image}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.9 out of 5 based on 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
