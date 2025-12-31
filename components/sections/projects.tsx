'use client'

import { ExternalLink, Github, Code2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "AI Document Analysis System",
    subtitle: "RAG-based Question Answering",
    description: "A Retrieval-Augmented Generation (RAG) system that answers natural-language questions over large PDF and DOCX documents while minimizing hallucinations. Documents are split into semantic chunks, converted into embeddings, and indexed using FAISS for efficient retrieval.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["FastAPI", "FAISS", "Gemini API", "Python"],
    github: "https://github.com/PremBorde/Raju-insurance",
    live: "#",
    featured: true,
    color: "from-emerald-500/20 to-teal-500/20",
    learnings: "How RAG improves accuracy, importance of chunking and retrieval ranking, designing AI systems that prioritize reliability"
  },
  {
    title: "ResumeAI",
    subtitle: "AI Resume & Job Matching Platform",
    description: "Helps job seekers understand how well their resume matches job descriptions using semantic embeddings. Performs ATS-style auditing, identifies skill gaps, and generates resume-grounded cover letters using cosine similarity and rule-based checks.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    technologies: ["Python", "FastAPI", "FAISS", "Gemini API"],
    github: "https://github.com/PremBorde/ResumeAI",
    live: "#",
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20",
    learnings: "Why embeddings beat keyword matching, combining rule-based logic with ML, building explainable AI"
  },
  {
    title: "JobFlow",
    subtitle: "Autonomous Job Application Agent",
    description: "An AI-powered automation agent that streamlines job applications from discovery to tracking. Scrapes jobs from multiple platforms, matches them to resumes using Sentence Transformers, generates personalized emails, and tracks status via a Kanban dashboard.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    technologies: ["FastAPI", "React", "Playwright", "Sentence Transformers", "Gemini API"],
    github: "https://github.com/PremBorde/JobFlow",
    live: "#",
    featured: true,
    color: "from-purple-500/20 to-pink-500/20",
    learnings: "Designing AI agents with safeguards, integrating ML into end-to-end workflows, handling real-time data and automation"
  },
  {
    title: "AthleteConnect",
    subtitle: "AI Sports Networking Platform",
    description: "A computer vision–based platform that helps athletes analyze movement and connect with coaches. Uses MediaPipe BlazePose to track posture and movements, provides visual feedback to improve form, and enables performance sharing and progression tracking.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    technologies: ["Next.js", "FastAPI", "OpenCV", "MediaPipe BlazePose"],
    github: "https://github.com/PremBorde/SIH-2K25",
    live: "#",
    featured: false,
    color: "from-orange-500/20 to-rose-500/20",
    learnings: "Applying computer vision to real workflows, converting pose data into insights, balancing accuracy with performance"
  },
  {
    title: "DeFi Risk Intelligence Platform",
    subtitle: "Blockchain Risk Analysis System",
    description: "An intelligent platform for analyzing and monitoring risks in decentralized finance (DeFi) protocols. Provides real-time risk assessment, protocol health monitoring, and security analysis for DeFi investments.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    technologies: ["Python", "FastAPI", "Web3", "Blockchain"],
    github: "https://github.com/PremBorde/DeFi-Risk-Intelligence-Platform",
    live: "#",
    featured: false,
    color: "from-yellow-500/20 to-amber-500/20",
    learnings: "Blockchain data analysis, DeFi protocol security, real-time risk monitoring systems"
  },
  {
    title: "PathFinderEdu",
    subtitle: "AI Career Navigator",
    description: "Full-stack platform with 500+ career profiles and AI-powered assessment tools. Features RESTful APIs with JWT authentication and integrated FastAPI chatbot for personalized career recommendations based on user skills and interests.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    technologies: ["React.js", "Node.js", "MongoDB", "FastAPI", "Python"],
    github: "https://github.com/PremBorde/PathFinderEdu",
    live: "#",
    featured: false,
    color: "from-indigo-500/20 to-violet-500/20",
    learnings: "Building comprehensive career platforms, integrating AI recommendations, full-stack development with authentication"
  },
  {
    title: "AI Study Buddy",
    subtitle: "Intelligent Educational Assistant",
    description: "An intelligent educational assistant that explains complex topics in simple terms, summarizes study notes for quick revision, and generates quizzes and flashcards on demand using AI. Built for the Edunet Foundation initiative.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    technologies: ["Python", "FastAPI", "Gemini API", "AI/ML"],
    github: "https://github.com/PremBorde/AI-Study-Buddy-",
    live: "#",
    featured: false,
    color: "from-cyan-500/20 to-blue-500/20",
    learnings: "Educational AI applications, content generation for learning, building practical study tools"
  },
  {
    title: "AI Course Recommender",
    subtitle: "DBMS-Based Learning System",
    description: "An intelligent course recommendation system that uses database management principles and AI to suggest personalized learning paths. Analyzes user preferences, learning history, and skill gaps to recommend the most relevant courses.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    technologies: ["Python", "DBMS", "AI/ML", "Recommendation Systems"],
    github: "https://github.com/PremBorde/DBMS--Ai-Course-Recommender",
    live: "#",
    featured: false,
    color: "from-pink-500/20 to-fuchsia-500/20",
    learnings: "Recommendation algorithms, database design for AI systems, personalized learning platforms"
  }
]

export function ProjectsSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section id="projects" className="py-20 relative bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
          >
            <Code2 className="h-3 w-3 text-blue-400" />
            <span className="text-sm text-white/60 tracking-wide uppercase font-medium">Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Featured 
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ml-3">
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl font-light leading-relaxed"
          >
            A curated selection of work exploring Software Engineering, AI/ML, and interactive digital experiences.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUpVariants}
              className="group relative h-full"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.05] group-hover:border-white/[0.1] transition-all duration-500">
                <div className="flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent" />
                    
                    {project.featured && (
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500 text-white text-[9px] font-bold uppercase tracking-wider shadow-lg">
                        <Sparkles className="w-2.5 h-2.5" />
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-white mb-0.5 tracking-tight">{project.title}</h3>
                        <p className="text-[11px] text-blue-400/80 font-medium tracking-wide uppercase">{project.subtitle}</p>
                      </div>
                      
                      <p className="text-white/40 text-[13px] font-light leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-0.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/40 text-[9px] font-medium tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-white/20 text-[9px] font-medium self-center">+{project.technologies.length - 4} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-5 pt-4 border-t border-white/[0.05]">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors group/link"
                      >
                        <Github className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Code</span>
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors group/link"
                      >
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className={cn(
                "absolute -z-10 inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                "bg-gradient-to-br",
                project.color
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


