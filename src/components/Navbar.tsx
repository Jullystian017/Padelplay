"use client";

import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${isScrolled ? "bg-padel-dark/80 backdrop-blur-lg py-3" : "bg-transparent"}`}>
            {/* Brand */}
            <div className="flex items-center gap-8">
                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
                    <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/courts" className="hover:text-white transition-colors">Courts</Link></li>
                    <li><Link href="/membership" className="hover:text-white transition-colors">Membership</Link></li>
                </ul>
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    PADEL <span className="text-padel-neon font-light italic">PLAY</span>
                </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                
                <button className="bg-padel-neon text-padel-dark px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-all group">
                    Book Now
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </button>
            </div>
        </nav>
    );
}
