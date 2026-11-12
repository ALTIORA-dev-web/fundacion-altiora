import React from "react";
import { Calendar, ArrowRight, Tag, Sparkles } from "lucide-react";
import Link from "next/link";

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
    <section id="noticias" className="py-24 bg-white border-b border-[#EBE3D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E0A030]" />
              <span>Hitos y Actualidad</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
              Novedades Institucionales
            </h2>
            <p className="text-base text-[#4A5568] leading-relaxed">
              Crónica verificable de nuestros pasos fundacionales y avances en la comunidad de Mendoza.
            </p>
          </div>
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors whitespace-nowrap bg-[#F7F3EA] px-5 py-3 rounded-2xl border border-[#EBE3D3]"
          >
            <span>Ver todas las publicaciones</span>
            <ArrowRight className="w-4 h-4 text-[#E0A030]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#F7F3EA] rounded-3xl overflow-hidden border border-[#EBE3D3] hover:border-[#E0A030] card-hover flex flex-col justify-between"
            >
              <div className="p-7 sm:p-8 space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs text-[#4A5568]">
                  <span className="inline-flex items-center gap-1 font-bold text-[#1B2A49] bg-white px-2.5 py-0.5 rounded-md border border-[#EBE3D3] text-[11px]">
                    <Tag className="w-3 h-3 text-[#E0A030]" />
                    <span>{item.category}</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#4A5568]">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#1B2A49] font-heading leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="px-7 sm:px-8 py-4.5 bg-white/80 border-t border-[#EBE3D3] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#4A5568]">
                  Por {item.author}
                </span>
                <span className="font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors flex items-center gap-1">
                  Leer nota <ArrowRight className="w-3.5 h-3.5 text-[#E0A030]" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
