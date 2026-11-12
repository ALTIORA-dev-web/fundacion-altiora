import React from "react";
import {
  ShieldCheck,
  Heart,
  Scale,
  Handshake,
  TrendingUp,
  Clock,
  Sparkles,
  Quote,
  Target,
  Compass,
} from "lucide-react";

export default function MissionAndValues() {
  const values = [
    {
      title: "Dignidad",
      badge: "Trato Humano",
      description:
        "Trato respetuoso e irrestricto. Ninguna comunicación, imagen ni procedimiento que estigmatice a las personas destinatarias.",
      icon: Heart,
    },
    {
      title: "Equidad e Inclusión",
      badge: "Acceso Justo",
      description:
        "Criterios de acceso objetivos, accesibilidad física y digital, y atención a las barreras sociales y territoriales reales.",
      icon: Scale,
    },
    {
      title: "Compromiso",
      badge: "Responsabilidad",
      description:
        "Metas realistas, responsables claramente identificados y seguimiento continuo de cada iniciativa social.",
      icon: Clock,
    },
    {
      title: "Transparencia e Integridad",
      badge: "Control Público",
      description:
        "Registros y rendición estricta de cada recurso; separación responsable entre logros acreditados y expectativas.",
      icon: ShieldCheck,
    },
    {
      title: "Colaboración",
      badge: "Alianzas",
      description:
        "Articulación genuina con organizaciones comunitarias, universidades, empresas y organismos públicos provinciales.",
      icon: Handshake,
    },
    {
      title: "Autonomía y Superación",
      badge: "Capacidades",
      description:
        "Capacitación, formación práctica y acompañamiento cercano que potencien las capacidades de cada individuo y familia.",
      icon: TrendingUp,
    },
    {
      title: "Sostenibilidad",
      badge: "Continuidad",
      description:
        "Programas proporcionales a los recursos reales y mecanismos de continuidad comunitaria a largo plazo.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="mision" className="py-24 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Principal */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A030]" />
            <span>Identidad Estratégica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
            Ascender no significa avanzar solos:{" "}
            <span className="text-[#E0A030] block sm:inline">significa abrir caminos</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            La identidad de <strong>Fundación ALTIORA</strong> se construye sobre una finalidad
            estatutaria concreta: contribuir al bienestar, la asistencia social y la mejora de la
            calidad de vida de personas y comunidades en situación de vulnerabilidad en Mendoza.
          </p>
        </div>

        {/* Tarjetas de Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Misión */}
          <div className="bg-[#1B2A49] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col justify-between relative overflow-hidden border border-white/10 card-hover">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E0A030]/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#E0A030]" />
                <span className="text-[#E0A030] text-xs font-extrabold uppercase tracking-widest block">
                  Nuestra Misión
                </span>
              </div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-white/95">
                Promover el desarrollo integral y la inclusión social en Mendoza mediante
                programas de asistencia, alimentación, educación, capacitación y fortalecimiento
                comunitario, articulando personas, organizaciones e instituciones con un enfoque
                de dignidad, participación y resultados verificables.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between relative z-10">
              <span className="text-xs text-[#E0A030] font-bold uppercase tracking-wider">
                Lema Oficial
              </span>
              <span className="text-xs text-white/80 font-medium">
                «Impulsamos oportunidades. Elevamos futuros.»
              </span>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white text-[#1B2A49] rounded-3xl p-8 sm:p-12 shadow-md border border-[#EBE3D3] flex flex-col justify-between card-hover">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#E0A030]" />
                <span className="text-[#E0A030] text-xs font-extrabold uppercase tracking-widest block">
                  Nuestra Visión
                </span>
              </div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-[#1B2A49]">
                Ser una fundación de referencia en Mendoza por su capacidad de transformar la
                solidaridad en oportunidades sostenibles, consolidando redes de colaboración y
                proyectos que amplíen la autonomía y las posibilidades de desarrollo de quienes
                más lo necesitan.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#EBE3D3] flex items-center justify-between">
              <span className="text-xs text-[#1B2A49] font-bold uppercase tracking-wider">
                Ámbito de Actuación
              </span>
              <span className="text-xs text-[#4A5568] font-medium">
                Mendoza · Con foco operativo en Luján de Cuyo
              </span>
            </div>
          </div>
        </div>

        {/* Manifiesto Institucional */}
        <div className="bg-[#111B30] text-white rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#E0A030]/20 flex items-center justify-center mx-auto text-[#E0A030] shadow-xs">
              <Quote className="w-7 h-7" />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#E0A030] font-heading tracking-tight">
              Manifiesto Institucional ALTIORA
            </h3>

            <div className="space-y-5 text-sm sm:text-base text-white/85 leading-relaxed text-justify sm:text-center">
              <p>
                Creemos que toda persona merece oportunidades para crecer. Que el acompañamiento
                auténtico empieza por escuchar, reconocer capacidades y respetar la dignidad de
                cada historia. Que la solidaridad tiene mayor alcance cuando se organiza y se
                sostiene con compromiso.
              </p>
              <p>
                Sabemos que una ayuda puede resolver una necesidad inmediata, pero también que la
                educación, el trabajo compartido y la participación comunitaria pueden abrir caminos
                duraderos. Por eso, queremos unir voluntades, conocimientos y recursos para construir
                respuestas concretas a necesidades reales.
              </p>
              <p className="font-semibold text-white pt-2 border-t border-white/10">
                En ALTIORA no prometemos transformar vidas con palabras. Nos comprometemos a trabajar
                con responsabilidad, a medir lo que hacemos y a aprender de cada experiencia. Creemos
                en una comunidad que crece cuando nadie queda fuera de la posibilidad de avanzar.
              </p>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#E0A030]">
                Consejo de Administración
              </span>
              <span className="text-xs text-white/60">Fundación ALTIORA · Mendoza</span>
            </div>
          </div>
        </div>

        {/* Sección de Valores Institucionales */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] bg-[#E0A030]/10 px-3 py-1 rounded-full inline-block mb-3">
            Principios que Guían Nuestra Acción
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A49] font-heading">
            Nuestros Valores y Comportamientos Esperados
          </h3>
          <p className="text-sm text-[#4A5568] max-w-xl mx-auto mt-2">
            Cada valor se traduce en normas de conducta reales, verificables y respetuosas de las familias y donantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#EBE3D3] shadow-xs hover:border-[#E0A030] card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F7F3EA] text-[#E0A030] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1B2A49]" />
                    </div>
                    <span className="text-[10px] font-extrabold text-[#1B2A49] bg-[#F7F3EA] border border-[#EBE3D3] px-2.5 py-0.5 rounded-full uppercase">
                      {v.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#1B2A49] font-heading mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
