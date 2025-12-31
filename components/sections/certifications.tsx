'use client'

import { Award, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const certifications = [
  {
    title: "OCI 2025 AI Foundations Associate",
    issuer: "Oracle",
    description: "Certified in AI foundations and Oracle Cloud Infrastructure services.",
    year: "2025",
    featured: true,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Transformer Models and BERT",
    issuer: "Udacity",
    description: "Advanced course on transformer models and BERT architecture with Google Cloud.",
    year: "2024",
    featured: true,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Introduction to AWS Cloud",
    issuer: "Amazon Web Services",
    description: "Fundamentals of IT and AWS cloud computing services and architecture.",
    year: "2024",
    featured: false,
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    title: "Cloud Computing Professional",
    issuer: "Acmegrade",
    description: "Comprehensive cloud computing concepts and industry practices.",
    year: "2024",
    featured: false,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Career Edge - Digital Skills",
    issuer: "TCS iON",
    description: "Professional skills enhancement and digital career readiness.",
    year: "2023",
    featured: false,
    color: "from-rose-500/20 to-orange-500/20"
  },
  {
    title: "Google Cloud AI/ML Fundamentals",
    issuer: "Google Cloud",
    description: "Foundational knowledge in machine learning and AI on Google Cloud Platform.",
    year: "2024",
    featured: false,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "FastAPI Development",
    issuer: "Udemy",
    description: "Building high-performance APIs with FastAPI and Python for modern web applications.",
    year: "2024",
    featured: false,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "RAG Systems & Vector Databases",
    issuer: "DeepLearning.AI",
    description: "Advanced course on Retrieval-Augmented Generation and vector database implementation.",
    year: "2024",
    featured: true,
    color: "from-violet-500/20 to-purple-500/20"
  }
]

export function CertificationsSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section id="certifications" className="py-20 relative bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
          >
            <ShieldCheck className="h-3 w-3 text-blue-400" />
            <span className="text-sm text-white/60 tracking-wide uppercase font-medium">Achievements</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Professional 
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ml-3">
              Certifications
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl font-light leading-relaxed"
          >
            Continuous learning and validation of expertise in AI, Cloud, and Software Engineering.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUpVariants}
              className="group relative"
            >
              <div className="h-full bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
                <div className="flex items-start justify-between mb-8">
                  <div className={cn(
                    "p-4 rounded-2xl bg-gradient-to-br transition-transform group-hover:scale-110 duration-300",
                    cert.color
                  )}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  {cert.featured && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1 tracking-tight group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-white/40 font-medium">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  
                  <p className="text-sm text-white/40 font-light leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <a 
                      href="#"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 hover:text-white transition-all group/link"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decorative background effect */}
              <div className={cn(
                "absolute -z-10 inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "bg-gradient-to-br",
                cert.color
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
