"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactCTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Ready for the clean of your dreams?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Get a personalized quote to find out exactly what your space needs. We'll even throw in
            20% off your first booking.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Get a Quote & 20% Off
          </Button>
        </div>
      </div>
    </section>
  )
}