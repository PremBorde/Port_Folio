'use client'

import { Download, FileText, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { cn } from "@/lib/utils"

export function ResumeSection() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/PremBorde-Resume.pdf')
      if (!response.ok) {
        // Fallback to resume folder
        const fallbackResponse = await fetch('/resume/PremBorde-Resume.pdf')
        const blob = await fallbackResponse.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'PremBorde-Resume.pdf'
        link.click()
        window.URL.revokeObjectURL(url)
        return
      }
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'PremBorde-Resume.pdf'
      link.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Direct download fallback
      const link = document.createElement('a')
      link.href = '/PremBorde-Resume.pdf'
      link.download = 'PremBorde-Resume.pdf'
      link.target = '_blank'
      link.click()
    }
  }

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
    <section id="resume" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-6"
          >
            <FileText className="h-3 w-3 text-blue-400" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase font-medium">Curriculum Vitae</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
              My 
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ml-3">
              Resume
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed"
          >
            A detailed overview of my professional journey, technical expertise, and academic background.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUpVariants}
          className="max-w-4xl mx-auto relative group"
        >
          <div className="relative z-10 p-8 sm:p-12 rounded-3xl bg-muted/30 border border-border backdrop-blur-xl transition-all duration-300 hover:bg-muted/50 hover:border-foreground/10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                  <FileText className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1 tracking-tight">Prem Borde</h3>
                  <p className="text-muted-foreground font-medium tracking-wide">Software Engineer & AI Enthusiast</p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/30 font-bold mb-1">Last Updated</p>
                <p className="text-muted-foreground font-medium">October 2024</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/30 ml-1">Key Highlights</h4>
                <div className="space-y-4">
                  {[
                    "CS Undergrad at PCET NMIET",
                    "AI & Cloud Tech Intern at Edunet",
                    "3+ AI/ML & Web Projects",
                    "5+ Professional Certifications"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-muted-foreground font-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/30 ml-1">Primary Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Python', 'FastAPI', 'AWS', 'AI/ML', 'OpenCV'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 rounded-xl bg-muted border border-border text-muted-foreground text-xs font-medium hover:text-foreground hover:bg-muted/80 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <LiquidButton
                onClick={handleDownloadResume}
                className="flex-1 h-14 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 group"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </LiquidButton>
              <a
                href="/PremBorde-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-14 rounded-2xl border border-border text-muted-foreground font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-muted hover:text-foreground transition-all group"
              >
                <span>View Online</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            
            {/* Background decorative glow */}
            <div className="absolute -z-10 inset-0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          </div>
          
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
