import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationSection from "@/components/DonationSection";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Donaciones y Colaboración | Fundación ALTIORA",
  description:
    "Colabora con una donación monetaria o en especie a Fundación ALTIORA. Fondos con trazabilidad total y rendición auditada en Mendoza.",
};

export default function DonarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#111B30] to-[#1B2A49] text-white py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E0A030]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
            <nav className="flex items-center justify-center gap-2 text-xs text-white/60 mb-2">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E0A030]" />
              <span className="text-[#E0A030] font-semibold">Colaboración</span>
            </nav>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E0A030] block">
              Sostén Solidario
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight">
              Colaborar con ALTIORA
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Cada donación dineraria o en especie se gestiona con estricto control contable y se destina a generar oportunidades duraderas en Mendoza.
            </p>
          </div>
        </section>

        <DonationSection />
      </main>
      <Footer />
    </div>
  );
}
