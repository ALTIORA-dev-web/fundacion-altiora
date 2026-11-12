import React from "react";
import {
  UtensilsCrossed,
  BriefcaseBusiness,
  HeartPulse,
  UsersRound,
  HandHelping,
  Globe2,
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
    },
    {
      id: "capacitacion",
      title: "Capacitación e Inserción Sociolaboral",
      description:
        "Diseñamos talleres de oficios, competencias laborales y herramientas prácticas que promueven la autonomía económica y la superación personal.",
      icon: BriefcaseBusiness,
      badge: "ALTIORA Capacita",
    },
    {
      id: "comunidad",
      title: "Desarrollo y Articulación Comunitaria",
      description:
        "Espacios de escucha activa, relevamiento de necesidades en el territorio y derivación responsable sin duplicar dispositivos del Estado.",
      icon: UsersRound,
      badge: "ALTIORA Comunidad",
    },
    {
      id: "desarrollo",
      title: "Oportunidades de Crecimiento Integral",
      description:
        "Iniciativas formativas y de emprendimiento responsable que permiten a las personas construir proyectos de vida duraderos.",
      icon: HeartPulse,
      badge: "ALTIORA Desarrollo",
    },
    {
      id: "voluntariado",
      title: "Voluntariado Activo y Protegido",
      description:
        "Organizamos la participación solidaria con roles claros, inducción ética, resguardo de datos personales y condiciones de seguridad.",
      icon: HandHelping,
      badge: "ALTIORA Solidaria",
    },
    {
      id: "alianzas",
      title: "Cooperación y Redes Multisectoriales",
      description:
        "Construimos alianzas transparentes con universidades, empresas privadas y organizaciones del tercer sector para potenciar el impacto social.",
      icon: Globe2,
      badge: "Redes y Recursos",
    },
  ];

  return (
    <section id="areas" className="py-24 bg-white border-y border-[#EBE3D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] bg-[#E0A030]/10 px-3 py-1 rounded-full">
            Ejes Estratégicos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading">
            Nuestras Áreas de Acción
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            Intervenimos de manera multidisciplinaria sobre las causas raíz de la
            vulnerabilidad, impulsando soluciones que perduran en el tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#F7F3EA] rounded-2xl p-8 border border-[#EBE3D3] hover:border-[#E0A030] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1B2A49] text-white flex items-center justify-center group-hover:bg-[#E0A030] group-hover:text-[#1B2A49] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-[#1B2A49] border border-[#EBE3D3]">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1B2A49] font-heading mb-3 group-hover:text-[#1B2A49]">
                    {area.title}
                  </h3>

                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EBE3D3]/60 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1B2A49]">
                    Luján de Cuyo y Mendoza
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#E0A030]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
