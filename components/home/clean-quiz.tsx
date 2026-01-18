"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CleanQuiz() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Discover Your Perfect Clean.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every space is unique &ndash; that&apos;s why we customize our cleaning services to
              match your specific needs. Get a personalized quote to find out exactly what
              your space deserves.
            </p>
            <p className="text-xl font-semibold text-foreground">
              We'll even throw in 20% off your first booking.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get 20% Off
            </Button>
          </div>

          {/* Right - Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative space-y-6">
                {/* Quiz preview cards */}
                {[
                  { q: "How many bedrooms?", options: ["1-2", "3-4", "5+"] },
                  { q: "How often do you clean?", options: ["Weekly", "Bi-weekly", "Monthly"] },
                  { q: "Do you have pets?", options: ["Yes", "No"] },
                ].map((item, index) => (
                  <div
                    key={item.q}
                    className={`bg-card rounded-2xl p-4 shadow-sm border border-border transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${500 + index * 150}ms` }}
                  >
                    <p className="text-sm font-medium text-foreground mb-3">{item.q}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.options.map((opt, optIndex) => (
                        <button
                          key={opt}
                          className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
                            optIndex === 0
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
