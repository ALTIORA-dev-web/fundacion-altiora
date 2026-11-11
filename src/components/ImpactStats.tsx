import React from "react";
import { Users, GraduationCap, HeartHandshake, FolderKanban } from "lucide-react";

export default function ImpactStats() {
  const stats = [
    {
      icon: Users,
      value: "1.250+",
      label: "Personas y Familias Acompañadas",
      description: "Asistencia directa, nutricional y contención comunitaria.",
    },
    {
      icon: GraduationCap,
      value: "420 hs",
      label: "Capacitaciones y Talleres",
      description: "Formación laboral y desarrollo de habilidades personales.",
    },
    {
      icon: HeartHandshake,
      value: "65+",
      label: "Voluntarios en Acción",
      description: "Ciudadanos activos aportando su tiempo y conocimientos.",
    },
    {
      icon: FolderKanban,
      value: "8",
      label: "Programas Activos",
      description: "Iniciativas en marcha en Luján de Cuyo y el Gran Mendoza.",
    },
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F7F3EA] rounded-2xl shadow-xl border border-[#EBE3D3] p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#EBE3D3]">
          {stats.map((item, idx) => {
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
                <span className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
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
