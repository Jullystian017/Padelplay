"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Users, Shield, MapPin, ChevronRight, CheckCircle2, Zap } from "lucide-react";
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

const addonsList = [
    { id: "racket", name: "Professional Racket", price: 0, desc: "Top-tier carbon fiber equipment", icon: Shield },
    { id: "balls", name: "Fresh Ball Pack (3x)", price: 85000, desc: "Official WPT premium balls", icon: Zap },
    { id: "coach", name: "Pro Coach (60min)", price: 250000, desc: "Personalized tactical session", icon: Users }
];

export default function BookingPage() {
    const { id } = useParams();
    const router = useRouter();

    // Generate dates for the selector (Next 14 days starting from today)
    const [availableDates] = useState(() => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push({
                full: date.toISOString().split('T')[0],
                day: date.toLocaleDateString('en-US', { weekday: 'short' }),
                date: date.getDate(),
                month: date.toLocaleDateString('en-US', { month: 'short' })
            });
        }
        return dates;
    });

    const [selectedDate, setSelectedDate] = useState(availableDates[0].full);
    const [selectedSlot, setSelectedSlot] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
    const [step, setStep] = useState(1);

    const court = courts.find(c => c.id === id) || courts[0];

    // Calculate totals
    const addonsTotal = selectedAddons.reduce((acc, addonId) => {
        const addon = addonsList.find(a => a.id === addonId);
        return acc + (addon?.price || 0);
    }, 0);
    const finalTotal = court.price + addonsTotal;

    const toggleAddon = (addonId: string) => {
        setSelectedAddons(prev =>
            prev.includes(addonId)
                ? prev.filter(id => id !== addonId)
                : [...prev, addonId]
        );
    };

    // WhatsApp Redirection
    const handleConfirmBooking = () => {
        const phoneNumber = "6285975296363"; // Ganti dengan nomor WhatsApp admin
        const selectedAddonsText = selectedAddons.length > 0
            ? selectedAddons.map(id => `- ${addonsList.find(a => a.id === id)?.name}`).join('\n')
            : "- No extra add-ons";

        const message = `Halo PadelPlay! Saya ingin booking lapangan:
        
� Atas Nama: ${customerName}
�📍 Lapangan: ${court.name}
📅 Tanggal: ${selectedDate}
⏰ Waktu: ${selectedSlot}

📦 Add-ons:
${selectedAddonsText}

💰 Total: Rp ${finalTotal.toLocaleString()}

Mohon konfirmasinya ya! Terima kasih.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <main className="bg-[#050A18] min-h-screen font-outfit selection:bg-padel-neon selection:text-padel-dark">
            <Navbar />

            <div className="pt-52 pb-24 px-6 md:px-12 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Top Navigation */}
                    <div className="mb-12">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-white/40 hover:text-padel-neon transition-colors group text-sm font-black uppercase tracking-widest"
                        >
                            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            Return
                        </button>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center gap-4 mb-24 overflow-x-auto pb-8 no-scrollbar justify-start">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center gap-6 shrink-0 first:pl-0">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${step >= s ? "bg-padel-neon text-padel-dark scale-110 shadow-[0_0_30px_rgba(223,255,0,0.3)]" : "bg-white/5 text-white/20 border border-white/10"}`}>
                                    {step > s ? <CheckCircle2 className="w-7 h-7" /> : `0${s}`}
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-[10px] uppercase tracking-[0.3em] font-black ${step >= s ? "text-white" : "text-white/20"}`}>
                                        Progress
                                    </span>
                                    <span className={`text-[13px] font-black italic uppercase tracking-tighter ${step >= s ? "text-padel-neon" : "text-white/10"}`}>
                                        {s === 1 ? "Schedule" : s === 2 ? "Add-ons" : "Confirmation"}
                                    </span>
                                </div>
                                {s < 3 && <div className={`w-20 h-[1px] transition-colors duration-500 mx-4 ${step > s ? "bg-padel-neon" : "bg-white/10"}`} />}
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Main Interaction Area */}
                        <div className="lg:col-span-8">
                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-12"
                                >
                                    {/* Name Input Section */}
                                    <div className="space-y-8">
                                        <h2 className="text-3xl font-black text-white flex items-center gap-4 italic uppercase tracking-tighter">
                                            <Users className="w-8 h-8 text-padel-neon" />
                                            01. Your Name
                                        </h2>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                value={customerName}
                                                onChange={(e) => setCustomerName(e.target.value)}
                                                placeholder="Enter your full name"
                                                className="w-full bg-white/5 border-2 border-white/5 rounded-3xl px-10 py-8 outline-none focus:border-padel-neon/50 focus:bg-white/[0.08] transition-all text-white text-2xl font-black placeholder:text-white/10 placeholder:italic"
                                            />
                                            {customerName && (
                                                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-padel-neon">
                                                    <CheckCircle2 className="w-8 h-8 drop-shadow-[0_0_10px_rgba(223,255,0,0.5)]" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-3xl font-black text-white flex items-center gap-4 italic uppercase tracking-tighter">
                                                <CalendarIcon className="w-8 h-8 text-padel-neon" />
                                                02. Pick a Date
                                            </h2>
                                        </div>

                                        {/* Horizontal Date Scroller */}
                                        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
                                            {availableDates.map((d) => (
                                                <button
                                                    key={d.full}
                                                    onClick={() => setSelectedDate(d.full)}
                                                    className={`shrink-0 w-24 p-6 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center gap-1 group ${selectedDate === d.full ? "bg-padel-neon border-padel-neon shadow-[0_15px_30px_rgba(223,255,0,0.2)]" : "bg-white/5 border-white/5 hover:border-white/20"}`}
                                                >
                                                    <span className={`text-[10px] uppercase font-black tracking-widest ${selectedDate === d.full ? "text-padel-dark/60" : "text-white/20 group-hover:text-white/40"}`}>
                                                        {d.month}
                                                    </span>
                                                    <span className={`text-3xl font-black italic transition-colors ${selectedDate === d.full ? "text-padel-dark" : "text-white"}`}>
                                                        {d.date}
                                                    </span>
                                                    <span className={`text-[10px] uppercase font-black tracking-widest ${selectedDate === d.full ? "text-padel-dark/60" : "text-white/40 group-hover:text-white"}`}>
                                                        {d.day}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <h2 className="text-3xl font-black text-white flex items-center gap-4 italic uppercase tracking-tighter">
                                            <Clock className="w-8 h-8 text-padel-neon" />
                                            03. Select Time
                                        </h2>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {timeSlots.map((slot) => {
                                                // Check if slot is in the past
                                                const isToday = selectedDate === availableDates[0].full;
                                                const now = new Date();
                                                const [slotHours, slotMinutes] = slot.time.split(':').map(Number);
                                                const slotTime = new Date();
                                                slotTime.setHours(slotHours, slotMinutes, 0, 0);

                                                const isPast = isToday && slotTime < now;
                                                const isSelected = selectedSlot === slot.time;

                                                return (
                                                    <button
                                                        key={slot.time}
                                                        disabled={isPast}
                                                        onClick={() => setSelectedSlot(slot.time)}
                                                        className={`p-8 rounded-2xl border-2 transition-all duration-300 text-center group relative overflow-hidden ${isPast ? "opacity-20 grayscale border-white/5 cursor-not-allowed" : isSelected ? "bg-padel-neon border-padel-neon" : "bg-white/5 border-white/5 hover:border-white/20"}`}
                                                    >
                                                        <span className={`block text-2xl font-black mb-1 transition-colors ${isSelected ? "text-padel-dark" : "text-white"}`}>
                                                            {slot.time}
                                                        </span>
                                                        <span className={`text-[10px] uppercase tracking-widest font-black transition-colors ${isSelected ? "text-padel-dark/60" : "text-white/30 group-hover:text-white/60"}`}>
                                                            {slot.period}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <button
                                            onClick={() => router.push('/courts')}
                                            className="flex-1 bg-white/5 border border-white/10 py-6 rounded-2xl text-white font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                                        >
                                            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                            Back
                                        </button>
                                        <button
                                            disabled={!selectedDate || !selectedSlot || !customerName}
                                            onClick={() => setStep(2)}
                                            className="flex-[2] group bg-padel-neon text-padel-dark py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm hover:bg-white transition-all disabled:opacity-20 disabled:grayscale flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(223,255,0,0.15)]"
                                        >
                                            Next Session
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-12"
                                >
                                    <div className="flex justify-between items-end mb-8">
                                        <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-tight">Enhance Your<br /><span className="text-padel-neon">Experience</span></h2>
                                    </div>

                                    <div className="grid gap-6">
                                        {addonsList.map((addon) => {
                                            const isSelected = selectedAddons.includes(addon.id);
                                            return (
                                                <div
                                                    key={addon.id}
                                                    onClick={() => toggleAddon(addon.id)}
                                                    className={`group p-8 rounded-[2rem] border-2 transition-all duration-500 flex items-center justify-between cursor-pointer ${isSelected ? "bg-padel-neon/10 border-padel-neon shadow-[0_0_30px_rgba(223,255,0,0.1)]" : "bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]"}`}
                                                >
                                                    <div className="flex items-center gap-6">
                                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isSelected ? "bg-padel-neon text-padel-dark scale-110" : "bg-white/5 text-padel-neon group-hover:scale-105"}`}>
                                                            <addon.icon className="w-8 h-8" />
                                                        </div>
                                                        <div>
                                                            <h4 className={`text-xl font-bold mb-1 transition-colors ${isSelected ? "text-padel-neon" : "text-white"}`}>{addon.name}</h4>
                                                            <p className="text-white/40 text-[13px]">{addon.desc}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className={`font-black mb-3 transition-colors ${isSelected ? "text-white" : "text-white/60"}`}>
                                                            {addon.price === 0 ? "FREE" : `+Rp ${addon.price.toLocaleString()}`}
                                                        </p>
                                                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isSelected ? "bg-padel-neon border-padel-neon" : "border-white/10 group-hover:border-white/30"}`}>
                                                            {isSelected && <CheckCircle2 className="w-6 h-6 text-padel-dark" />}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="flex gap-6">
                                        <button onClick={() => setStep(1)} className="flex-1 bg-white/5 border border-white/10 py-6 rounded-2xl text-white font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all">Back</button>
                                        <button onClick={() => setStep(3)} className="flex-[2] bg-padel-neon text-padel-dark py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-[0_15px_30px_rgba(223,255,0,0.2)]">Final Review</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-12"
                                >
                                    <div className="text-center py-8">
                                        <span className="text-padel-neon font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Almost Reserved</span>
                                        <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase">Complete Your <span className="text-padel-neon">Booking.</span></h2>
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-padel-neon to-transparent rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                                        <div className="relative bg-[#0c1222]/80 backdrop-blur-2xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 space-y-10">
                                            <div className="grid md:grid-cols-2 gap-10">
                                                <div className="space-y-8">
                                                    <div className="space-y-2">
                                                        <p className="text-[10px] uppercase tracking-widest font-black text-white/20">Selected Court</p>
                                                        <p className="text-3xl font-black text-white italic">{court.name}</p>
                                                        <div className="flex items-center gap-2 text-white/40">
                                                            <MapPin className="w-4 h-4 text-padel-neon" />
                                                            <span className="font-bold text-xs uppercase tracking-widest">{court.location}</span>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p className="text-[10px] uppercase tracking-widest font-black text-white/20">Schedule</p>
                                                        <p className="text-2xl font-black text-padel-neon uppercase italic leading-none">{selectedDate}</p>
                                                        <p className="text-xl font-black text-white leading-none">AT {selectedSlot}</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-8">
                                                    <div className="space-y-4">
                                                        <p className="text-[10px] uppercase tracking-widest font-black text-white/20">Selected Add-ons</p>
                                                        <div className="space-y-2">
                                                            {selectedAddons.length > 0 ? selectedAddons.map(id => {
                                                                const addon = addonsList.find(a => a.id === id);
                                                                return (
                                                                    <div key={id} className="flex justify-between items-center text-sm">
                                                                        <span className="text-white/60 font-bold">{addon?.name}</span>
                                                                        <span className="text-white font-black">{addon?.price === 0 ? "FREE" : `Rp ${addon?.price.toLocaleString()}`}</span>
                                                                    </div>
                                                                );
                                                            }) : <p className="text-white/20 italic text-sm">No extra add-ons selected</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                                                <div>
                                                    <p className="text-[10px] uppercase tracking-widest font-black text-white/20 mb-3">Total Reservation Fee</p>
                                                    <p className="text-5xl md:text-6xl font-black text-white tracking-tighter italic leading-none">Rp {finalTotal.toLocaleString()}</p>
                                                </div>
                                                <div className="text-right hidden md:block">
                                                    <div className="flex items-center gap-2 text-padel-neon font-black uppercase text-[10px] tracking-widest mb-1 justify-end">
                                                        <Shield className="w-4 h-4" />
                                                        Instant Confirmation
                                                    </div>
                                                    <p className="text-white/30 text-xs">Redirect to WhatsApp for Payment</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <button
                                            onClick={handleConfirmBooking}
                                            className="w-full bg-[#25D366] text-white py-8 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center gap-4 group"
                                        >
                                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.447 1.441 5.35 1.442h.005c5.344 0 9.694-4.35 9.697-9.695.002-2.59-1.008-5.025-2.846-6.864-1.837-1.838-4.272-2.848-6.865-2.849-5.344 0-9.694 4.35-9.697 9.695-.001 2.046.541 4.041 1.571 5.768l-.94 3.433 3.527-.93zM16.503 12.015c-.461-.23-2.733-1.348-3.156-1.501-.424-.154-.73-.231-1.037.231-.307.462-1.19 1.499-1.459 1.807-.269.308-.538.346-.999.115-.461-.23-1.947-.717-3.71-2.288-1.373-1.225-2.3-2.737-2.569-3.199-.269-.462-.029-.711.202-.94.208-.207.461-.538.692-.807.231-.269.308-.462.461-.769.154-.308.077-.577-.038-.808-.115-.231-1.037-2.5-1.421-3.423-.375-.899-.757-.777-1.037-.777-.269 0-.576-.038-.884-.038-.307 0-.807.115-1.23.577-.423.461-1.613 1.576-1.613 3.843 0 2.268 1.652 4.459 1.883 4.766.231.308 3.251 4.965 7.876 6.96.115.154 2.152.885 2.536.885.384 0 1.23-.385 1.422-1.077.192-.692.192-1.284.134-1.407-.058-.123-.211-.192-.673-.423z" />
                                                </svg>
                                            </div>
                                            Confirm via WhatsApp
                                        </button>
                                        <button onClick={() => setStep(2)} className="w-full py-4 text-white/20 hover:text-white transition-colors font-bold uppercase tracking-[0.4em] text-[10px]">Back to Enhancement</button>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar Summary */}
                        <div className="lg:col-span-4 lg:block hidden">
                            <div className="sticky top-32 group">
                                <div className="absolute -inset-1 bg-padel-neon/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                                <div className="relative glass-morphism p-8 rounded-[3rem] border border-white/10 backdrop-blur-3xl">
                                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                                        <Image src={court.image} alt={court.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] to-transparent opacity-60"></div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">{court.name}</h3>
                                            <div className="flex items-center gap-2 text-white/40 text-[10px]">
                                                <MapPin className="w-3.5 h-3.5 text-padel-neon" />
                                                <span className="font-bold tracking-[0.2em] uppercase">{court.location}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-8 border-t border-white/5">
                                            <div className="flex justify-between items-center">
                                                <span className="text-white/20 text-[10px] uppercase font-black tracking-[0.2em]">Hourly Rate</span>
                                                <span className="text-white font-black italic">Rp {court.price.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-white/20 text-[10px] uppercase font-black tracking-[0.2em]">Add-ons</span>
                                                <span className={`font-black italic transition-colors ${addonsTotal > 0 ? "text-padel-neon" : "text-white/20"}`}>
                                                    +Rp {addonsTotal.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="pt-8 mt-6 border-t border-padel-neon/20 flex flex-col gap-1">
                                            <span className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em]">Grand Total</span>
                                            <span className="text-4xl font-black text-white italic tracking-tighter leading-none">
                                                Rp {finalTotal.toLocaleString()}
                                            </span>
                                        </div>
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
