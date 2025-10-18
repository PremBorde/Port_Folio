'use client'

import { Home, User, Briefcase, Code, Award, FileText, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Skills', url: '#skills', icon: Code },
  { name: 'Certifications', url: '#certifications', icon: Award },
  { name: 'Resume', url: '#resume', icon: FileText },
  { name: 'Contact', url: '#contact', icon: Mail },
]

export function Navigation() {
  return <NavBar items={navItems} />
}
