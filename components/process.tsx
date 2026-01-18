"use client"

import { CalendarCheck, ClipboardList, Sparkles, ThumbsUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book Your Service",
    description: "Choose your preferred service and schedule a time that works for you through our simple online booking system.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Customized Plan",
    description: "We create a tailored cleaning plan based on your specific needs, preferences, and the unique characteristics of your space.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Expert Cleaning",
    description: "Our trained professionals arrive on time with eco-friendly supplies and meticulously clean every corner of your space.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We follow up to ensure you're completely satisfied. If anything isn't perfect, we'll make it right — guaranteed.",
  },
]

export function Process() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="process" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
            A seamless experience from start to finish
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We&apos;ve simplified the process so you can focus on what matters most while we take care of the rest.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div 
                  className={`hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-border transition-all duration-1000 origin-left ${
                    isVisible ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                />
              )}
              
              <div className="relative bg-background rounded-2xl p-8 border border-border h-full hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Step Number */}
                <span 
                  className={`absolute -top-4 left-8 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-2">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
