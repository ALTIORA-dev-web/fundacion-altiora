"use client";

import React from "react";
import { FileText, Download, ShieldCheck, CheckCircle } from "lucide-react";

export default function TransparencySection() {
  const documents = [
    {
      title: "Memoria Anual y Balance Social",
      year: "2025",
      category: "Memoria Institucional",
      size: "PDF - 2.4 MB",
      description: "Resumen de actividades, beneficiarios alcanzados y metas cumplidas.",
    },
    {
      title: "Estados Contables y Balance General",
      year: "2025",
      category: "Contabilidad",
      size: "PDF - 1.8 MB",
      description: "Rendición pública de ingresos, egresos y destino de fondos recibidos.",
    },
    {
      title: "Estatuto Social y Registro Provincial",
      year: "Vigente",
      category: "Legal",
      size: "PDF - 850 KB",
      description: "Constancia de personería jurídica y fines estatutarios de la Fundación.",
    },
    {
      title: "Informe Trimestral de Impacto en Territorio",
      year: "2026",
      category: "Impacto",
      size: "PDF - 1.2 MB",
      description: "Métricas de asistencia alimentaria y participantes de talleres.",
    },
  ];

  return (
    <section id="transparencia" className="py-24 bg-[#F7F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E0A030]" />
            <span>Gobierno Abierto y Rendición</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading">
            Transparencia y Rendición de Cuentas
          </h2>

          <p className="text-base text-[#4A5568]">
            La confianza de nuestra comunidad, donantes y voluntarios es nuestro mayor activo.
            Ponemos a disposición pública todos los balances, memorias y documentos oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EBE3D3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E0A030] uppercase tracking-wider">
                    {doc.category}
                  </span>
                  <span className="text-xs font-bold bg-[#1B2A49]/5 text-[#1B2A49] px-2.5 py-0.5 rounded-full">
                    {doc.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1B2A49] font-heading">
                  {doc.title}
                </h3>

                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EBE3D3] flex items-center justify-between">
                <span className="text-xs text-[#4A5568] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#1B2A49]" />
                  <span>{doc.size}</span>
                </span>

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "El documento se encontrará disponible para descarga una vez cargado en Supabase Storage."
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#1B2A49] bg-[#F7F3EA] hover:bg-[#EBE3D3] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#E0A030]" />
                  <span>Descargar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Garantía Institucional */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#EBE3D3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-[#E0A030] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#1B2A49]">
              Nuestros estados contables son dictaminados por profesionales matriculados en el
              Consejo Profesional de Ciencias Económicas de Mendoza.
            </p>
          </div>
          <a
            href="#contacto"
            className="text-xs font-bold text-[#1B2A49] hover:text-[#E0A030] whitespace-nowrap"
          >
            Solicitar información adicional &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
