"use client"

import Image from "next/image"

export function Sustainability() {
  const initiatives = [
    {
      title: "Carbon Neutral by 2030",
      description: "Committed to achieving carbon neutrality across all operations",
      progress: 75,
      icon: "🌱",
    },
    {
      title: "Renewable Energy",
      description: "100% renewable energy in manufacturing facilities",
      progress: 85,
      icon: "⚡",
    },
    {
      title: "Circular Economy",
      description: "Sustainable product lifecycle and recycling programs",
      progress: 60,
      icon: "♻️",
    },
    {
      title: "Water Conservation",
      description: "Advanced water management and conservation systems",
      progress: 70,
      icon: "💧",
    },
  ]

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Sustainability & Responsibility</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Building a sustainable future through responsible innovation and environmental stewardship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{initiative.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{initiative.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{initiative.description}</p>
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{initiative.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${initiative.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-left">
            <Image
            width={500}
            height={100}
              src="/samsung-sustainability.png"
              alt="Samsung Sustainability Initiatives"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="animate-fade-in-right">
            <Image
            width={500}
            height={100}
              src="/samsung-global-office.png"
              alt="Samsung Global Office"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-gray-600">CO2 Reduction</div>
            </div>
            <div className="animate-fade-in-up animation-delay-500">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Renewable Energy</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Waste Recycled</div>
            </div>
            <div className="animate-fade-in-up animation-delay-700">
              <div className="text-3xl font-bold text-orange-600 mb-2">$5B</div>
              <div className="text-gray-600">Green Investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
