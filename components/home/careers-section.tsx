"use client"

import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const jobs = [
   { title: "Housekeeper", location: "Dallas, TX" },
  { title: "Housekeeper", location: "Boston, Massachusetts" },
]

export function CareersSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Making Housekeeping a <span className="italic text-primary">Profession</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prestige Cleaning By Caro provides a work environment that fosters personal & professional growth. By
              empowering our employees with fulfilling careers and opportunities for progression, we
              ensure unrivaled dedication and quality work on every job.
            </p>
          </div>

          {/* Right - Job Listings */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {jobs.map((job, index) => (
              <Link
                key={`${job.title}-${job.location}`}
                href="#"
                className={`group block bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}

            {/* See All Jobs */}
    
          </div>
        </div>
      </div>
    </section>
  )
}
