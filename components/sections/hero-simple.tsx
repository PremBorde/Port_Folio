'use client'

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, Terminal, Sparkles } from "lucide-react";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button"
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
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 12,
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
        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-background flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] dark:from-blue-500/[0.03] dark:to-purple-500/[0.03] blur-3xl" />
            
            {/* Subtle Grid Pattern for Light Mode */}
            <div className="absolute inset-0 dark:hidden opacity-[0.03] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-blue-500/[0.15] dark:from-blue-500/[0.12]"
                    className="right-[-10%] top-[10%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-purple-500/[0.15] dark:from-purple-500/[0.12]"
                    className="right-[5%] top-[60%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-indigo-500/[0.15] dark:from-indigo-500/[0.12]"
                    className="right-[20%] top-[30%]"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-24 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="max-w-3xl">
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.05] dark:bg-muted border border-blue-500/10 dark:border-border mb-8">
                                <Sparkles className="h-3 w-3 text-blue-500 dark:text-blue-400" />
                                <span className="text-sm text-blue-600/80 dark:text-muted-foreground tracking-wide uppercase font-medium">
                                    Applied AI & LLM Systems
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 dark:from-white dark:to-white/60">
                                    Prem Borde
                                </span>
                                <br />
                                <span className="text-3xl sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 font-medium">
                                    Building the Future with Code
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light tracking-wide max-w-xl">
                                Building <span className="text-foreground font-medium dark:font-normal">applied AI systems</span> that solve real-world problems. 
                                Focused on <span className="text-foreground font-medium dark:font-normal">LLM-powered applications, RAG, semantic search</span>, and 
                                <span className="text-foreground font-medium dark:font-normal"> AI automation</span>.
                            </p>
                        </motion.div>

                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-4"
                        >
                            <LiquidButton 
                                onClick={scrollToNext}
                                size="lg"
                                className="text-white font-semibold min-w-[160px] shadow-xl shadow-blue-500/20"
                            >
                                View Projects
                            </LiquidButton>
                            <MetalButton 
                                variant="primary"
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-white font-semibold min-w-[160px]"
                            >
                                Get In Touch
                            </MetalButton>
                        </motion.div>

                        <motion.div
                            custom={4}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-12 flex items-center gap-6"
                        >
                            <a href="https://github.com/PremBorde" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 dark:hover:text-foreground transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/prem-borde-115a92281" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 dark:hover:text-foreground transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:prembordesn4@gmail.com" className="text-muted-foreground hover:text-blue-600 dark:hover:text-foreground transition-colors">
                                <Mail size={20} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Visual Element (Decorative) */}
                    <div className="hidden lg:block relative h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                {/* Abstract Code Card */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] aspect-square rounded-3xl bg-white/40 dark:bg-foreground/[0.05] border border-white dark:border-border backdrop-blur-xl p-8 shadow-2xl shadow-blue-500/10">
                                    <div className="flex gap-1.5 mb-6">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-2 w-3/4 bg-blue-500/10 dark:bg-blue-400/20 rounded" />
                                        <div className="h-2 w-1/2 bg-purple-500/10 dark:bg-purple-400/20 rounded" />
                                        <div className="h-2 w-5/6 bg-indigo-500/10 dark:bg-indigo-400/20 rounded" />
                                        <div className="h-2 w-2/3 bg-blue-500/10 dark:bg-blue-400/20 rounded" />
                                        <div className="h-2 w-3/4 bg-foreground/5 dark:bg-foreground/10 rounded" />
                                        <div className="h-2 w-1/2 bg-foreground/5 dark:bg-foreground/10 rounded" />
                                    </div>
                                    
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
                                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
                                </div>

                                {/* Floating Terminal Icon */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[20%] right-[10%] p-4 rounded-2xl bg-white/60 dark:bg-background/50 border border-white dark:border-border backdrop-blur-md shadow-xl"
                                >
                                    <Terminal className="text-blue-600 dark:text-blue-400" size={32} />
                                </motion.div>

                                {/* Floating Sparkle */}
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-[20%] left-[10%] p-4 rounded-2xl bg-white/60 dark:bg-background/50 border border-white dark:border-border backdrop-blur-md shadow-xl"
                                >
                                    <Sparkles className="text-purple-600 dark:text-purple-400" size={32} />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Scroll</span>
                <motion.button 
                    onClick={scrollToNext}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-muted-foreground hover:text-blue-600 dark:hover:text-foreground transition-colors duration-300"
                >
                    <ArrowDown size={20} />
                </motion.button>
            </div>
        </section>
    )
}
