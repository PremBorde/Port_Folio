'use client'

import { motion } from "framer-motion";
import { Circle, ArrowDown } from "lucide-react";
import { SplineScene } from "@/components/ui/spline"
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export function HeroHybrid() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
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
        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#030303]">
            {/* Geometric Background Shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
            
            <div className="absolute inset-0 overflow-hidden">
                {/* Reduced to only 2 shapes for better performance */}
                <ElegantShape
                    delay={0.3}
                    width={400}
                    height={100}
                    rotate={12}
                    gradient="from-indigo-500/[0.1]"
                    className="left-[-5%] top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={300}
                    height={80}
                    rotate={-15}
                    gradient="from-rose-500/[0.1]"
                    className="right-[-5%] top-[70%]"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex h-screen">
                {/* Left Side - Text Content */}
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="max-w-2xl">
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
                        >
                            <Circle className="h-2 w-2 fill-blue-500/80" />
                            <span className="text-sm text-white/60 tracking-wide">
                                Software Engineer
                            </span>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                    Prem Borde
                                </span>
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300">
                                    Software Engineer
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed font-light tracking-wide">
                                Passionate about creating innovative web applications with modern technologies. 
                                Specializing in React, Node.js, and cloud solutions to deliver exceptional user experiences.
                            </p>
                        </motion.div>

                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button 
                                onClick={scrollToNext}
                                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                            >
                                View My Work
                            </button>
                            <button 
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                            >
                                Get In Touch
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side - 3D Robot Scene */}
                <div className="flex-1 relative">
                    {/* Subtle glow effect instead of cursor hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-lg"></div>
                    <SplineScene 
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full relative z-10"
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button 
                    onClick={scrollToNext}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                >
                    <ArrowDown size={24} />
                </button>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </section>
    )
}
