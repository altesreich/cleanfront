"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ServicesHero() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-[1.1] tracking-tight">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
            Whether you need residential cleaning, office maintenance, or move-in/move-out services, our team delivers
            hotel-level detail every time.
          </p>
        </div>
      </div>
    </section>
  )
}
