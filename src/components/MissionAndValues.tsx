import React from "react";
import { Compass, Target, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

export default function MissionAndValues() {
  const values = [
    {
      title: "Igualdad de Oportunidades",
      description:
        "Generamos puentes formativos, laborales y de contención para que ninguna persona quede rezagada.",
      icon: Target,
    },
    {
      title: "Transparencia y Ética",
      description:
        "Cada peso y recurso recibido es administrado con rigurosidad pública, memorias y balances auditables.",
      icon: ShieldCheck,
    },
    {
      title: "Desarrollo Humano",
      description:
        "Promovemos la autonomía y la dignidad individual fortaleciendo las capacidades de cada persona y familia.",
      icon: TrendingUp,
    },
    {
      title: "Compromiso con la Comunidad",
      description:
        "Trabajo de territorio cercano, escuchando activamente las prioridades reales de Luján de Cuyo.",
      icon: Compass,
    },
  ];

  return (
    <section id="mision" className="py-24 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Principal */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A030]" />
            <span>Propósito Institucional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading">
            Ascender abriendo caminos: una visión de futuro con impacto real
          </h2>

          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Fundación ALTIORA nació en <strong>Luján de Cuyo, Mendoza</strong>,
            con el convencimiento de que el progreso verdadero solo se logra cuando
            avanzamos todos juntos, derribando barreras estructurales.
          </p>
        </div>

        {/* Tarjeta Destacada de Misión */}
        <div className="bg-[#1B2A49] text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <span className="text-[#E0A030] text-sm font-bold uppercase tracking-widest block mb-2">
              Misión Institucional
            </span>
            <blockquote className="text-2xl sm:text-3xl font-semibold leading-relaxed font-heading">
              &ldquo;Promover la inclusión social, la igualdad de oportunidades y el desarrollo
              integral de personas, familias y comunidades en situación de vulnerabilidad social y
              económica.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-0.5 bg-[#E0A030]"></div>
              <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">
                Lema de marca: Juntos, más alto
              </span>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border border-[#EBE3D3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F7F3EA] text-[#E0A030] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#1B2A49]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B2A49] font-heading mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
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
