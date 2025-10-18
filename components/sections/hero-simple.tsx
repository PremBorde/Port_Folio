'use client'

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SplineScene } from "@/components/ui/spline"
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button"

export function HeroSimple() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.3 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    const scrollToNext = () => {
        const aboutSection = document.querySelector('#about')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Simple gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-pink-900/20" />
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
                {/* Left Side - Text Content */}
                <div className="flex-1 flex items-center justify-center p-6 lg:p-8 pt-20 lg:pt-8">
                    <div className="max-w-2xl w-full">
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="mb-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-blue-300 tracking-wide">
                                    Computer Science Student
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 block">
                                    Prem Borde
                                </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 block mt-2">
                                    Software Engineer & AI/ML Enthusiast
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                Enthusiastic Computer Science undergraduate with hands-on experience in Software Engineering 
                                and AI/ML technologies. Building scalable web applications and intelligent solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <LiquidButton 
                                onClick={scrollToNext}
                                size="lg"
                                className="text-white font-semibold"
                            >
                                View My Work
                            </LiquidButton>
                            <MetalButton 
                                variant="primary"
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-white font-semibold"
                            >
                                Get In Touch
                            </MetalButton>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side - 3D Robot Scene */}
                <div className="flex-1 relative min-h-[600px]">
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
