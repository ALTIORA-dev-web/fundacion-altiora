import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MissionAndValues from "@/components/MissionAndValues";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Misión e Identidad | Fundación ALTIORA",
  description:
    "Promovemos la inclusión social, la igualdad de oportunidades y el desarrollo integral en Luján de Cuyo, Mendoza. Conoce el significado de nuestra identidad institucional y valores.",
};

export default function MisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Banner de cabecera de la página */}
        <section className="bg-[#1B2A49] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block mb-2">
              Institucional
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
              Misión e Identidad
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-2xl mx-auto">
              Ascender abriendo caminos: nuestro propósito, valores y el significado de los símbolos que nos representan.
            </p>
          </div>
        </section>

        {/* Contenido completo de Misión, Valores y Manual de Marca */}
        <MissionAndValues />
      </main>
      <Footer />
    </div>
  );
}
