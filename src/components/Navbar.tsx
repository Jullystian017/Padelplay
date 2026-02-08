"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
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

            {/* Center: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <Link href="/" className="text-xl md:text-2xl font-black text-white flex items-center gap-1 drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
                    PADEL<span className="text-padel-neon italic font-light">PLAY</span>
                </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 md:gap-6">

                <Link
                    href="/courts"
                    className="bg-padel-neon text-padel-dark px-4 py-2 md:px-6 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider flex items-center gap-2 hover:bg-white hover:text-black transition-all group shadow-[0_0_20px_rgba(223,255,0,0.2)]"
                >
                    <span className="hidden sm:inline">Book Now</span>
                    <span className="sm:hidden">Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:rotate-45 transition-transform" />
                </Link>
            </div>

        </nav>
    );
}
