"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, LogOut, User as UserIcon, ChevronDown, Settings, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { user, signOut } = useAuth();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${isScrolled ? "bg-[#050A18]/80 backdrop-blur-lg py-3" : "bg-gradient-to-b from-[#050A18]/90 via-[#050A18]/40 to-transparent"}`}>
            {/* Left: Nav Links (Desktop) */}
            <div className="flex items-center">
                <ul className="hidden lg:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-widest text-white/50">
                    <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                    <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                    <li><Link href="/courts" className="hover:text-white transition-colors">Courts</Link></li>
                </ul>
                <button className="lg:hidden text-white p-2">
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Center: Logo (Shifted slightly right) */}
            <div className="absolute left-1/2 md:left-[53%] -track-tighter -translate-x-1/2">
                <Link href="/" className="text-xl md:text-2xl font-black text-white flex items-center gap-1 drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
                    PADEL<span className="text-padel-neon italic font-light">PLAY</span>
                </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 md:gap-6">
                {user ? (
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden relative group-hover:border-padel-neon/50 transition-colors">
                                {user.user_metadata.avatar_url ? (
                                    <Image src={user.user_metadata.avatar_url} alt="Avatar" fill className="object-cover" />
                                ) : (
                                    <UserIcon className="w-5 h-5 text-white/20 group-hover:text-padel-neon transition-colors" />
                                )}
                            </div>
                            <ChevronDown className={`w-4 h-4 text-white/20 group-hover:text-white transition-all duration-300 ${isUserMenuOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {isUserMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 mt-4 w-64 bg-[#0c1222] border border-white/10 rounded-[2rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden"
                                >
                                    <div className="px-4 py-3 border-b border-white/5 mb-2">
                                        <p className="text-[10px] uppercase tracking-widest font-black text-white/20 mb-1">Logged in as</p>
                                        <p className="text-sm font-bold text-white truncate">{user.email}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm group">
                                            <Calendar className="w-4 h-4 group-hover:text-padel-neon" />
                                            Bookings
                                        </button>
                                    </div>

                                    <div className="mt-2 pt-2 border-t border-white/5">
                                        <button
                                            onClick={() => {
                                                signOut();
                                                setIsUserMenuOpen(false);
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all text-sm group"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Sign Out
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsAuthModalOpen(true)}
                        className="text-[11px] font-black uppercase tracking-widest text-white hover:text-padel-neon transition-colors hidden sm:block"
                    >
                        Sign In
                    </button>
                )}

                <Link
                    href="/courts"
                    className="bg-padel-neon text-padel-dark px-4 py-2 md:px-6 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider flex items-center gap-2 hover:bg-white hover:text-black transition-all group shadow-[0_0_20px_rgba(223,255,0,0.2)]"
                >
                    <span className="hidden sm:inline">Book Now</span>
                    <span className="sm:hidden">Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:rotate-45 transition-transform" />
                </Link>
            </div>

            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </nav>
    );
}
