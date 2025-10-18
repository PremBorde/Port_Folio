'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "AthleteConnect – AI-Powered Sports Networking Platform",
    description: "Web platform for athletes to showcase skills, track performance, and connect with coaches and peers—like LinkedIn for sports. Features AI-powered pose detection for performance tracking, adaptive benchmarking, and cheat detection.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Python (FastAPI)", "OpenCV", "MediaPipe BlazePose", "Firebase", "MongoDB"],
    github: "https://github.com/PremBorde/SIH-2K25",
    live: "#",
    featured: true
  },
  {
    title: "PathFinderEdu – Career Navigator Web App",
    description: "Full-stack platform with 500+ career profiles and AI-powered assessment tools. Features RESTful APIs with JWT authentication and integrated FastAPI chatbot for personalized career recommendations.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    technologies: ["React.js", "Node.js", "MongoDB", "FastAPI", "Python"],
    github: "https://github.com/PremBorde/PathFinderEdu",
    live: "#",
    featured: true
  },
  {
    title: "AI-Powered Document Analysis System (RAG-based)",
    description: "Intelligent document processing system for PDF, DOCX, and EML formats using RAG. Features FAISS-based semantic search with caching for optimized query performance and Google Gemini API integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["FastAPI", "Python", "FAISS", "Google Gemini API"],
    github: "https://github.com/PremBorde/Raju-insurance",
    live: "#",
    featured: false
  },
  {
    title: "AI-Powered Study Buddy",
    description: "Intelligent educational assistant that explains complex topics in simple terms, summarizes study notes for quick revision, and generates quizzes and flashcards on demand using AI. Currently in development at Edunet Foundation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: ["AI/ML", "Cloud Platforms", "Educational Technology"],
    github: "https://github.com/PremBorde/DBMS--Ai-Course-Recommender",
    live: "#",
    featured: false
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900 projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of Software Engineering, Web Development, and AI/ML projects showcasing technical expertise and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-gray-800 border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer relative ${project.title.includes('PathFinderEdu') ? 'pathfinder-card' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-48 object-cover transition-transform duration-300 ${project.title.includes('PathFinderEdu') ? 'pathfinder-img' : 'group-hover:scale-110'}`}
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 relative z-50">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 cursor-pointer relative z-50"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 cursor-pointer relative z-50"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
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


