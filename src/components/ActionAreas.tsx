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
      id: "asistencia",
      title: "Asistencia social, alimentaria y comunitaria",
      description:
        "Respuesta y acompañamiento integral a familias en situación de emergencia y vulnerabilidad con entregas de alimentos, vestimenta y artículos de primera necesidad.",
      icon: UtensilsCrossed,
      color: "from-blue-900 to-blue-800",
      badge: "Apoyo Inmediato",
    },
    {
      id: "educacion",
      title: "Educación, formación y capacitación laboral",
      description:
        "Cursos de oficios, alfabetización digital, talleres prácticos y herramientas que potencian la empleabilidad y el autoempleo juvenil y adulto.",
      icon: BriefcaseBusiness,
      badge: "Futuro y Empleo",
    },
    {
      id: "salud",
      title: "Promoción de la salud y el bienestar",
      description:
        "Jornadas de prevención de la salud, apoyo psicoemocional, talleres de nutrición saludable y operativos comunitarios en barrios de Luján de Cuyo.",
      icon: HeartPulse,
      badge: "Calidad de Vida",
    },
    {
      id: "desarrollo",
      title: "Desarrollo humano y fortalecimiento comunitario",
      description:
        "Espacios de encuentro, contención familiar, formación de líderes barriales y actividades socio-culturales que fortalecen el tejido social.",
      icon: UsersRound,
      badge: "Comunidad",
    },
    {
      id: "voluntariado",
      title: "Voluntariado y participación ciudadana",
      description:
        "Canalizamos la vocación solidaria de vecinos, profesionales y estudiantes universitarios para transformar positivamente nuestro entorno.",
      icon: HandHelping,
      badge: "Participación",
    },
    {
      id: "cooperacion",
      title: "Cooperación institucional y desarrollo sostenible",
      description:
        "Alianzas estratégicas con empresas, organismos gubernamentales, universidades y redes del tercer sector alineadas con los ODS.",
      icon: Globe2,
      badge: "Alianzas",
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
