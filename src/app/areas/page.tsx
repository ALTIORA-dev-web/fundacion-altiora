import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionAreas from "@/components/ActionAreas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Áreas de Acción | Fundación ALTIORA",
  description:
    "Conoce nuestros 6 ejes de trabajo: asistencia social, educación y formación laboral, salud y bienestar, fortalecimiento comunitario, voluntariado y desarrollo sostenible.",
};

export default function AreasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1B2A49] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block mb-2">
              Ejes Estratégicos
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
              Nuestras Áreas de Acción
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-2xl mx-auto">
              Intervenimos de manera multidisciplinaria sobre las causas raíz de la vulnerabilidad en Luján de Cuyo y Mendoza.
            </p>
          </div>
        </section>

        <ActionAreas />
      </main>
      <Footer />
    </div>
  );
}
