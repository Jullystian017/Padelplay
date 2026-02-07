"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="relative p-8 md:p-24 rounded-3xl md:rounded-[3rem] overflow-hidden text-center">
                    {/* Background Image - Optimized */}
                    <Image
                        src="/image/photo-1646649852033-7e0f3d679f8b.avif"
                        alt="Join PadelPlay"
                        fill
                        className="object-cover z-0"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/80 to-[#050A18]/60 z-[1]" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-6xl font-outfit mb-6 md:mb-8 leading-tight text-white">
                            Ready to Step onto <br /> the <span className="text-padel-neon">Blue Court?</span>
                        </h2>
                        <p className="text-white/60 text-base md:text-lg mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed">
                            Join thousands of padel players in Jakarta. Book your court today and experience the premium atmosphere of PadelPlay.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link // Changed from button to Link
                                href="/courts" // Added href
                                className="bg-padel-neon text-padel-dark px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all group"
                            >
                                Book My First Match
                                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
