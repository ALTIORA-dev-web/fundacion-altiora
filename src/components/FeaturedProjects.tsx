import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Puente al Oficio",
      category: "Formación Laboral",
      summary:
        "Capacitaciones intensivas en carpintería, textil, gastronomía básica y marketing digital para promover el autoempleo en familias vulnerables.",
      beneficiaries: "180 personas",
      status: "En curso",
      location: "Luján de Cuyo",
      highlights: ["Talleres prácticos", "Mentoría comercial", "Kits de herramientas"],
    },
    {
      title: "Nutriendo Futuro",
      category: "Asistencia y Nutrición",
      summary:
        "Módulos alimentarios nutritivos de entrega periódica acompañados de capacitación culinaria saludable para madres y cuidadores.",
      beneficiaries: "350 familias",
      status: "En curso",
      location: "Zonas periurbanas de Luján",
      highlights: ["Alimentos de calidad", "Seguimiento nutricional", "Recetas económicas"],
    },
    {
      title: "Aulas Abiertas y Conectividad",
      category: "Educación e Infancias",
      summary:
        "Espacios de apoyo escolar, alfabetización digital temprana y acceso gratuito a internet para evitar la deserción escolar.",
      beneficiaries: "220 niños y jóvenes",
      status: "En curso",
      location: "Centros comunitarios",
      highlights: ["Apoyo pedagógico", "Computadoras para estudio", "Talleres de lectura"],
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-[#F7F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] bg-[#E0A030]/10 px-3 py-1 rounded-full">
              Iniciativas en marcha
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading mt-2">
              Proyectos con Impacto Territorial
            </h2>
            <p className="text-base text-[#4A5568] mt-2 max-w-xl">
              Cada proyecto responde a diagnósticos reales y se ejecuta junto a los
              propios vecinos y organizaciones de la zona.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors"
          >
            <span>Sumar tu empresa u organización a un proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#EBE3D3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#E0A030] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1B2A49] font-heading mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1B2A49] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E0A030] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-7 py-4 bg-[#F7F3EA]/50 border-t border-[#EBE3D3] flex items-center justify-between text-xs text-[#4A5568]">
                <span>
                  Alcance: <strong className="text-[#1B2A49]">{project.beneficiaries}</strong>
                </span>
                <span>{project.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
