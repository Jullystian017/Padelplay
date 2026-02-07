"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Users, Shield, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

// Placeholder data - in a real app this would come from Supabase
const courts = [
    {
        id: "1",
        name: "Panoramic Pro-1",
        type: "Outdoor",
        surface: "WPT Mondo",
        location: "Kebayoran Baru",
        image: "/image/photo-1646649853703-7645147474ba.avif",
        price: 350000,
    },
    {
        id: "2",
        name: "Center Court Indoor",
        type: "Indoor",
        surface: "WPT Mondo",
        location: "Senopati",
        image: "/image/photo-1646649852033-7e0f3d679f8b.avif",
        price: 450000,
    }
];

const timeSlots = [
    { time: "07:00", period: "Morning" },
    { time: "08:30", period: "Morning" },
    { time: "10:00", period: "Morning" },
    { time: "16:00", period: "Evening" },
    { time: "17:30", period: "Evening" },
    { time: "19:00", period: "Night" },
    { time: "20:30", period: "Night" },
];

export default function BookingPage() {
    const { id } = useParams();
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("");
    const [step, setStep] = useState(1);

    const court = courts.find(c => c.id === id) || courts[0];

    // Protect the route
    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/courts");
        }
    }, [user, authLoading, router]);

    if (authLoading) return <div className="min-h-screen bg-[#050A18]" />;

    return (
        <main className="bg-[#050A18] min-h-screen">
            <Navbar />

            <div className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Stepper */}
                    <div className="flex items-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center gap-4 shrink-0">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= s ? "bg-padel-neon text-padel-dark" : "bg-white/5 text-white/20 border border-white/10"}`}>
                                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                                </div>
                                <span className={`text-[10px] uppercase tracking-widest font-black ${step >= s ? "text-white" : "text-white/20"}`}>
                                    {s === 1 ? "Schedule" : s === 2 ? "Add-ons" : "Confirm"}
                                </span>
                                {s < 3 && <div className="w-12 h-[1px] bg-white/10" />}
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Main Interaction Area */}
                        <div className="lg:col-span-8 space-y-12">
                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-12"
                                >
                                    <div>
                                        <h2 className="text-3xl font-outfit text-white mb-8 flex items-center gap-4">
                                            <CalendarIcon className="w-8 h-8 text-padel-neon" />
                                            Pick a Date
                                        </h2>
                                        <input
                                            type="date"
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            className="w-full md:w-fit bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-padel-neon transition-all text-white font-bold [color-scheme:dark]"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="text-3xl font-outfit text-white mb-8 flex items-center gap-4">
                                            <Clock className="w-8 h-8 text-padel-neon" />
                                            Select Time
                                        </h2>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot.time}
                                                    onClick={() => setSelectedSlot(slot.time)}
                                                    className={`p-6 rounded-2xl border transition-all text-center group ${selectedSlot === slot.time ? "bg-padel-neon border-padel-neon shadow-[0_0_20px_rgba(223,255,0,0.2)]" : "bg-white/5 border-white/10 hover:border-white/30"}`}
                                                >
                                                    <span className={`block text-xl font-bold mb-1 ${selectedSlot === slot.time ? "text-padel-dark" : "text-white"}`}>
                                                        {slot.time}
                                                    </span>
                                                    <span className={`text-[10px] uppercase tracking-widest font-bold ${selectedSlot === slot.time ? "text-padel-dark/60" : "text-white/20 group-hover:text-white/40"}`}>
                                                        {slot.period}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        disabled={!selectedDate || !selectedSlot}
                                        onClick={() => setStep(2)}
                                        className="w-full bg-padel-neon text-padel-dark py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all disabled:opacity-20 disabled:grayscale"
                                    >
                                        Next Component
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-12"
                                >
                                    <h2 className="text-3xl font-outfit text-white">Enhance Your Experience</h2>
                                    {/* Mock Addons */}
                                    <div className="space-y-4">
                                        {["Professional Racket", "Fresh Ball Pack (3x)", "Pro Coach (60min)"].map((addon) => (
                                            <div key={addon} className="glass-morphism p-6 rounded-2xl border-white/5 flex items-center justify-between group cursor-pointer hover:border-padel-neon/20 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-padel-neon">
                                                        <Shield className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold">{addon}</h4>
                                                        <p className="text-white/40 text-xs">Premium quality equipment</p>
                                                    </div>
                                                </div>
                                                <button className="text-[10px] font-black uppercase tracking-widest text-padel-neon group-hover:bg-padel-neon group-hover:text-padel-dark px-4 py-2 border border-padel-neon/20 rounded-lg transition-all">
                                                    Add
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="flex-1 border border-white/10 py-5 rounded-2xl text-white font-bold hover:bg-white/5 transition-all">Back</button>
                                        <button onClick={() => setStep(3)} className="flex-[2] bg-padel-neon text-padel-dark py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all">Review & Pay</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center py-12">
                                        <h2 className="text-4xl font-outfit text-white mb-4">You're almost there!</h2>
                                        <p className="text-white/40">Review your booking and complete payment to secure your court.</p>
                                    </div>

                                    <div className="glass-morphism p-10 rounded-[2.5rem] border-white/10 space-y-6">
                                        <div className="flex justify-between items-center text-white pb-6 border-b border-white/5">
                                            <span className="text-white/40 text-sm">Court</span>
                                            <span className="font-bold text-xl">{court.name}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-white pb-6 border-b border-white/5">
                                            <span className="text-white/40 text-sm">Schedule</span>
                                            <span className="font-bold">{selectedDate} @ {selectedSlot}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-white pb-6 border-b border-white/5">
                                            <span className="text-white/40 text-sm">Price</span>
                                            <span className="font-bold">Rp {court.price.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-4">
                                            <span className="text-padel-neon font-black uppercase tracking-widest text-xs">Final Amount</span>
                                            <span className="text-3xl font-black text-white">Rp {court.price.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => router.push('/booking/success')}
                                        className="w-full bg-padel-neon text-padel-dark py-6 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-white transition-all shadow-[0_0_40px_rgba(223,255,0,0.3)]"
                                    >
                                        Complete Booking
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar Summary */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 glass-morphism p-8 rounded-[2.5rem] border-white/10">
                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                                    <Image src={court.image} alt={court.name} fill className="object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{court.name}</h3>
                                <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
                                    <MapPin className="w-4 h-4" />
                                    {court.location}
                                </div>

                                <div className="space-y-4 pt-6 border-t border-white/5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Rate</span>
                                        <span className="text-white font-bold">Rp {court.price.toLocaleString()}/hr</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">Platform Fee</span>
                                        <span className="text-padel-neon font-bold">Free</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
