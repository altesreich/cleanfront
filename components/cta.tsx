"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight text-balance">
              Ready for the clean of your dreams?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Get started today with a free, no-obligation quote. Experience the Pristine difference and discover why thousands of clients trust us with their spaces.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium px-8 h-14 text-base group">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 h-14 text-base bg-transparent">
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div 
            className={`lg:justify-self-end transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div 
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Call us anytime</p>
                    <a href="tel:+1234567890" className="text-xl font-semibold text-primary-foreground hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div 
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Email us at</p>
                    <a href="mailto:hello@pristineclean.com" className="text-xl font-semibold text-primary-foreground hover:underline">
                      hello@pristineclean.com
                    </a>
                  </div>
                </div>
              </div>

              <div 
                className={`mt-8 pt-6 border-t border-primary-foreground/20 transition-all duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-sm text-primary-foreground/70">
                  Available Monday - Saturday, 8am - 6pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
