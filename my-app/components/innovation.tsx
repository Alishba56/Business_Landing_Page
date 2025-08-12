"use client"

import Image from "next/image"
import { useState } from "react"

export function Innovation() {
  const [activeTab, setActiveTab] = useState(0)

  const innovations = [
    {
      title: "AI & Machine Learning",
      description: "Revolutionary AI solutions powering the future of technology",
      features: ["Neural Processing Units", "Smart Automation", "Predictive Analytics", "Computer Vision"],
    },
    {
      title: "5G Technology",
      description: "Next-generation connectivity solutions for global networks",
      features: ["Ultra-Low Latency", "Massive IoT", "Enhanced Mobile Broadband", "Network Slicing"],
    },
    {
      title: "Semiconductor Innovation",
      description: "Advanced chip technology driving digital transformation",
      features: ["3nm Process Technology", "Memory Solutions", "System-on-Chip", "Power Efficiency"],
    },
  ]

  return (
    <section id="innovation" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Innovation & Research</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Leading the future through cutting-edge research and development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
              {innovations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === index ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Tab {index + 1}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{innovations[activeTab].title}</h3>
              <p className="text-gray-600 mb-6">{innovations[activeTab].description}</p>
              <div className="grid grid-cols-2 gap-4">
                {innovations[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right  space-y-6">

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">R&D Investment</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Annual R&D Budget</span>
                  <span className="text-2xl font-bold">$20B+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Research Centers</span>
                  <span className="text-2xl font-bold">42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Patents Filed</span>
                  <span className="text-2xl font-bold">75K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Research Scientists</span>
                  <span className="text-2xl font-bold">15K+</span>
                </div>
              </div>
          </div>
            </div>
        </div>
               
      </div>
    </section>
  )
}
