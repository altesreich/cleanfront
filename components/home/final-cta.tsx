"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-foreground text-background overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Experience A <span className="italic text-primary">Flawless</span> Clean Like Never
            Before
          </h2>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-10 h-16 text-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Book Your Cleaning
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
