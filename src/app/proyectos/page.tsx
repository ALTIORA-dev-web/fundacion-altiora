import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos y Programas | Fundación ALTIORA",
  description:
    "Descubre los programas e iniciativas territoriales que llevamos adelante junto a las comunidades de Luján de Cuyo.",
};

export default function ProyectosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1B2A49] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block mb-2">
              Territorio e Impacto
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
              Proyectos e Iniciativas
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-2xl mx-auto">
              Cartera de programas misionales y transversales: asistencia alimentaria trazable, capacitación laboral, desarrollo comunitario y voluntariado en Mendoza.
            </p>
          </div>
        </section>

        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}
