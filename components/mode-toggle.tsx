"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative group flex items-center justify-center py-2 px-3 rounded-full transition-all duration-300 text-muted-foreground hover:text-foreground dark:text-white/40 dark:hover:text-white"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-muted/50 dark:bg-white/[0.02] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </button>
  )
}

