"use client"

import { Leaf, Heart, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  { icon: Sparkles, label: "Team of 2 expertly trained housekeepers" },
  { icon: ShieldCheck, label: "No arrival windows. No waiting around." },
  { icon: Heart, label: "Prioritizing the health of our customers and our staff." },
  { icon: Leaf, label: "Housekeeping powered by state-of-the-art equipment." },
]

export function CleaningWithCare() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary-foreground">Why Choose Us</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-foreground tracking-wide">
                Why Choose Prestige Cleaning <span className="text-primary-foreground relative italic">
                  By Caro
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-foreground/50 to-secondary/50 rounded-full"></div>
                </span>
              </h2>

              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                We deliver premium cleaning services with precision and care. Our professional team
                ensures every detail is perfect, every time.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 bg-transparent/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary-foreground/20"
            >
              Book Your Cleaning
            </Button>
          </div>

          {/* Right - Features */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className={`group flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-foreground/10 transition-all duration-500 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:shadow-primary-foreground/20 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                  <span className="text-base font-semibold text-primary-foreground leading-relaxed">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
