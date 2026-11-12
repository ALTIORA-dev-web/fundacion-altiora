import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MapPin, Layers } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      id: "alimenta",
      title: "ALTIORA Alimenta",
      category: "Asistencia y Seguridad Alimentaria",
      badge: "Programa Misional P01",
      summary:
        "Esquema de asistencia alimentaria temporal y bienes esenciales para hogares vulnerables, estructurado con estricta inocuidad, trazabilidad por lote y entrega digna.",
      status: "Piloto en preparación técnica",
      statusColor: "bg-amber-100 text-amber-900 border border-amber-200",
      location: "Foco inicial: Luján de Cuyo",
      highlights: [
        "Control técnico de inocuidad y fechas de vencimiento (FEFO)",
        "Trazabilidad completa de donaciones e inventarios",
        "Resguardo irrestricto de la intimidad de las familias (Ley 25.326)",
      ],
      scopeNote: "Piloto acotado de hasta 30 hogares bajo compuertas de control (GO/NO-GO)",
      link: "/proyectos",
    },
    {
      id: "capacita",
      title: "ALTIORA Capacita",
      category: "Formación para la Autonomía",
      badge: "Programa Misional P02",
      summary:
        "Talleres prácticos y módulos de capacitación orientados a brindar herramientas de desarrollo personal, oficios y empleabilidad para jóvenes y adultos.",
      status: "Diseño pedagógico y alianzas",
      statusColor: "bg-blue-100 text-blue-900 border border-blue-200",
      location: "Gran Mendoza",
      highlights: [
        "Módulos formativos accesibles y pertinentes a la demanda real",
        "Evaluación de competencias adquiridas pre y post taller",
        "Orientación de continuidad y desarrollo sociolaboral",
      ],
      scopeNote: "Talleres modulares en articulación con facilitadores e instituciones",
      link: "/proyectos",
    },
    {
      id: "comunidad",
      title: "ALTIORA Comunidad",
      category: "Escucha y Articulación Territorial",
      badge: "Programa Misional P03",
      summary:
        "Jornadas de diálogo y relevamiento participativo en el territorio para mapear necesidades reales y generar derivaciones efectivas sin duplicar recursos públicos.",
      status: "Diagnóstico territorial en curso",
      statusColor: "bg-emerald-100 text-emerald-900 border border-emerald-200",
      location: "Zonas urbanas y periurbanas",
      highlights: [
        "Escucha comunitaria directa sin promesas desmedidas",
        "Mapeo de servicios sociales, sanitarios y comunitarios",
        "Derivación responsable y acompañada con seguimiento",
      ],
      scopeNote: "Mesas de encuentro y validación con referentes locales",
      link: "/proyectos",
    },
    {
      id: "desarrollo",
      title: "ALTIORA Desarrollo",
      category: "Inclusión Sociolaboral",
      badge: "Programa Misional P04",
      summary:
        "Línea de acompañamiento para vincular habilidades formativas con oportunidades productivas, fortaleciendo la autogestión y el progreso duradero.",
      status: "Planificación estratégica",
      statusColor: "bg-purple-100 text-purple-900 border border-purple-200",
      location: "Mendoza",
      highlights: [
        "Conexión con iniciativas productivas y mentoría",
        "Herramientas de autogestión y emprendimiento responsable",
        "Criterios de impacto social sostenible",
      ],
      scopeNote: "Fase de planificación para el plan trienal y convenios productivos",
      link: "/proyectos",
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#E0A030]" />
              <span>Cartera Institucional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
              Programas y Líneas de Trabajo
            </h2>
            <p className="text-base text-[#4A5568] leading-relaxed">
              Nuestras iniciativas responden al objeto fundacional y a diagnósticos reales
              en Mendoza, estructuradas con planificación rigurosa, protocolos de protección y
              evaluación verificable.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors whitespace-nowrap bg-white px-5 py-3 rounded-2xl border border-[#EBE3D3] shadow-2xs hover:border-[#E0A030]"
          >
            <span>Articular con nosotros como institución</span>
            <ArrowRight className="w-4 h-4 text-[#E0A030]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#EBE3D3] shadow-xs hover:border-[#E0A030] card-hover flex flex-col justify-between"
            >
              <div className="p-7 sm:p-9 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-extrabold text-[#E0A030] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-[11px] font-semibold text-[#4A5568]">
                      {project.badge}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#1B2A49] font-heading">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-2 space-y-2.5">
                  <span className="text-[11px] uppercase font-bold text-[#1B2A49]/70 tracking-wider block">
                    Protocolos y Metodología:
                  </span>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#1B2A49] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#E0A030] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-7 sm:px-9 py-5 bg-[#F7F3EA]/70 border-t border-[#EBE3D3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[#4A5568]">Alcance previsto: </span>
                  <strong className="text-[#1B2A49] font-bold">{project.scopeNote}</strong>
                </div>
                <div className="flex items-center gap-1.5 text-[#1B2A49] font-semibold whitespace-nowrap bg-white px-3 py-1 rounded-lg border border-[#EBE3D3]">
                  <MapPin className="w-3.5 h-3.5 text-[#E0A030]" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
