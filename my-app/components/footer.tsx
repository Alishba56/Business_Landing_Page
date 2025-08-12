"use client"

import { Smartphone } from "lucide-react"

interface FooterProps {
  scrollToSection?: (sectionId: string) => void
}

export function Footer({ scrollToSection }: FooterProps) {
  const handleNavClick = (section: string) => {
    if (scrollToSection) {
      scrollToSection(section)
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="  items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Samsung</span>
          </div>

          <nav className="flex flex-wrap justify-center items-center space-x-6 mb-2 md:mb-0">
            {["services", "about", "testimonials", "faq", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium capitalize"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </div>

          <div className="text-center mt-5">
            <p className="text-gray-400 text-sm">© 2024 Samsung Electronics Co., Ltd.</p>
          </div>
    </footer>
  )
}
