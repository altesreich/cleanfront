"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function StorySection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              What makes a Vella clean <span className="italic text-primary">special?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With diligent attention to detail and a meticulous personal touch, you&apos;ve never
              experienced a clean quite like Vella. Learn more about what makes the Vella way
              different and the woman who inspired it all.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group"
            >
              Read Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right - Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
                alt="Vella team at work"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

              {/* Floating badge */}
              <div
                className={`absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-6 transition-all duration-700 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <p className="font-serif text-lg font-semibold text-foreground">
                  &ldquo;Completely, thoroughly, and never cutting corners.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-2">The Vella Way</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
