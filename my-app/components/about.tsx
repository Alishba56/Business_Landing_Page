"use client"

import { Award, Users, Globe } from "lucide-react"
import Image from "next/image"

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Industry Leader",
      description: "World's #1 smartphone manufacturer for over a decade",
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Serving customers in 190+ countries worldwide",
    },
    {
      icon: Globe,
      title: "Innovation Hub",
      description: "40+ R&D centers driving technological advancement",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Samsung?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 50 years, Samsung has been at the forefront of technological innovation. We don't just create
              products; we craft experiences that inspire and connect people worldwide.
            </p>

            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <Image
                src="/business-team-collaboration.png"
                alt="Samsung innovation team"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
                width={500} // use actual dimensions for better optimization
                height={500}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 animate-bounce-subtle">
              <div className="text-2xl font-bold text-blue-600">50M+</div>
              <div className="text-sm text-gray-600">Daily Users</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-xl shadow-xl z-20 animate-pulse-subtle">
              <div className="text-lg font-bold text-white">Innovation</div>
              <div className="text-sm text-blue-100">Never Stops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
