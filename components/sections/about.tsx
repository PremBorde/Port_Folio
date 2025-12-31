'use client'

import { Code, Brain, Database, Sparkles, GraduationCap, Laptop } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const stats = [
  { label: 'Major Projects', value: '3+', icon: Laptop, color: 'text-blue-400' },
  { label: 'CGPA (TE)', value: '8.3', icon: GraduationCap, color: 'text-purple-400' },
  { label: 'Experience', value: 'Intern', icon: Code, color: 'text-emerald-400' },
  { label: 'Learning', value: 'Always', icon: Brain, color: 'text-rose-400' },
]

export function AboutSection() {
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
    <section id="about" className="py-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-8"
            >
              <Sparkles className="h-3 w-3 text-blue-400" />
              <span className="text-sm text-muted-foreground tracking-wide uppercase font-medium">About Me</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                Driven by curiosity,
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Defined by code.
              </span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUpVariants}
              className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed mb-8"
            >
              <p>
                Hi, I'm <span className="text-foreground font-normal">Prem Borde</span>, a Computer Engineering student passionate about building <span className="text-foreground font-normal">applied AI systems</span> that solve real-world problems. My work focuses on <span className="text-foreground font-normal">LLM-powered applications, Retrieval-Augmented Generation (RAG), semantic search, and AI automation</span>, with an emphasis on reliability and system design rather than just model usage.
              </p>
              <p>
                I enjoy turning complex AI concepts into practical products—whether it's analyzing large documents, improving job application workflows, or building intelligent tools for learning and productivity. Most of my projects involve <span className="text-foreground font-normal">FastAPI backends, vector embeddings, and modern AI APIs</span>, and I'm continuously exploring how AI systems behave in real production-like scenarios.
              </p>
            </motion.div>

            {/* Stats Grid - Left Side (First 2) */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 3}
                  variants={fadeUpVariants}
                  className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-white dark:border-white/[0.05] hover:border-blue-500/20 dark:hover:border-white/[0.1] transition-colors group shadow-lg shadow-blue-500/5 dark:shadow-none"
                >
                  <stat.icon className={cn("w-6 h-6 mb-4 transition-transform group-hover:scale-110 shadow-sm", stat.color)} />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground tracking-wide uppercase font-bold dark:font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Experience Card & Philosophy */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative z-10 p-8 rounded-3xl bg-white/40 dark:bg-foreground/[0.05] border border-white dark:border-border backdrop-blur-xl shadow-2xl shadow-blue-500/10 dark:shadow-none">
                <h3 className="text-2xl font-bold dark:font-semibold text-foreground mb-8 tracking-tight">Current Experience</h3>
                
                <div className="space-y-12">
                  <div className="relative pl-8 border-l border-blue-500/20 dark:border-border">
                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-bold dark:font-medium mb-1">Sep 2025 – Oct 2025</div>
                    <h4 className="text-lg font-bold dark:font-medium text-foreground mb-1 tracking-tight">AI & Cloud Intern</h4>
                    <p className="text-blue-600/60 dark:text-muted-foreground/80 mb-4 font-medium dark:font-light italic text-sm">Edunet Foundation (AICTE & IBM)</p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-normal dark:font-light">
                      Developed JobFlow - an AI-powered automation agent for job applications. Built production-ready AI tools using FastAPI and LLM APIs, focusing on RAG and automation workflows.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l border-purple-500/20 dark:border-border">
                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-bold dark:font-medium mb-1">Education</div>
                    <h4 className="text-lg font-bold dark:font-medium text-foreground mb-1 tracking-tight">B.E in Computer Science</h4>
                    <p className="text-purple-600/60 dark:text-muted-foreground/80 mb-4 font-medium dark:font-light italic text-sm">PCET NMIET, Pune</p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-normal dark:font-light">
                      Specializing in AI/ML and Software Engineering. Maintaining a strong 8.3 CGPA.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid - Right Side (Last 2) */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(2, 4).map((stat, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 5}
                  variants={fadeUpVariants}
                  className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-white dark:border-white/[0.05] hover:border-blue-500/20 dark:hover:border-white/[0.1] transition-colors group shadow-lg shadow-blue-500/5 dark:shadow-none"
                >
                  <stat.icon className={cn("w-6 h-6 mb-4 transition-transform group-hover:scale-110 shadow-sm", stat.color)} />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground tracking-wide uppercase font-bold dark:font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy & Roadmap Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-2xl bg-muted/30 border border-border hover:border-foreground/10 transition-all">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Core Philosophy</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light italic">
                  "I believe in building AI systems that are reliable, explainable, and solve actual human problems."
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-muted/30 border border-border hover:border-foreground/10 transition-all">
                <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">Next Milestone</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-purple-500" />
                    Deepening LLMOps
                  </li>
                  <li className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-purple-500" />
                    Vector DB Orchestration
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
