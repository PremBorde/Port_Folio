'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
    <section id="contact" className="py-20 relative bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
          >
            <MessageSquare className="h-3 w-3 text-blue-400" />
            <span className="text-sm text-white/60 tracking-wide uppercase font-medium">Contact</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Let's build 
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ml-3">
              together.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/40 max-w-2xl font-light leading-relaxed"
          >
            Have a project in mind or just want to say hello? Feel free to reach out anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUpVariants}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group"
            >
              <h3 className="text-xl font-medium text-white mb-6 tracking-tight">Connect with me</h3>
              
              <div className="space-y-6">
                <a href="mailto:prembordesn4@gmail.com" className="flex items-center gap-4 group/item">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover/item:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Email</p>
                    <p className="text-white/60 group-hover/item:text-white transition-colors">prembordesn4@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919653309640" className="flex items-center gap-4 group/item">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover/item:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Phone</p>
                    <p className="text-white/60 group-hover/item:text-white transition-colors">+91-9653309640</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group/item">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover/item:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Location</p>
                    <p className="text-white/60 transition-colors">Pune, Maharashtra</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/[0.05]">
                <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold mb-4">Connect</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/PremBorde" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/[0.08] transition-all group/link">
                    <Github className="w-4 h-4" />
                    <span className="text-xs font-medium">GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/prem-borde-115a92281" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/[0.08] transition-all group/link">
                    <Linkedin className="w-4 h-4" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </a>
                  <a href="https://magical-rugelach-ad9f1b.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/[0.08] transition-all group/link">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs font-medium">Portfolio</span>
                  </a>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUpVariants}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <LiquidButton
                  type="submit"
                  size="lg"
                  className="w-full h-16 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </LiquidButton>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
