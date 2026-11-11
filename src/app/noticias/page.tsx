import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias y Novedades | Fundación ALTIORA",
  description:
    "Enterate de las últimas actividades, talleres comunitarios, convenios y novedades de Fundación ALTIORA en Mendoza.",
};

export default function NoticiasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1B2A49] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block mb-2">
              Actualidad
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
              Noticias y Novedades
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-2xl mx-auto">
              Seguimiento del día a día, historias de impacto, capacitaciones y eventos en el territorio.
            </p>
          </div>
        </section>

        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
