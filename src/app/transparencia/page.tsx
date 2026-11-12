import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TransparencySection from "@/components/TransparencySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparencia y Balances | Fundación ALTIORA",
  description:
    "Gobierno abierto y rendición pública de cuentas: consulta y descarga nuestras memorias anuales y estados contables auditados.",
};

export default function TransparenciaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1B2A49] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block mb-2">
              Gobierno Abierto
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
              Transparencia Institucional
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-2xl mx-auto">
              Marco legal formal, personería jurídica por Resolución DPJ N.º 4.933, Consejo de Administración ad honorem y estrictas políticas de integridad y protección de datos.
            </p>
          </div>
        </section>

        <TransparencySection />
      </main>
      <Footer />
    </div>
  );
}
