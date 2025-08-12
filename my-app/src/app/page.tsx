"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Header } from "../../components/header"
import { Hero } from "../../components/hero"
import { Services } from "../../components/services"
import { About } from "../../components/about"
import { Innovation } from "../../components/innovation"
import { EnterpriseSolutions } from "../../components/enterprise-solutions"
import { GlobalPresence } from "../../components/global-presence"
import { Sustainability } from "../../components/sustainability"
import { Testimonials } from "../../components/testimonials"
import { Contact } from "../../components/contact"
import { Footer } from "../../components/footer"
import { FAQ } from "../../components/faq"

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services scrollToSection={scrollToSection} />
      <About />
      <Innovation />
      <EnterpriseSolutions />
      <GlobalPresence />
      <Sustainability />
      <Testimonials />
      <FAQ />
      <Contact scrollToSection={scrollToSection} />
      <Footer />

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 animate-bounce-subtle"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
