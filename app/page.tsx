import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmsButton } from "@/components/sms-button"
import { InstagramButton } from "@/components/instagram-button"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSlider } from "@/components/home/services-slider"
import { CleanQuiz } from "@/components/home/clean-quiz"
import { CleaningWithCare } from "@/components/home/cleaning-with-care"
import { GiftSection } from "@/components/home/gift-section"
import { StorySection } from "@/components/home/story-section"
import { CareersSection } from "@/components/home/careers-section"
import { QuizCTA } from "@/components/home/quiz-cta"
import { FinalCTA } from "@/components/home/final-cta"

export const metadata: Metadata = {
  title: "Prestige Cleaning By Caro | Professional House Cleaning Dallas TX",
  description:
    "Prestige Cleaning By Caro provides professional cleaning services in Dallas. Cheap cleaning, house cleaning Dallas, maid service Dallas, and home cleaning services Dallas. Residential & commercial cleaning with expert teams.",
  keywords: "Prestige Cleaning By Caro, cleaning in Dallas, cheap cleaning, cleaning services Dallas TX, cleaning service Dallas Texas, house cleaning Dallas, maid service Dallas, home cleaning services Dallas, housecleaning, residential cleaning Dallas, commercial cleaning Dallas",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSlider />
      <CleanQuiz />
      <CleaningWithCare />
      <GiftSection />
      <StorySection />
      <CareersSection />
      <QuizCTA />
      <FinalCTA />
      <Footer />
      <SmsButton />
      <InstagramButton />
    </main>
  )
}
