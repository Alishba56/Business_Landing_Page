"use client"

import { ArrowRight, Play, CheckCircle } from "lucide-react"
import { CustomButton } from "./custom-button"
import Image from "next/image"

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full opacity-20 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 animate-bounce-subtle">
              <span className="text-sm font-medium">🚀 Trusted by 50M+ users worldwide</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              Innovation That
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text block animate-gradient">
                Inspires Tomorrow
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up-delayed">
              Samsung leads the world in technology innovation. From smartphones to smart homes, we create products that
              enhance your life and connect your world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-fade-in-up-delayed-2">
              <CustomButton
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group w-full sm:w-auto flex items-center justify-center"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CustomButton>
              <CustomButton
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Innovation
              </CustomButton>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 text-sm text-gray-500 animate-fade-in-up-delayed-3">
              {["Global Technology Leader", "50+ Years of Innovation", "Sustainable Future"].map((text, index) => (
                <div key={index} className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="whitespace-nowrap">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative">
              <Image
                src="/samsung-innovation-lab.png"
                alt="Samsung Innovation Lab"
                className="w-full h-[300px] rounded-2xl shadow-2xl"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
