"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[100vh] w-full overflow-hidden flex items-end pb-20 md:pb-30 px-6 md:px-12">
            {/* Background Image - Optimized with next/image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image/photo-1646649853703-7645147474ba.avif"
                    alt="Padel Court"
                    fill
                    priority
                    className="object-cover object-[center_100%] transition-transform duration-1000 scale-105"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/40 to-transparent" />
            </div>

            <div className="relative z-20 w-full max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    {/* Social Proof/Avatars */}
                    <div className="flex items-center gap-3 glass-morphism w-fit px-4 py-2 rounded-full border-white/10">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-padel-dark bg-gray-500 overflow-hidden relative">
                                    <Image
                                        src={`https://i.pravatar.cc/100?u=${i}`}
                                        alt="User"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] md:text-xs text-white/80 font-inter">
                            It's more fun together. Padel connects <br className="hidden sm:block" /> friends and builds new bonds.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 glass-morphism px-4 py-1.5 rounded-full border-white/5 font-semibold">
                            Sport Center
                        </span>
                        <h1 className="text-4xl md:text-7xl font-outfit font-medium leading-[1.1] text-white">
                            Your Game, Your Style &ndash; <br />
                            <span className="text-white/60">Modern padel courts, built for every player.</span>
                        </h1>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
