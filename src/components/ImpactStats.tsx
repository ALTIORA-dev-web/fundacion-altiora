import React from "react";
import { ShieldCheck, Scale, FileCheck, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ImpactStats() {
  const commitments = [
    {
      icon: Scale,
      value: "Res. 4.933",
      label: "Personería Jurídica Oficial",
      description: "Aprobada por la DPJ Mendoza (20/10/2026) bajo el CCyC de la Nación (Arts. 193-224).",
      link: "/transparencia",
      linkText: "Ver acreditación",
    },
    {
      icon: FileCheck,
      value: "100%",
      label: "Trazabilidad de Fondos",
      description: "Cada recurso ingresado cuenta con comprobante, registro y destino verificable.",
      link: "/donar",
      linkText: "Política de donaciones",
    },
    {
      icon: ShieldCheck,
      value: "Ad Honorem",
      label: "Gobierno Colegiado",
      description: "El Consejo de Administración ejerce sus funciones sin percibir remuneración por estatuto.",
      link: "/transparencia",
      linkText: "Conocer autoridades",
    },
    {
      icon: Layers,
      value: "4 Ejes",
      label: "Programas Misionales",
      description: "Alimentación, capacitación, redes comunitarias y desarrollo sociolaboral en Mendoza.",
      link: "/proyectos",
      linkText: "Explorar programas",
    },
  ];

  return (
    <section className="relative -mt-10 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F7F3EA] rounded-3xl shadow-xl shadow-[#1B2A49]/8 border border-[#EBE3D3] p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#EBE3D3]">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center justify-between group pt-6 sm:pt-0 ${
                  idx > 0 ? "lg:pl-8" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#EBE3D3] shadow-xs flex items-center justify-center mb-3.5 text-[#1B2A49] group-hover:border-[#E0A030] group-hover:scale-105 transition-all">
                    <Icon className="w-6 h-6 text-[#1B2A49] group-hover:text-[#E0A030] transition-colors" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-sm font-bold text-[#1B2A49] mt-1 mb-1.5">
                    {item.label}
                  </span>
                  <p className="text-xs text-[#4A5568] max-w-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="mt-4 pt-3 border-t border-[#EBE3D3]/70 w-full text-center text-[11px] font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors inline-flex items-center justify-center gap-1"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3 h-3 text-[#E0A030]" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
