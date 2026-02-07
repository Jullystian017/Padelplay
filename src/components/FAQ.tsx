"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How do I book a court?",
        answer: "Simply choose your location and preferred time slot on our landing page, then proceed to the secure checkout via Midtrans."
    },
    {
        question: "What is the cancellation policy?",
        answer: "You can cancel your booking up to 24 hours before the match for a full refund. Cancellations after that will incur a 50% fee."
    },
    {
        question: "Do you provide padel rackets?",
        answer: "Yes! Every court booking includes high-quality rental rackets for all players. You can also bring your own if you prefer."
    },
    {
        question: "Are there changing rooms and showers?",
        answer: "Absolutely. All our premium locations are equipped with luxury changing rooms, towels, and hot showers for your comfort."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-padel-dark/30">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-padel-neon font-bold tracking-[0.2em] uppercase text-xs">Got Questions?</span>
                    <h2 className="text-4xl md:text-5xl font-outfit mt-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-morphism rounded-2xl overflow-hidden border-white/5">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-lg">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-padel-neon transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
