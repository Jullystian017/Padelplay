"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Shield, Wind, Zap, MapPin, ArrowUpRight } from "lucide-react";

const courts = [
    {
        id: 1,
        name: "Panoramic Pro-1",
        type: "Outdoor",
        surface: "WPT Mondo",
        location: "Kebayoran Baru",
        image: "/image/premium_photo-1708692921141-2d7e131682f2.avif",
        price: "Rp 350k/hr",
        tags: ["Panoramic", "12mm Glass"]
    },
    {
        id: 2,
        name: "Center Court Indoor",
        type: "Indoor",
        surface: "WPT Mondo",
        location: "Senopati",
        image: "/image/photo-1646649853703-7645147474ba.avif",
        price: "Rp 450k/hr",
        tags: ["A/C", "Full Panoramic"]
    },
    {
        id: 3,
        name: "Training Court A",
        type: "Outdoor",
        surface: "Standard Blue",
        location: "Senopati",
        image: "/image/photo-1646649852033-7e0f3d679f8b.avif",
        price: "Rp 250k/hr",
        tags: ["Shadow Protection"]
    }
];

export default function CourtsPage() {
    const [filter, setFilter] = useState("All");
    const router = useRouter();

    const filteredCourts = filter === "All"
        ? courts
        : courts.filter(c => c.type === filter);

    const handleBooking = (courtId: number) => {
        router.push(`/booking/${courtId}`);
    };

    return (
        <main className="bg-[#050A18] min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <span className="text-padel-neon font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
                                Explore Facilities
                            </span>
                            <h1 className="text-4xl md:text-6xl font-outfit text-white">
                                Our <span className="text-white/60">Courts Catalog.</span>
                            </h1>
                        </div>

                        {/* Filter UI */}
                        <div className="flex gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
                            {["All", "Indoor", "Outdoor"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${filter === f ? "bg-padel-neon text-padel-dark" : "text-white/40 hover:text-white"}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredCourts.map((court) => (
                                <motion.div
                                    key={court.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative"
                                >
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#080B13]">
                                        <Image
                                            src={court.image}
                                            alt={court.name}
                                            fill
                                            className="object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 grayscale-[40%] group-hover:grayscale-0"
                                        />

                                        {/* Overlay Content */}
                                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#050A18] via-[#050A18]/80 to-transparent">
                                            <div className="flex justify-between items-end">
                                                <div className="space-y-3">
                                                    <div className="flex gap-2">
                                                        {court.tags.map(tag => (
                                                            <span key={tag} className="text-[9px] uppercase tracking-wider font-bold text-padel-neon border border-padel-neon/30 px-2 py-1 rounded-md">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white group-hover:text-padel-neon transition-colors duration-300">
                                                        {court.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-white/40 text-[13px]">
                                                        <MapPin className="w-4 h-4" />
                                                        {court.location}
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleBooking(court.id)}
                                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-padel-neon transition-all duration-500"
                                                >
                                                    <ArrowUpRight className="w-6 h-6 text-black" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Price Tag */}
                                        <div className="absolute top-6 right-6 glass-morphism px-4 py-2 rounded-xl border-white/10">
                                            <span className="text-sm font-bold text-white">{court.price}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
