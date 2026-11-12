"use client";

import React from "react";
import { FileText, Download, ShieldCheck, CheckCircle } from "lucide-react";

export default function TransparencySection() {
  const pillars = [
    {
      title: "Personería Jurídica Aprobada",
      badge: "Resolución 4.933",
      category: "Marco Jurídico",
      description:
        "Fundación constituida conforme al Código Civil y Comercial de la Nación (arts. 193-224), autorizada a funcionar por la Dirección de Personas Jurídicas de Mendoza (Expediente EX-2026-06638644).",
      status: "Acreditado oficial",
      statusColor: "bg-emerald-100 text-emerald-800",
    },
    {
      title: "Consejo de Administración Ad Honorem",
      badge: "Gobierno Colegiado",
      category: "Gobernanza",
      description:
        "Presidente: Dante Gabriel Moner · Secretaria: Georgina Macarena Burgos · Tesorero: Carlos José Caselles. Conforme al estatuto (art. 6), los consejeros no perciben remuneración por sus funciones.",
      status: "Dedicación estatutaria",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "Protección de Datos y Personas",
      badge: "Ley 25.326",
      category: "Ética y Privacidad",
      description:
        "Protocolo estricto de consentimiento informado, minimización de datos y resguardo de la intimidad familiar. Prohibición absoluta de publicar imágenes o datos sensibles como condición para recibir asistencia.",
      status: "Política interna",
      statusColor: "bg-purple-100 text-purple-800",
    },
    {
      title: "Calendario de Rendición y Balances",
      badge: "Cierre 30/07/2027",
      category: "Contabilidad y Control",
      description:
        "El primer ejercicio estatutario concluye el 30/07/2027. Toda memoria anual, inventario y balance certificado por profesional matriculado se publicará íntegramente tras su tratamiento formal.",
      status: "Obligación reglada",
      statusColor: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section id="transparencia" className="py-24 bg-[#F7F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E0A030]" />
            <span>Gobierno Abierto y Legalidad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading">
            Transparencia y Ética Institucional
          </h2>

          <p className="text-base text-[#4A5568]">
            La confianza pública de nuestra comunidad, donantes y colaboradores se funda en
            hechos y normas claras. Compartimos de manera transparente nuestras bases legales,
            autoridades y políticas de gestión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EBE3D3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E0A030] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-bold text-[#1B2A49] font-heading">
                    {item.title}
                  </h3>
                </div>

                <span className="inline-block text-xs font-bold text-[#1B2A49] bg-[#F7F3EA] px-2.5 py-1 rounded-md border border-[#EBE3D3]">
                  {item.badge}
                </span>

                <p className="text-xs text-[#4A5568] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EBE3D3] flex items-center justify-between">
                <span className="text-[11px] text-[#4A5568] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#1B2A49]" />
                  <span>Documentación oficial archivada</span>
                </span>

                <a
                  href="/contacto"
                  className="text-xs font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors"
                >
                  Consultar legajo &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Garantía Institucional */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#EBE3D3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-[#E0A030] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#1B2A49]">
              En cumplimiento estricto con las normas de la Dirección de Personas Jurídicas de Mendoza (Ley Provincial 9.577) y estándares de integridad social.
            </p>
          </div>
          <a
            href="/contacto"
            className="text-xs font-bold text-[#1B2A49] hover:text-[#E0A030] whitespace-nowrap"
          >
            Canal de Transparencia &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
