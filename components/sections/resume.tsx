'use client'

import { Download, FileText, ExternalLink } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function ResumeSection() {
  const handleDownloadResume = async () => {
    try {
      // Fetch the file
      const response = await fetch('/resume/PremBorde-Resume.pdf')
      const blob = await response.blob()
      
      // Create download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'PremBorde-Resume.pdf'
      link.style.display = 'none'
      
      // Trigger download
      document.body.appendChild(link)
      link.click()
      
      // Cleanup
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Fallback to direct link
      const link = document.createElement('a')
      link.href = '/resume/PremBorde-Resume.pdf'
      link.download = 'PremBorde-Resume.pdf'
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Prem Borde - Resume
                    </h3>
                    <p className="text-gray-400">
                      Computer Science Student & Software Engineer
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-2">Last Updated</p>
                  <p className="text-gray-300 font-medium">October 2024</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Quick Overview</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Computer Science Undergraduate at PCET NMIET</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>AI & Cloud Technologies Intern at Edunet Foundation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>3+ Major Projects in AI/ML & Web Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>5+ Professional Certifications</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'Python', 'React.js', 'FastAPI', 'OpenCV', 'AWS', 'MongoDB', 'Git'].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-gray-600 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume (PDF)</span>
                </button>
                <a
                  href="/resume/PremBorde-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="PremBorde-Resume.pdf"
                  className="flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Online</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
