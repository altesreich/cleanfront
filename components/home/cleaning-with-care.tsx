"use client"

import { Leaf, Heart, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  { icon: Leaf, label: "Environment Friendly" },
  { icon: Heart, label: "Pet Friendly" },
  { icon: ShieldCheck, label: "Non-Toxic" },
  { icon: Sparkles, label: "All Natural" },
  { icon: Heart, label: "Hypoallergenic" },
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
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Cleaning with <span className="italic">Care</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Care. For our customers, their loved ones, the experience we provide, and the
              housekeepers that provide it. Care is what makes it all happen.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 bg-transparent"
            >
              What&apos;s In Our Caddy
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
