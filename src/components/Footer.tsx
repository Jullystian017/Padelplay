"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-padel-dark border-t border-white/5 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
            {/* Massive Background Text - Luxury Watermark */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none z-0 translate-y-1/2">
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-6">
                            <Link href="/" className="text-4xl font-bold tracking-tighter text-white">
                                PADEL <span className="text-padel-neon font-light italic">PLAY</span>
                            </Link>
                            <p className="text-white/50 text-lg leading-relaxed max-w-sm font-inter">
                                Redefining the padel lifestyle in Jakarta. Premium courts, pro-grade amenities, and a thriving player community.
                            </p>
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-4 max-w-md">
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Join the Club</h4>
                            <div className="relative">
                                <input
                                    type="email"
                                    suppressHydrationWarning
                                    placeholder="Get match invites & updates..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-32 outline-none focus:border-padel-neon transition-colors text-white placeholder:text-white/20"
                                />
                                <button
                                    suppressHydrationWarning
                                    className="absolute right-2 top-2 bottom-2 bg-padel-neon text-padel-dark px-6 rounded-xl font-bold text-sm hover:bg-white hover:text-black transition-all"
                                >
                                    Join
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <div key={i} className="w-12 h-12 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center hover:border-padel-neon group transition-all cursor-pointer hover:-translate-y-1">
                                    <Icon className="w-5 h-5 text-white/40 group-hover:text-padel-neon transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1 hidden lg:block" />

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-8 text-xl font-outfit tracking-tight">Explore</h4>
                        <ul className="space-y-4 text-white/40 text-lg">
                            <li><Link href="/about" className="hover:text-padel-neon transition-colors block">Our Story</Link></li>
                            <li><Link href="/courts" className="hover:text-padel-neon transition-colors block">Locations</Link></li>
                            <li><Link href="/membership" className="hover:text-padel-neon transition-colors block">Packages</Link></li>
                            <li><Link href="/community" className="hover:text-padel-neon transition-colors block">Journal</Link></li>
                            <li><Link href="/shop" className="hover:text-padel-neon transition-colors block">Pro Shop</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-white font-bold mb-8 text-xl font-outfit tracking-tight">Locate Us</h4>
                        <div className="space-y-6 text-white/40 text-lg">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-padel-neon shrink-0 mt-1" />
                                <span className="leading-relaxed">Senopati No. 42, Kebayoran Baru, Jakarta Selatan</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-padel-neon shrink-0" />
                                <span>+62 21 555 1234</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-padel-neon shrink-0" />
                                <span>hello@padelplay.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center">
                    <p className="text-white/20 text-sm font-mediumtracking-widest uppercase">
                        &copy; 2024 PADELPLAY. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}
