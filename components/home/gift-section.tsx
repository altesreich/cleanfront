"use client"

import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function GiftSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Gift card mockup */}
              <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-12 text-primary-foreground overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Decorative sparkles */}
                <div className="absolute top-6 right-6 w-12 h-12 opacity-20">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </div>
                <div className="absolute bottom-8 left-8 w-8 h-8 opacity-20">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Gift className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Gift Card</p>
                    <p className="font-serif text-3xl lg:text-4xl font-semibold">Vella Clean</p>
                  </div>
                  <div className="pt-8 border-t border-primary-foreground/20">
                    <p className="text-sm opacity-80">For someone special</p>
                    <p className="font-serif text-2xl mt-1">$150.00</p>
                  </div>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`space-y-6 order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              A Gift that <span className="italic text-primary">Sparkles</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Treat your loved ones to the joy of a pristine and refreshed home. A thoughtful
              present that shows you care, perfect for any occasion.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <Gift className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Gift a Clean
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
