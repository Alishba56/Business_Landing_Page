"use client"

export function EnterpriseSolutions() {
  const solutions = [
    {
      title: "Smart Manufacturing",
      description: "AI-powered manufacturing solutions for Industry 4.0",
      features: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Supply Chain Optimization"],
      icon: "🏭",
    },
    {
      title: "Digital Workplace",
      description: "Complete digital transformation solutions for modern enterprises",
      features: ["Cloud Migration", "Collaboration Tools", "Security Solutions", "Mobile Workforce"],
      icon: "💼",
    },
    {
      title: "Smart Cities",
      description: "Comprehensive smart city infrastructure and services",
      features: ["Traffic Management", "Energy Efficiency", "Public Safety", "Citizen Services"],
      icon: "🏙️",
    },
    {
      title: "Healthcare Innovation",
      description: "Advanced healthcare technology and digital health solutions",
      features: ["Medical Imaging", "Telemedicine", "Health Analytics", "Patient Monitoring"],
      icon: "🏥",
    },
  ]

  return (
    <section id="enterprise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Enterprise Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Comprehensive technology solutions designed for enterprise-scale challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Enterprise Solutions
          </button>
        </div>
      </div>
    </section>
  )
}
