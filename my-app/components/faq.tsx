"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What makes Samsung different from other technology companies?",
      answer:
        "Samsung is a global leader in technology innovation with over 50 years of experience. We offer end-to-end solutions from semiconductors and displays to smartphones and enterprise solutions. Our commitment to R&D, with over 80,000 researchers worldwide, ensures we stay at the forefront of technological advancement.",
    },
    {
      question: "How can Samsung help transform my business?",
      answer:
        "Samsung provides comprehensive digital transformation solutions including enterprise mobility, display technologies, memory and storage solutions, and IoT platforms. Our B2B solutions are designed to increase productivity, reduce costs, and drive innovation across industries like healthcare, education, retail, and manufacturing.",
    },
    {
      question: "What enterprise solutions does Samsung offer?",
      answer:
        "We offer a complete portfolio including Samsung Knox security platform, enterprise mobility management, digital signage solutions, memory and storage for data centers, 5G network infrastructure, and custom semiconductor solutions. Our enterprise team works closely with businesses to deliver tailored solutions.",
    },
    {
      question: "How does Samsung ensure data security for business customers?",
      answer:
        "Samsung Knox provides defense-grade security built into our devices from the hardware up. We offer multi-layered security including secure boot, real-time kernel protection, and containerization. Our solutions meet the highest industry standards and government certifications worldwide.",
    },
    {
      question: "What is Samsung's approach to sustainability?",
      answer:
        "We're committed to achieving net-zero carbon emissions by 2050. Our initiatives include using renewable energy, developing eco-friendly products, implementing circular economy principles, and investing in sustainable technologies. We've already achieved carbon neutrality in our global operations.",
    },
    {
      question: "How can I become a Samsung business partner?",
      answer:
        "Samsung offers various partnership programs including reseller partnerships, technology integration partnerships, and developer programs. Contact our business development team to discuss opportunities that align with your expertise and market focus. We provide training, support, and marketing resources to our partners.",
    },
    {
      question: "What support does Samsung provide for enterprise customers?",
      answer:
        "We offer 24/7 technical support, dedicated account management, on-site services, training programs, and comprehensive warranties. Our global service network ensures rapid response times and expert assistance wherever your business operates.",
    },
    {
      question: "How does Samsung invest in research and development?",
      answer:
        "Samsung invests over $20 billion annually in R&D across our global research centers. We focus on next-generation technologies including AI, 6G, quantum computing, biotechnology, and sustainable energy solutions. Our innovation drives the future of technology across all industries.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about Samsung's business solutions and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-6">Still have questions? Our team is here to help.</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  )
}
