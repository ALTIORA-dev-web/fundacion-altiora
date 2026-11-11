import React from "react";
import Image from "next/image";
import { Compass, Target, ShieldCheck, TrendingUp, Sparkles, ArrowUp, HeartHandshake, CheckCircle } from "lucide-react";

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

  const brandPersonality = [
    {
      trait: "Cercana",
      action: "Hablar con claridad, empatía y respeto absoluto.",
      color: "border-[#1B2A49]",
    },
    {
      trait: "Confiable",
      action: "Comunicar datos verificables y compromisos concretos y auditables.",
      color: "border-[#E0A030]",
    },
    {
      trait: "Inspiradora",
      action: "Poner siempre el foco en las oportunidades reales de superación.",
      color: "border-[#1B2A49]",
    },
    {
      trait: "Sobria",
      action: "Evitar promesas grandilocuentes; responder con trabajo continuo.",
      color: "border-[#E0A030]",
    },
  ];

  return (
    <section id="mision" className="py-24 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Principal */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A030]" />
            <span>Nuestra Identidad Institucional</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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

        {/* ============================================================================== */}
        {/* SECCIÓN IDENTIDAD Y MANUAL INSTITUCIONAL (Basado en el Manual 2026)           */}
        {/* ============================================================================== */}
        <div id="identidad" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EBE3D3] shadow-md scroll-mt-24">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B2A49]/5 text-[#1B2A49] text-xs font-bold uppercase tracking-wider mb-3">
              <ArrowUp className="w-3.5 h-3.5 text-[#E0A030]" />
              <span>Manual de Identidad Visual Institucional 2026</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A49] font-heading">
              El Significado de Nuestro Símbolo
            </h3>
            <p className="text-sm sm:text-base text-[#4A5568] mt-2">
              Un sistema visual coherente y memorable donde cada trazo y color tiene un propósito concreto:
              <strong> el ascenso convertido en sistema</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visualización del Logo Oficial */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#F7F3EA] rounded-2xl border border-[#EBE3D3] text-center">
              <div className="w-56 h-56 relative flex items-center justify-center">
                <Image
                  src="/brand/logo-completo-transparente.png"
                  alt="Logotipo Oficial Fundación ALTIORA"
                  width={220}
                  height={220}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-[11px] font-bold text-[#1B2A49] uppercase tracking-widest mt-4">
                Firma Institucional Original
              </span>
              <span className="text-[10px] text-[#4A5568] mt-0.5">
                Proporción exacta: Isotipo, ALTIORA y descriptor FUNDACIÓN
              </span>
            </div>

            {/* Desglose de Elementos del Símbolo */}
            <div className="lg:col-span-7 space-y-5">
              <div className="p-5 rounded-2xl bg-[#F7F3EA]/60 border border-[#EBE3D3] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B2A49] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  01
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1B2A49] font-heading">
                    Flecha Exterior (Azul Profundo · #1B2A49)
                  </h4>
                  <p className="text-xs text-[#4A5568] mt-1 leading-relaxed">
                    Representa la <strong>dirección, criterio, avance y estabilidad institucional</strong>.
                    Guía con solidez los caminos hacia la inclusión social.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F3EA]/60 border border-[#EBE3D3] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E0A030] text-[#1B2A49] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  02
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1B2A49] font-heading">
                    Flecha Interior (Dorado Sol · #E0A030)
                  </h4>
                  <p className="text-xs text-[#4A5568] mt-1 leading-relaxed">
                    Simboliza el <strong>impulso, la calidez y el crecimiento compartido</strong>.
                    Es la señal de oportunidad y superación activa para las familias de nuestra comunidad.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F3EA]/60 border border-[#EBE3D3] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#EBE3D3] text-[#1B2A49] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  03
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1B2A49] font-heading">
                    Fondo y Atmósfera Marfil (#F7F3EA)
                  </h4>
                  <p className="text-xs text-[#4A5568] mt-1 leading-relaxed">
                    Aporta <strong>cercanía, calidez humana y serenidad institucional</strong>,
                    diferenciándose de la frialdad corporativa y conectando con el territorio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Criterio y Tono de Voz */}
          <div className="mt-12 pt-8 border-t border-[#EBE3D3]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1B2A49] mb-4 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#E0A030]" />
              <span>Nuestra Personalidad y Tono de Comunicación (Manual Pág. 05)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {brandPersonality.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl bg-[#F7F3EA] border-l-4 ${item.color} border-[#EBE3D3]`}
                >
                  <span className="block text-sm font-bold text-[#1B2A49] mb-1 font-heading">
                    {item.trait}
                  </span>
                  <span className="text-xs text-[#4A5568] leading-snug block">
                    {item.action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frases de Marca */}
          <div className="mt-6 p-4 rounded-xl bg-[#1B2A49] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle className="w-4 h-4 text-[#E0A030] flex-shrink-0" />
              <span>Lema: <strong>&ldquo;Juntos, más alto&rdquo;</strong> • Concepto: <strong>&ldquo;Ascender abriendo caminos&rdquo;</strong></span>
            </div>
            <span className="text-[#E0A030] font-semibold tracking-wide">
              &ldquo;Cada paso abre un camino&rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
