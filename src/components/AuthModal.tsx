"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, Github, Chrome } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleEmailAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                onClose();
            } else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                alert("Check your email for confirmation link!");
                onClose();
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#050A18]/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-[#0c1222] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-outfit font-bold text-white mb-3">
                                {isLogin ? "Welcome Back" : "Join PadelPlay"}
                            </h2>
                            <p className="text-white/40 text-sm">
                                {isLogin ? "Login to access your bookings" : "Create an account to start playing"}
                            </p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-xs text-center">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleEmailAuth} className="space-y-4">
                            <div className="space-y-2">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-padel-neon transition-colors text-white text-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-padel-neon transition-colors text-white text-sm"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-padel-neon text-padel-dark py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_0_30px_rgba(223,255,0,0.2)]"
                            >
                                {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
                            </button>
                        </form>

                        <div className="relative my-8 text-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/5"></div>
                            </div>
                            <span className="relative bg-[#0c1222] px-4 text-[10px] uppercase tracking-widest text-white/20 font-bold">Or continue with</span>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <button
                                onClick={handleGoogleLogin}
                                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-4 rounded-2xl text-white text-sm font-bold hover:bg-white/10 transition-all"
                            >
                                <Chrome className="w-5 h-5" />
                                Google
                            </button>
                        </div>

                        <p className="mt-8 text-center text-white/40 text-xs">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-padel-neon font-bold hover:underline"
                            >
                                {isLogin ? "Sign Up" : "Login"}
                            </button>
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
