"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="relative p-12 md:p-24 rounded-[3rem] overflow-hidden text-center">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700"
                        style={{
                            backgroundImage: `linear-gradient(rgba(5, 10, 24, 0.7), rgba(5, 10, 24, 0.9)), url('https://images.unsplash.com/photo-1646649852033-7e0f3d679f8b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-outfit mb-8 leading-tight">
                            Ready to Step onto <br /> the <span className="text-padel-neon">Blue Court?</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                            Join thousands of padel players in Jakarta. Book your court today and experience the premium atmosphere of PadelPlay.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-padel-neon text-padel-dark px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all group">
                                Book My First Match
                                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                            </button>
                            <button className="glass-morphism px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-black transition-all">
                                View Memberships
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
