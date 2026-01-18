"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Enhanced Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-foreground/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-primary-foreground/20 text-4xl animate-float">✦</div>
        <div className="absolute bottom-32 right-32 text-primary-foreground/15 text-5xl animate-float-delayed">✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary-foreground">Premium Service</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-wide text-balance leading-tight">
                Ready for the <span className="text-primary-foreground relative">
                  Clean of Your Dreams
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-foreground/50 to-secondary/50 rounded-full"></div>
                </span>?
              </h2>

              <p className="text-base text-primary-foreground/80 leading-relaxed max-w-xl">
                Get started today with a free, no-obligation quote. Experience the Prestige Cleaning By Caro difference and discover why thousands of clients trust us with their spaces.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 h-14 text-base group shadow-xl hover:shadow-2xl hover:shadow-primary-foreground/20 transition-all duration-300 hover:scale-105 active:scale-95">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 h-14 text-base bg-transparent/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary-foreground/10 transition-all duration-300 hover:scale-105 active:scale-95">
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
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20 shadow-2xl shadow-primary-foreground/10">
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-8">
                <div 
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 font-medium">Call us anytime</p>
                    <a href="tel:+1234567890" className="text-xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200">
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
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 font-medium">Email us at</p>
                    <a href="mailto:hello@prestigecleaningbycaro.com" className="text-xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200">
                      hello@prestigecleaningbycaro.com
                    </a>
                  </div>
                </div>
              </div>

              <div 
                className={`mt-8 pt-6 border-t border-primary-foreground/30 transition-all duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-sm text-primary-foreground/70 font-medium">
                  Available Monday - Saturday, 8am - 6pm
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-primary-foreground/60">Currently accepting new clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
