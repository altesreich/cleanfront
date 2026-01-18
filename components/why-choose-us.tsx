"use client"

import { useEffect, useState } from "react"
import { Leaf, Heart, Shield, Award, Users, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use only environmentally safe, non-toxic cleaning products that are gentle on your home and the planet.",
  },
  {
    icon: Heart,
    title: "Pet & Family Safe",
    description: "Our cleaning solutions are hypoallergenic and completely safe for your loved ones, including your furry friends.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Rest easy knowing that our team is fully bonded and insured, protecting your home and belongings.",
  },
  {
    icon: Award,
    title: "Trained Professionals",
    description: "Every team member undergoes rigorous training to deliver consistent, exceptional results every time.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Get the same trusted cleaning team for each visit, building familiarity and trust with your home.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book at your convenience with easy online scheduling and flexible appointment times that work for you.",
  },
]

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 2500, suffix: "", label: "Happy Clients", display: "2.5k" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
]

function AnimatedCounter({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.5 })

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <p ref={ref} className="font-serif text-4xl font-semibold text-primary">
      {display && isVisible ? display : count}{suffix}
    </p>
  )
}

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Us</span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight text-balance">
                Cleaning with care and commitment
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                At Pristine Clean, we believe that exceptional cleaning goes beyond just removing dirt. It&apos;s about creating healthy, harmonious spaces where life can flourish.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our commitment to quality, sustainability, and customer satisfaction has made us the trusted choice for over 2,500 homes and businesses.
              </p>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} display={stat.display} />
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
