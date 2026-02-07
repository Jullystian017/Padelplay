import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />

      <Features />
      <HowItWorks />
      <FAQ />
      <CTASection />

      <Footer />
    </main>
  );
}
