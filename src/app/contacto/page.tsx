import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Fundación ALTIORA",
  description:
    "Comunícate con Fundación ALTIORA en Luján de Cuyo, Mendoza. Envíanos tu consulta, solicitud de asistencia o propuesta de alianza.",
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1B2A49] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block mb-2">
              Canales Abiertos
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
              Contacto y Asistencia
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-2xl mx-auto">
              Nuestras puertas están abiertas. Escríbenos para consultas institucionales, alianzas o pedidos de asistencia.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
