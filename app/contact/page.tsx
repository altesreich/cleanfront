import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmsButton } from "@/components/sms-button"
import { InstagramButton } from "@/components/instagram-button"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactCTA } from "@/components/contact/contact-cta"

export const metadata: Metadata = {
  title: "Contact Us | Prestige Cleaning By Caro",
  description:
    "Get in touch with Prestige Cleaning By Caro for professional cleaning services. Contact us today for a spotless home.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactCTA />
      <Footer />
      <SmsButton />
      <InstagramButton />
    </main>
  )
}