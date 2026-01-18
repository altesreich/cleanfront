"use client"

import { Home, Building2, Truck, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Transform your home into a sanctuary. We handle everything from routine maintenance to deep cleaning, ensuring every corner sparkles.",
    features: ["Kitchen & Bathroom Deep Clean", "Dusting & Vacuuming", "Bed Making & Tidying", "Floor Mopping"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "A thorough, top-to-bottom cleaning that reaches every hidden corner. Perfect for spring cleaning or preparing for special occasions.",
    features: ["High Dusting & Baseboards", "Inside Appliances", "Under Furniture", "Window Tracks & Blinds"],
  },
  {
    icon: Truck,
    title: "Move In/Out Cleaning",
    description: "Start fresh in your new space or leave your old one spotless. We ensure every surface is pristine for the next chapter.",
    features: ["Ceiling to Floor Cleaning", "Cabinet & Drawer Interiors", "Appliance Deep Clean", "Wall Spot Cleaning"],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Create a professional environment that impresses clients and motivates employees. Customized schedules to fit your business needs.",
    features: ["Office & Workspace Cleaning", "Reception Areas", "Restroom Sanitization", "Common Area Maintenance"],
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="services" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            Discover your perfect clean
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Cleaning isn&apos;t one size fits all — that&apos;s why we offer customized solutions tailored to your unique needs and lifestyle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-background rounded-3xl p-8 lg:p-10 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className={`flex items-center gap-3 text-sm text-foreground transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${400 + index * 150 + featureIndex * 50}ms` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-primary/10 p-0 h-auto font-medium group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground mb-4">Not sure which service is right for you?</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 group">
            Get a Custom Quote
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
