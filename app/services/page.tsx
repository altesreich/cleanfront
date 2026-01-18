import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceFeatures } from "@/components/services/service-features"
import { ServicesList } from "@/components/services/services-list"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Services | Vella Clean",
  description:
    "Explore our cleaning services - Basic Clean, Deep Clean, Moving Clean, and Construction Clean. Professional housekeeping tailored to your needs.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServiceFeatures />
      <ServicesList />
      <ServicesCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
