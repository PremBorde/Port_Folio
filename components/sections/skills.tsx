'use client'

import { 
  Code, 
  Database, 
  Cloud,
  Brain,
  Server,
  Globe,
  Layers,
  Sparkles
} from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Frontend Development", 
    icon: Globe,
    skills: ["React.js", "Next.js"],
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["FastAPI", "Node.js", "OpenCV", "MediaPipe"],
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "AI & ML Technologies",
    icon: Brain,
    skills: ["FAISS", "Gemini API", "Sentence Transformers"],
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400"
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS"],
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-rose-400"
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MongoDB", "Git", "GitHub"],
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400"
  }
]

export function SkillsSection() {
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
    <section id="skills" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-6"
          >
            <Layers className="h-3 w-3 text-blue-400" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase font-medium">Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
              Skills & 
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ml-3">
              Technologies
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed"
          >
            A comprehensive collection of tools and technologies I use to bring complex digital ideas to life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUpVariants}
              className="group relative"
            >
              <div className="h-full bg-white/50 dark:bg-white/[0.02] border border-white dark:border-white/[0.05] rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-white/[0.04] hover:border-blue-500/20 dark:hover:border-white/[0.1] transition-all duration-300 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/10 dark:shadow-none">
                <div className="flex items-center mb-6">
                  <div className={cn(
                    "p-3 rounded-2xl bg-gradient-to-br transition-transform group-hover:scale-110 duration-300 shadow-lg",
                    category.color
                  )}>
                    <category.icon className={cn("w-6 h-6 shadow-sm", category.iconColor)} />
                  </div>
                  <h3 className="text-xl font-bold dark:font-medium text-foreground ml-4 tracking-tight">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-xl bg-blue-500/5 dark:bg-muted border border-blue-500/10 dark:border-border text-blue-600 dark:text-muted-foreground text-xs font-semibold dark:font-medium hover:bg-blue-500/10 dark:hover:bg-muted/80 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative orb */}
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Dynamic counter section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Programming', value: '4+', sub: 'Languages' },
              { label: 'Experience', value: '2+', sub: 'Years Coding' },
              { label: 'Projects', value: '10+', sub: 'Completed' },
              { label: 'Libraries', value: '20+', sub: 'Mastered' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-bold">{stat.label}</div>
                <div className="text-[10px] text-muted-foreground/30">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


