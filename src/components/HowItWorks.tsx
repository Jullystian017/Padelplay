"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Choose Your Court",
        description: "Select from our premium panoramic courts in prime locations."
    },
    {
        number: "02",
        title: "Book Time Slot",
        description: "Real-time availability. Pay securely via Midtrans in seconds."
    },
    {
        number: "03",
        title: "Get Entry Code",
        description: "Receive your unique QR code or PIN for seamless court access."
    },
    {
        number: "04",
        title: "Let's Play!",
        description: "Show up, scan, and enjoy the ultimate padel experience."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-padel-neon font-bold tracking-[0.2em] uppercase text-xs">The Flow</span>
                        <h2 className="text-4xl md:text-5xl font-outfit mt-4">Seamless Booking <br /> From Start to Finished.</h2>
                    </div>
                    <p className="text-white/60 max-w-sm pb-2">
                        We've simplified the padel lifestyle so you can focus on what matters: the game.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-0 w-full h-[1px] bg-white/10 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-padel-neon/20 transition-colors">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
