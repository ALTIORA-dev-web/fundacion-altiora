import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "ALTIORA Alimenta",
      category: "Asistencia y Seguridad Alimentaria",
      summary:
        "Esquema de asistencia alimentaria temporal y bienes esenciales para hogares vulnerables, estructurado con estricta inocuidad, trazabilidad por lote y entrega digna.",
      status: "Piloto en preparación",
      statusColor: "bg-amber-100 text-amber-800",
      location: "Foco inicial: Luján de Cuyo",
      highlights: [
        "Control técnico de inocuidad y fechas",
        "Trazabilidad completa de donaciones",
        "Resguardo absoluto de la intimidad familiar",
      ],
      scopeNote: "Piloto acotado de hasta 30 hogares bajo protocolo riguroso",
    },
    {
      title: "ALTIORA Capacita",
      category: "Formación para la Autonomía",
      summary:
        "Talleres prácticos y módulos de capacitación orientados a brindar herramientas de desarrollo personal, oficios y empleabilidad para jóvenes y adultos.",
      status: "Diseño y alianzas",
      statusColor: "bg-blue-100 text-blue-800",
      location: "Gran Mendoza",
      highlights: [
        "Módulos formativos accesibles y pertinentes",
        "Evaluación de competencias adquiridas",
        "Orientación de continuidad sociolaboral",
      ],
      scopeNote: "Talleres modulares en articulación con capacitadores",
    },
    {
      title: "ALTIORA Comunidad",
      category: "Escucha y Articulación Territorial",
      summary:
        "Jornadas de diálogo y relevamiento participativo en el territorio para mapear necesidades reales y generar derivaciones efectivas sin duplicar recursos públicos.",
      status: "Diagnóstico de campo",
      statusColor: "bg-emerald-100 text-emerald-800",
      location: "Zonas urbanas y periurbanas",
      highlights: [
        "Escucha territorial sin promesas desmedidas",
        "Mapeo de servicios y centros comunitarios",
        "Derivación responsable y protegida",
      ],
      scopeNote: "Mesas de encuentro y validación comunitaria",
    },
    {
      title: "ALTIORA Desarrollo",
      category: "Inclusión Sociolaboral",
      summary:
        "Línea de acompañamiento para vincular habilidades formativas con oportunidades productivas, fortaleciendo la autogestión y el progreso duradero.",
      status: "Planificación estratégica",
      statusColor: "bg-purple-100 text-purple-800",
      location: "Mendoza",
      highlights: [
        "Conexión con oportunidades productivas",
        "Mentoría y habilidades de autogestión",
        "Criterios de impacto sostenible",
      ],
      scopeNote: "Fase de planificación para el plan trienal",
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-[#F7F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] bg-[#E0A030]/10 px-3 py-1 rounded-full">
              Cartera Institucional de Programas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading mt-2">
              Líneas de Trabajo y Proyectos
            </h2>
            <p className="text-base text-[#4A5568] mt-2 max-w-xl">
              Nuestras iniciativas surgen del objeto estatutario y responden a diagnósticos
              reales de Mendoza, con planificación, rigor y evaluación permanente.
            </p>
          </div>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors"
          >
            <span>Articular con nosotros como institución o empresa</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#1B2A49] font-heading mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="space-y-2.5 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1B2A49] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#E0A030] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-7 py-4 bg-[#F7F3EA]/60 border-t border-[#EBE3D3] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#4A5568] gap-2">
                <span>
                  Alcance previsto: <strong className="text-[#1B2A49]">{project.scopeNote}</strong>
                </span>
                <span className="text-xs font-semibold text-[#1B2A49]">{project.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
