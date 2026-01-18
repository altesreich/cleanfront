import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AboutHero } from "@/components/about/about-hero"
import { Timeline } from "@/components/about/timeline"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About | Vella Clean",
  description:
    "Learn about Vella Clean - the modern solution for a spotless home. Discover our story, values, and commitment to exceptional cleaning.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <Timeline />
      <AboutCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
