"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Share2, Download } from "lucide-react";
import Link from "next/link";

export default function BookingSuccess() {
    return (
        <main className="bg-[#050A18] min-h-screen">
            <Navbar />

            <div className="pt-40 pb-24 px-6 flex items-center justify-center">
                <div className="max-w-2xl w-full text-center">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-24 h-24 bg-padel-neon rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(223,255,0,0.4)]"
                    >
                        <CheckCircle2 className="w-12 h-12 text-padel-dark" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-outfit text-white mb-6"
                    >
                        Booking <span className="text-padel-neon">Confirmed!</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/40 text-lg mb-12 max-w-lg mx-auto"
                    >
                        Your court is ready. We've sent the digital access code and receipt to your email.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-morphism p-10 rounded-[3rem] border-white/10 mb-12 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 mb-6">Your Entry Code</p>
                            <h2 className="text-6xl md:text-8xl font-black text-white tracking-widest mb-10">PX-992</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 bg-white/5 py-4 rounded-2xl text-white font-bold hover:bg-white/10 transition-all border border-white/5">
                                    <Download className="w-4 h-4" /> Save PDF
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-white/5 py-4 rounded-2xl text-white font-bold hover:bg-white/10 transition-all border border-white/5">
                                    <Share2 className="w-4 h-4" /> Share
                                </button>
                            </div>
                        </div>
                        {/* Glow decorative items */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-padel-neon/10 blur-[60px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full" />
                    </motion.div>

                    <Link href="/courts" className="inline-flex items-center gap-2 text-padel-neon font-black uppercase tracking-widest text-xs hover:text-white transition-colors group">
                        Back to Courts <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
