import React from "react";
import { ShieldCheck, Scale, FileCheck, Layers } from "lucide-react";

export default function ImpactStats() {
  const commitments = [
    {
      icon: Scale,
      value: "Res. 4.933",
      label: "Personería Jurídica Oficial",
      description: "Aprobada por la DPJ Mendoza (20/10/2026) bajo el CCyC de la Nación.",
    },
    {
      icon: FileCheck,
      value: "100%",
      label: "Trazabilidad de Fondos",
      description: "Cada recurso ingresado cuenta con comprobante, registro y destino verificable.",
    },
    {
      icon: ShieldCheck,
      value: "Ad Honorem",
      label: "Gobierno Transparente",
      description: "El Consejo de Administración ejerce sus cargos sin remuneración por estatuto.",
    },
    {
      icon: Layers,
      value: "4 Ejes",
      label: "Programas Misionales",
      description: "Alimentación, capacitación, redes comunitarias y desarrollo sociolaboral.",
    },
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F7F3EA] rounded-2xl shadow-xl border border-[#EBE3D3] p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#EBE3D3]">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? "pt-6 lg:pt-0 lg:pl-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B2A49]/5 border border-[#1B2A49]/10 flex items-center justify-center mb-3 text-[#E0A030]">
                  <Icon className="w-6 h-6 text-[#1B2A49]" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
                  {item.value}
                </span>
                <span className="text-sm font-bold text-[#1B2A49] mt-1 mb-1">
                  {item.label}
                </span>
                <p className="text-xs text-[#4A5568] max-w-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
