"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-end pb-24 px-6 md:px-12">
            {/* Background Image - Cinematic Padel Court */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: `linear-gradient(rgba(5, 10, 24, 0.4), rgba(5, 10, 24, 0.95)), url('https://images.unsplash.com/photo-1646649853703-7645147474ba?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}
            />

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
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-padel-dark bg-gray-500 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-white/80 font-inter">
                            It's more fun together. Padel connects <br /> friends and builds new bonds.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <span className="text-xs uppercase tracking-[0.2em] text-white/50 glass-morphism px-4 py-1.5 rounded-full border-white/5 font-semibold">
                            Sport Center
                        </span>
                        <h1 className="text-5xl md:text-7xl font-outfit font-medium leading-[1.1] text-white">
                            Your Game, Your Style &ndash; <br />
                            <span className="text-white/60">Modern padel courts, built for every player.</span>
                        </h1>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
