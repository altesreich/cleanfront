"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ServicesHero() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/web/web-13.jpg"
          alt="Professional cleaning services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight uppercase">
            Our Services
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you need residential cleaning, office maintenance, or specialized services, our team delivers
            hotel-level detail every time.
          </p>
        </div>
      </div>
    </section>
  )
}
