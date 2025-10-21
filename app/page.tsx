import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  )
}
