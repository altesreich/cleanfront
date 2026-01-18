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
    <section ref={ref} className="py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight uppercase">
              Why Choose Prestige Cleaning <span className="italic">By <span className="not-italic">C</span>aro</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              We deliver premium cleaning services with precision and care. Our professional team
              ensures every detail is perfect, every time.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 bg-transparent"
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
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className={`group flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-5 py-3 border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <feature.icon className="w-5 h-5 text-primary-foreground group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-medium text-primary-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
