"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Users, Heart, Trophy } from "lucide-react";

const values = [
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Premium Quality",
        description: "We provide world-class panoramic courts with professional-grade surfaces and lighting."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Community First",
        description: "PadelPlay is more than just a sport center; it's a hub for connecting people and building bonds."
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Passion for Sport",
        description: "Our team is driven by a genuine love for Padel and a desire to grow the sport in Indonesia."
    },
    {
        icon: <Trophy className="w-8 h-8" />,
        title: "Excellence",
        description: "From booking to playing, we strive for perfection in every aspect of your experience."
    }
];

export default function AboutPage() {
    return (
        <main className="bg-[#050A18] min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <Image
                    src="/image/photo-1646649853703-7645147474ba.avif"
                    alt="About PadelPlay"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050A18]/50 to-[#050A18]" />

                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-padel-neon font-black tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-outfit font-medium text-white max-w-4xl mx-auto"
                    >
                        Redefining the <br /> <span className="text-white/60">Padel Experience.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-outfit text-white mb-8">
                                Why we built <br /><span className="text-padel-neon">PadelPlay</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-6 font-inter">
                                Founded in 2023, PadelPlay was born out of a simple realization: Jakarta needed a premium, accessible, and community-focused space for the fastest-growing sport in the world.
                            </p>
                            <p className="text-white/60 text-lg leading-relaxed font-inter">
                                We've combined state-of-the-art technology with professional-grade courts to create an environment where players of all levels can thrive, compete, and most importantly, enjoy the game.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/image/photo-1646649852033-7e0f3d679f8b.avif"
                                alt="Innovation"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-morphism p-10 rounded-[2.5rem] border-white/5 hover:border-padel-neon/20 transition-all group"
                            >
                                <div className="text-padel-neon mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-inter">
                                    {v.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
