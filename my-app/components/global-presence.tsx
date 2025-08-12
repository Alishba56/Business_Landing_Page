"use client"

export function GlobalPresence() {
  const regions = [
    {
      name: "Asia Pacific",
      countries: 25,
      employees: "180K+",
      facilities: "85+",
    },
    {
      name: "Americas",
      countries: 15,
      employees: "45K+",
      facilities: "25+",
    },
    {
      name: "Europe & Africa",
      countries: 35,
      employees: "35K+",
      facilities: "30+",
    },
  ]

  return (
    <section id="global" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Global Presence</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Serving customers worldwide with local expertise and global innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{region.name}</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-white">{region.countries}</div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{region.employees}</div>
                  <div className="text-gray-400">Employees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{region.facilities}</div>
                  <div className="text-gray-400">Facilities</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-4xl font-bold text-blue-400 mb-2">75+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="animate-fade-in-up animation-delay-500">
              <div className="text-4xl font-bold text-blue-400 mb-2">260K+</div>
              <div className="text-gray-300">Employees</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-4xl font-bold text-blue-400 mb-2">140+</div>
              <div className="text-gray-300">Facilities</div>
            </div>
            <div className="animate-fade-in-up animation-delay-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">$240B+</div>
              <div className="text-gray-300">Annual Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
