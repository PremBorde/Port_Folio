'use client'

import { Award, ExternalLink } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    description: "Certified in AI foundations and Oracle Cloud Infrastructure services",
    year: "2025",
    featured: true
  },
  {
    title: "Transformer Models and BERT",
    issuer: "Udacity (with Google Cloud collaboration)",
    description: "Advanced course on transformer models and BERT architecture",
    year: "2024",
    featured: true
  },
  {
    title: "Introduction to IT and AWS Cloud",
    issuer: "AWS",
    description: "Fundamentals of IT and AWS cloud computing services",
    year: "2024",
    featured: false
  },
  {
    title: "Cloud Computing",
    issuer: "Acmegrade",
    description: "Comprehensive cloud computing concepts and practices",
    year: "2024",
    featured: false
  },
  {
    title: "TCS iON Career Edge",
    issuer: "TCS iON",
    description: "Career development and professional skills enhancement",
    year: "2023",
    featured: false
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications and courses demonstrating expertise in AI/ML, Cloud Computing, and IT fundamentals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  {cert.featured && (
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    {cert.year}
                  </span>
                  <a 
                    href="#"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">View</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
