"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[110] origin-[0%]"
        style={{ scaleX }}
      />

      <div
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 pt-6 transition-all duration-300",
          isScrolled ? "pt-4" : "pt-8",
          className,
        )}
      >
        <nav className="relative flex items-center justify-center p-1 bg-background/60 dark:bg-white/[0.03] border border-border dark:border-white/[0.08] backdrop-blur-xl rounded-full shadow-2xl">
          <div className="flex items-center gap-1 sm:gap-2">
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name)
                    const element = document.querySelector(item.url)
                    if (element) {
                      const offset = 80 // Offset for the fixed navbar
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - offset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className={cn(
                    "relative group flex items-center justify-center py-2 px-3 sm:px-5 rounded-full transition-all duration-300",
                    isActive ? "text-foreground dark:text-white" : "text-muted-foreground dark:text-white/40 hover:text-foreground dark:hover:text-white/70"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={16} className={cn("transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
                    <span className="hidden md:inline text-xs font-bold uppercase tracking-widest">{item.name}</span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-muted dark:bg-white/[0.05] border border-border dark:border-white/[0.1] rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  
                  {/* Subtle hover effect for non-active items */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-muted/50 dark:bg-white/[0.02] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20" />
                  )}
                </button>
              )
            })}
            
            <div className="w-px h-4 bg-border dark:bg-white/[0.1] mx-1 sm:mx-2" />
            <ModeToggle />
          </div>

          {/* Dynamic Island style accent */}
          <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </nav>
      </div>
    </>
  )
}
