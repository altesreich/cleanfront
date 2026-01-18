import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSlider } from "@/components/home/services-slider"
import { CleanQuiz } from "@/components/home/clean-quiz"
import { CleaningWithCare } from "@/components/home/cleaning-with-care"
import { GiftSection } from "@/components/home/gift-section"
import { StorySection } from "@/components/home/story-section"
import { CareersSection } from "@/components/home/careers-section"
import { QuizCTA } from "@/components/home/quiz-cta"
import { FinalCTA } from "@/components/home/final-cta"

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
      <WhatsAppButton />
    </main>
  )
}
