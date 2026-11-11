import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonationSection from "@/components/DonationSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donaciones | Fundación ALTIORA",
  description:
    "Colabora con una donación única o mensual a Fundación ALTIORA. Tu aporte se transforma en educación, alimentos y oportunidades en Mendoza.",
};

export default function DonarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1B2A49] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block mb-2">
              Sostén Solidario
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
              Hacer una Donación
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-2xl mx-auto">
              Cada aporte llega directo a las familias que más lo necesitan con rendición de cuentas pública y transparente.
            </p>
          </div>
        </section>

        <DonationSection />
      </main>
      <Footer />
    </div>
  );
}
