import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InstagramButton } from "@/components/instagram-button"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceFeatures } from "@/components/services/service-features"
import { ServicesList } from "@/components/services/services-list"
import { ProductsList } from "@/components/services/products-list"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Services | Prestige Cleaning By Caro",
  description:
    "Explore our cleaning services - Residential and Commercial Cleaning. Professional housekeeping tailored to your needs.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServiceFeatures />
      <ServicesList />
      <ProductsList />
      <ServicesCTA />
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </main>
  )
}
