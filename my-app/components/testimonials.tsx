"use client"

import { Star } from "lucide-react"
import { CustomCard, CustomCardContent } from "./custom-card"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "Samsung's Galaxy series has revolutionized how we work. The productivity features are unmatched!",
      author: "Sarah Johnson",
      role: "Tech Executive",
      image: "/professional-woman-ceo.png",
    },
    {
      rating: 5,
      text: "The display quality on Samsung TVs is absolutely stunning. Movie nights have never been better!",
      author: "Michael Chen",
      role: "Content Creator",
      image: "/placeholder-xtiac.png",
    },
    {
      rating: 5,
      text: "Samsung's smart home ecosystem seamlessly integrates all our devices. It's the future of living.",
      author: "Emily Rodriguez",
      role: "Smart Home Enthusiast",
      image: "/professional-marketing-director.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join millions who trust Samsung to power their digital lives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CustomCard>
                <CustomCardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-twinkle"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      
                      className="w-10 h-10 rounded-full border-2 border-blue-100"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CustomCardContent>
              </CustomCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
