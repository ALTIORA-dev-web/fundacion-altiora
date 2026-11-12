import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MissionAndValues from "@/components/MissionAndValues";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Misión, Visión y Valores | Fundación ALTIORA",
  description:
    "Promovemos el desarrollo integral y la inclusión social en Mendoza mediante programas de asistencia, alimentación, educación y capacitación.",
};

export default function MisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Banner de cabecera con navegación breadcrumb */}
        <section className="bg-gradient-to-b from-[#111B30] to-[#1B2A49] text-white py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#E0A030]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
            <nav className="flex items-center justify-center gap-2 text-xs text-white/60 mb-2">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E0A030]" />
              <span className="text-[#E0A030] font-semibold">Institucional</span>
            </nav>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E0A030] block">
              Identidad Estratégica
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight">
              Nuestra Misión y Principios
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Ascender abriendo caminos: nuestro propósito, valores y compromiso social inquebrantable con la comunidad de Mendoza.
            </p>
          </div>
        </section>

        {/* Contenido de Misión y Valores */}
        <MissionAndValues />
      </main>
      <Footer />
    </div>
  );
}
