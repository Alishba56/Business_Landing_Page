"use client"

import { Smartphone, Tv, Home, CheckCircle } from "lucide-react"
import { CustomCard, CustomCardHeader, CustomCardContent } from "./custom-card"
import { CustomButton } from "./custom-button"
import Image from "next/image"

interface ServicesProps {
  scrollToSection: (sectionId: string) => void
}

export function Services({ scrollToSection }: ServicesProps) {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Technology",
      description: "Revolutionary smartphones and tablets that redefine connectivity",
      features: ["Galaxy Smartphones", "Foldable Technology", "5G Innovation"],
      color: "blue",
      image: "/samsung-smartphones.png", // Added image property
    },
    {
      icon: Tv,
      title: "Display Solutions",
      description: "Cutting-edge displays for entertainment and professional use",
      features: ["QLED TVs", "Gaming Monitors", "Digital Signage"],
      color: "purple",
      image: "/samsung-displays.png", // Added image property
    },
    {
      icon: Home,
      title: "Smart Home",
      description: "Connected appliances that make your home smarter and more efficient",
      features: ["Smart Appliances", "IoT Integration", "Energy Efficiency"],
      color: "green",
      image: "/samsung-semiconductors.png", // Added image property
    },
  ]

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Innovation Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover Samsung&#8218;	s comprehensive range of cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CustomCard className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                    width={100}
                    height={100}
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center animate-pulse-subtle`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <CustomCardHeader>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CustomCardHeader>
                  <CustomCardContent>
                    <ul className="space-y-2 text-sm text-gray-600 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <CustomButton
                      variant="outline"
                      size="sm"
                      onClick={() => scrollToSection("contact")}
                      className="w-full"
                    >
                      Learn More
                    </CustomButton>
                  </CustomCardContent>
                </CustomCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
