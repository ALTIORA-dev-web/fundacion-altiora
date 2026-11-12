import React from "react";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export default function NewsSection() {
  const newsList = [
    {
      title: "Otorgamiento de Personería Jurídica Oficial por Resolución DPJ N.º 4.933",
      category: "Institucional",
      date: "20 de Octubre, 2026",
      excerpt:
        "La Dirección de Personas Jurídicas de Mendoza aprobó formalmente la constitución y el estatuto social de Fundación ALTIORA (Expediente EX-2026-06638644).",
      author: "Consejo de Administración",
    },
    {
      title: "Consolidación de la Identidad Estratégica: «Impulsamos oportunidades. Elevamos futuros.»",
      category: "Identidad",
      date: "11 de Noviembre, 2026",
      excerpt:
        "Presentación de las bases fundacionales, valores institucionales de dignidad y transparencia, y el modelo de gobierno colegiado ad honorem.",
      author: "Comunicación Institucional",
    },
    {
      title: "Estructuración del Programa Piloto «ALTIORA Alimenta» con Trazabilidad Integral",
      category: "Programas",
      date: "12 de Noviembre, 2026",
      excerpt:
        "Finalización del marco lógico y protocolos de inocuidad alimentaria y protección de datos para la primera intervención piloto en el territorio mendocino.",
      author: "Equipo de Programas",
    },
  ];

  return (
    <section id="noticias" className="py-24 bg-white border-b border-[#EBE3D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] bg-[#E0A030]/10 px-3 py-1 rounded-full">
              Actualidad
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading mt-2">
              Novedades y Actividades
            </h2>
            <p className="text-base text-[#4A5568] mt-2 max-w-xl">
              Conoce el día a día de nuestras acciones y eventos en el territorio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#F7F3EA] rounded-2xl overflow-hidden border border-[#EBE3D3] hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs text-[#4A5568] mb-3">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#E0A030]">
                    <Tag className="w-3 h-3" />
                    <span>{item.category}</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1B2A49] font-heading mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="px-7 py-4 bg-white/70 border-t border-[#EBE3D3] flex items-center justify-between">
                <span className="text-xs font-medium text-[#4A5568]">
                  Por {item.author}
                </span>
                <span className="text-xs font-bold text-[#1B2A49] hover:text-[#E0A030] flex items-center gap-1">
                  Leer más <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
