"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 })

  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Clean Street", "Spotless City, SC 12345"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-CLEAN", "(555) 123-2468"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@vellaclean.com", "support@vellaclean.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8AM - 6PM", "Sat-Sun: 9AM - 4PM"],
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us, call us, or email us. We're always happy to hear from you and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                {item.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map placeholder - you can integrate Google Maps or similar here */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map would go here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Integrate Google Maps or your preferred mapping service
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}