'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative overflow-hidden bg-[#030303] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Brand/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Prem Borde</h3>
            <p className="text-xs text-white/20 uppercase tracking-[0.2em] font-medium">Applied AI & LLM Systems</p>
          </div>

          {/* Copyright/Middle */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-white/20 text-xs">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-rose-500/50 fill-rose-500/20" />
              <span>by Prem Borde</span>
            </div>
            <p className="text-[10px] text-white/10 uppercase tracking-widest font-bold">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-6">
            <a href="https://github.com/PremBorde" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/prem-borde-115a92281" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:prembordesn4@gmail.com" className="text-white/20 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>

        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px]" />
    </footer>
  )
}

