import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VolunteerSection from "@/components/VolunteerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voluntariado | Fundación ALTIORA",
  description:
    "Súmate como voluntario a Fundación ALTIORA. Tu tiempo y tus talentos abren caminos de oportunidad en Mendoza.",
};

export default function VoluntariadoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1B2A49] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block mb-2">
              Participación Activa
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
              Programa de Voluntariado
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-2xl mx-auto">
              Aporta tu vocación, tiempo y conocimientos para impulsar el crecimiento compartido en nuestra comunidad.
            </p>
          </div>
        </section>

        <VolunteerSection />
      </main>
      <Footer />
    </div>
  );
}
