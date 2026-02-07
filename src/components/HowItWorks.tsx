"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Select Your Court",
        description: "Explore our premium panoramic courts across prime Jakarta locations. Filter by court type and surface preference.",
        image: "https://images.unsplash.com/photo-1646649853703-7645147474ba?q=80&w=1200",
    },
    {
        number: "02",
        title: "Book & Pay Securely",
        description: "Choose your preferred time slot and complete your booking with our integrated secure payment gateway.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e5381c60c?q=80&w=1200",
    },
    {
        number: "03",
        title: "Receive Access Code",
        description: "Instantly receive your unique digital entry code via WhatsApp and email for a contactless entry system.",
        image: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1200",
    },
    {
        number: "04",
        title: "Start Playing",
        description: "Show up at the court, scan your code, and enjoy the ultimate pro-grade padel experience with your team.",
        image: "https://images.unsplash.com/photo-1626248685124-5f7548bb994d?q=80&w=1200",
    }
];

const TIMER_DURATION = 6000; // 6 seconds per step

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0);
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const newProgress = Math.min((elapsedTime / TIMER_DURATION) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                setActiveStep((prev) => (prev + 1) % steps.length);
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [activeStep]);

    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#050A18] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Interactive Steps */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 md:mb-12"
                        >
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <span className="text-padel-neon font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                                    How to Join
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-outfit text-white leading-tight">
                                How to Booking <br />
                                <span className="text-padel-neon">PadelPlay</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-4 md:space-y-6">
                            {steps.map((step, index) => {
                                const isActive = activeStep === index;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveStep(index)}
                                        className="cursor-pointer group relative"
                                    >
                                        <div className="flex items-start gap-4 md:gap-6 py-3 md:py-4">
                                            <span className={`text-xs md:text-sm font-black transition-colors duration-300 ${isActive ? "text-padel-neon" : "text-white/20"}`}>
                                                {step.number}
                                            </span>
                                            <div className="flex-1">
                                                <h3 className={`text-xl md:text-3xl font-bold mb-2 md:mb-3 transition-colors duration-300 ${isActive ? "text-white" : "text-white/20 group-hover:text-white/40"}`}>
                                                    {step.title}
                                                </h3>

                                                <AnimatePresence initial={false}>
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="text-white/50 text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-inter max-w-md">
                                                                {step.description}
                                                            </p>
                                                            {/* Progress Tracker Line */}
                                                            <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    className="absolute top-0 left-0 h-full bg-padel-neon shadow-[0_0_10px_rgba(223,255,0,0.5)]"
                                                                    style={{ width: `${progress}%` }}
                                                                />
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Dynamic Image */}
                    <div className="order-1 lg:order-2 relative aspect-video md:aspect-square lg:aspect-[4/5] rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/5 bg-white/5 group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={steps[activeStep].image}
                                    alt={steps[activeStep].title}
                                    fill
                                    className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-transparent opacity-40 md:opacity-60" />

                        {/* Decorative Corner Glow */}
                        <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 w-32 h-32 md:w-64 md:h-64 bg-padel-neon/10 rounded-full blur-[40px] md:blur-[80px]" />
                        <div className="absolute -bottom-12 -left-12 md:-bottom-24 md:-left-24 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-[40px] md:blur-[80px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
