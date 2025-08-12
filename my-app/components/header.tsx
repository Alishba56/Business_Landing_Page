"use client"

import { useState } from "react"
import { Menu, X, Smartphone } from "lucide-react"
import { CustomButton } from "./custom-button"

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

export function Header({ scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between min-h-[72px]">
        <div className="flex items-center space-x-3 animate-fade-in">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Samsung
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["services", "about", "testimonials", "faq", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium capitalize hover:scale-105 focus:outline-none focus:text-blue-600 py-2"
            >
              {section === "faq" ? "FAQ" : section}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 min-w-fit">
          <CustomButton
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex items-center justify-center"
          >
            Get Started
          </CustomButton>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300 flex items-center justify-center"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-down">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {["services", "about", "testimonials", "faq", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section)
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-3 font-medium capitalize border-b border-gray-100 last:border-b-0"
              >
                {section === "faq" ? "FAQ" : section}
              </button>
            ))}
            <div className="pt-4">
              <CustomButton
                onClick={() => scrollToSection("contact")}
                className="w-full flex items-center justify-center"
              >
                Get Started
              </CustomButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
