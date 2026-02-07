import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />

      {/* Search / Filter Section (Quick Action) */}
      <section className="relative z-30 -mt-12 px-6 md:px-12 flex justify-center">
        <div className="glass-morphism w-full max-w-6xl p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 border-white/10 shadow-2xl">
          <div className="flex-1 w-full space-y-2">
            <label className="text-xs uppercase tracking-widest text-padel-neon font-bold">Location</label>
            <select className="bg-transparent text-white border-b border-white/20 w-full py-2 outline-none appearance-none cursor-pointer focus:border-padel-neon transition-colors">
              <optgroup label="Jakarta">
                <option className="bg-padel-dark text-white">Jakarta Selatan</option>
                <option className="bg-padel-dark text-white">Jakarta Barat</option>
              </optgroup>
              <optgroup label="Lainnya">
                <option className="bg-padel-dark text-white">Tangerang Selatan</option>
                <option className="bg-padel-dark text-white">Bandung</option>
              </optgroup>
            </select>
          </div>
          <div className="flex-1 w-full space-y-2">
            <label className="text-xs uppercase tracking-widest text-padel-neon font-bold">Date</label>
            <input type="date" className="bg-transparent text-white border-b border-white/20 w-full py-2 outline-none cursor-pointer focus:border-padel-neon transition-colors" />
          </div>
          <div className="flex-1 w-full space-y-2">
            <label className="text-xs uppercase tracking-widest text-padel-neon font-bold">Players</label>
            <select className="bg-transparent text-white border-b border-white/20 w-full py-2 outline-none appearance-none cursor-pointer focus:border-padel-neon transition-colors">
              <option className="bg-padel-dark text-white">2 Players</option>
              <option className="bg-padel-dark text-white">4 Players</option>
            </select>
          </div>
          <button className="bg-padel-neon text-padel-dark px-12 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(223,255,0,0.3)] group flex items-center justify-center gap-2">
            Find Court
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <FAQ />
      <CTASection />

      <Footer />
    </main>
  );
}
