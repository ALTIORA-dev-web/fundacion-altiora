import React from "react";
import Link from "next/link";
import {
  UtensilsCrossed,
  BriefcaseBusiness,
  HeartPulse,
  UsersRound,
  HandHelping,
  Globe2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ActionAreas() {
  const areas = [
    {
      id: "alimentacion",
      title: "Asistencia y Seguridad Alimentaria",
      description:
        "Garantizamos el acceso a alimentos y bienes esenciales de forma digna, con control de inocuidad, lotes trazables y respeto irrestricto a las familias.",
      icon: UtensilsCrossed,
      badge: "ALTIORA Alimenta",
      link: "/proyectos",
      linkText: "Ver programa piloto",
    },
    {
      id: "capacitacion",
      title: "Capacitación e Inserción Sociolaboral",
      description:
        "Diseñamos talleres de oficios, competencias laborales y herramientas prácticas que promueven la autonomía económica y la superación personal.",
      icon: BriefcaseBusiness,
      badge: "ALTIORA Capacita",
      link: "/proyectos",
      linkText: "Conocer trayectos",
    },
    {
      id: "comunidad",
      title: "Desarrollo y Articulación Comunitaria",
      description:
        "Espacios de escucha activa, relevamiento de necesidades en el territorio y derivación responsable sin duplicar dispositivos existentes del Estado.",
      icon: UsersRound,
      badge: "ALTIORA Comunidad",
      link: "/proyectos",
      linkText: "Diagnóstico territorial",
    },
    {
      id: "desarrollo",
      title: "Oportunidades de Crecimiento Integral",
      description:
        "Iniciativas formativas y de articulación sociolaboral orientadas a generar herramientas duraderas para proyectos de vida sostenibles.",
      icon: HeartPulse,
      badge: "ALTIORA Desarrollo",
      link: "/proyectos",
      linkText: "Líneas de trabajo",
    },
    {
      id: "voluntariado",
      title: "Voluntariado Activo y Protegido",
      description:
        "Organizamos la participación solidaria con roles claros, inducción ética, resguardo de datos personales y condiciones de seguridad.",
      icon: HandHelping,
      badge: "ALTIORA Solidaria",
      link: "/voluntariado",
      linkText: "Sumarse como voluntario",
    },
    {
      id: "alianzas",
      title: "Cooperación y Redes Multisectoriales",
      description:
        "Construimos alianzas transparentes con universidades, empresas privadas y organizaciones del tercer sector para potenciar el impacto social.",
      icon: Globe2,
      badge: "Redes y Recursos",
      link: "/contacto",
      linkText: "Proponer una alianza",
    },
  ];

  return (
    <section id="areas" className="py-24 bg-white border-y border-[#EBE3D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A030]" />
            <span>Ejes Estratégicos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
            Nuestras Áreas de Acción
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Intervenimos de manera multidisciplinaria sobre las causas raíz de la
            vulnerabilidad, impulsando soluciones que perduran en el tiempo en Luján de Cuyo y el Gran Mendoza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#F7F3EA] rounded-3xl p-8 border border-[#EBE3D3] hover:border-[#E0A030] card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#1B2A49] text-white flex items-center justify-center group-hover:bg-[#E0A030] group-hover:text-[#1B2A49] transition-all duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#1B2A49] border border-[#EBE3D3] shadow-2xs">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1B2A49] font-heading mb-3 group-hover:text-[#1B2A49]">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EBE3D3] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1B2A49]">
                    Mendoza
                  </span>
                  <Link
                    href={area.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B2A49] group-hover:text-[#E0A030] transition-colors"
                  >
                    <span>{area.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
