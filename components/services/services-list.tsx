"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    id: "Basic Cleaning",
    title: "Basic Cleaning",
    description:
      "Transform your home with our comprehensive residential cleaning service. We provide meticulous attention to every detail, ensuring your living space is spotless and welcoming.",
    features: [
      "Complete kitchen and bathroom deep clean",
      "Thorough dusting of all surfaces",
      "Professional vacuuming and mopping",
      "Bed making and general tidying",
      "Hotel-level attention to detail",
    ],
    image:
      "/images/web/web-6.jpg",
  },
  {
    id: "Deep Cleaning",
    title: "Deep Cleaning",
    description:
      "Maintain a professional and hygienic workspace with our commercial cleaning services. Perfect for offices, retail spaces, and business environments that demand excellence.",
    features: [
      "Office and workspace sanitization",
      "Common area maintenance",
      "Restroom deep cleaning",
      "Floor care and polishing",
      "Regular maintenance scheduling",
    ],
    image:
      "/images/web/web-7.jpg",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      id={service.id}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 ${
        index > 0 ? "border-t border-border" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative ${isEven ? "" : "lg:order-2"} transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "-translate-x-10" : "translate-x-10"}`
        }`}
      >
        <div className="relative rounded-3xl overflow-hidden group">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content */}
      <div
        className={`space-y-6 ${isEven ? "lg:order-2" : ""} transition-all duration-1000 delay-200 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
        }`}
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
          {service.title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

        {/* Features List */}
        <ul className="space-y-3">
          {service.features.map((feature, featureIndex) => (
            <li
              key={feature}
              className={`flex items-center gap-3 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${400 + featureIndex * 100}ms` }}
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-base transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          Book {service.title}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  )
}

export function ServicesList() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
