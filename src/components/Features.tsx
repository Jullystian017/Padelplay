"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Wind, Navigation } from "lucide-react";

const features = [
    {
        icon: <Shield className="w-8 h-8 text-padel-neon" />,
        title: "Panoramic Glass",
        description: "World-class 12mm tempered glass for maximum visibility and safety."
    },
    {
        icon: <Zap className="w-8 h-8 text-padel-neon" />,
        title: "Eco-LED Lighting",
        description: "Glare-free professional stadium lighting for perfect night matches."
    },
    {
        icon: <Wind className="w-8 h-8 text-padel-neon" />,
        title: "Premium Blue Turf",
        description: "Mondo Supercourt XN turf for consistent bounce and joint protection."
    },
    {
        icon: <Navigation className="w-8 h-8 text-padel-neon" />,
        title: "Mobile Easy-Access",
        description: "Digital entry codes sent to your phone. Play anytime without hassle."
    }
];

export default function Features() {
    return (
        <section className="py-24 px-6 md:px-12 bg-padel-dark/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-padel-neon font-bold tracking-[0.2em] uppercase text-xs">Premium Setup</span>
                    <h2 className="text-4xl md:text-5xl font-outfit mt-4">Why Play at PadelPlay?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-morphism p-8 rounded-3xl border-white/5 hover:border-padel-neon/30 transition-all group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
