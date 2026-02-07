"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Wind, Navigation, ArrowUpRight } from "lucide-react";

const features = [
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Panoramic Glass",
        label: "Safety First",
        description: "World-class 12mm tempered glass for maximum visibility and safety."
    },
    {
        icon: <Zap className="w-7 h-7" />,
        title: "Eco-LED Lighting",
        label: "Night Mode",
        description: "Glare-free professional stadium lighting for perfect night matches."
    },
    {
        icon: <Wind className="w-7 h-7" />,
        title: "Premium Blue Turf",
        label: "Pro Grade",
        description: "Mondo Supercourt XN turf for consistent bounce and joint protection."
    },
    {
        icon: <Navigation className="w-7 h-7" />,
        title: "Digital Access",
        label: "Smart Play",
        description: "Digital entry codes sent to your phone. Play anytime without hassle."
    }
];

export default function Features() {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#080B13] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-padel-neon/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl md:text-right">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center md:justify-end gap-3 mb-6"
                        >
                            <span className="text-padel-neon font-bold tracking-[0.2em] uppercase text-xs">Premium Setup</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-outfit text-white leading-tight">
                            Engineered for <br />
                            <span className="text-padel-neon">Peak Performance.</span>
                        </h2>
                    </div>
                    <p className="text-white/40 max-w-sm text-lg font-inter pb-2">
                        Experience the world's most advanced padel infrastructure, designed for professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-padel-neon/0 group-hover:bg-padel-neon/[0.02] rounded-[2rem] transition-colors duration-500" />

                            <div className="relative h-full glass-morphism p-10 rounded-[2rem] border-white/5 group-hover:border-padel-neon/20 transition-all duration-500 flex flex-col">
                                {/* Icon Header */}
                                <div className="flex justify-between items-start mb-10">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-padel-neon blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-padel-dark group-hover:bg-padel-neon group-hover:border-padel-neon transition-all duration-500 relative z-10 shadow-2xl">
                                            {feature.icon}
                                        </div>
                                    </div>
                                </div>

                                <span className="text-[9px] uppercase tracking-[0.3em] text-padel-neon font-black mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    {feature.label}
                                </span>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-padel-neon transition-colors duration-300 font-outfit">
                                    {feature.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed font-inter group-hover:text-white/60 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
