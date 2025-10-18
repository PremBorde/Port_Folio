'use client'

import { SplineScene } from "@/components/ui/spline"
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative w-full h-screen bg-black overflow-hidden">
      <div className="flex h-full w-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-6">
              Interactive 3D
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Creating immersive digital experiences with cutting-edge 3D technology. 
              Bringing your ideas to life through innovative web development and interactive design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToNext}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  )
}
