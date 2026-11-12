import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Heart, Sparkles, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1B2A49] text-white pt-16 pb-24 lg:pt-20 lg:pb-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenido textual */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Logo oficial de la Fundación (Manual Pág. 03 e Imagen 3) */}
            <div className="flex items-center justify-center lg:justify-start">
              <Logo variant="inverso" orientation="horizontal" size="lg" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
              Impulsamos oportunidades.{" "}
              <span className="text-[#E0A030] block mt-1">Elevamos futuros.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
              En <strong>Fundación ALTIORA</strong> articulamos asistencia inmediata con
              oportunidades reales de desarrollo personal y comunitario, uniendo cercanía
              humana, planificación responsable y cooperación interinstitucional en Mendoza.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/donar"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#E0A030] hover:bg-[#C78922] text-[#1B2A49] font-bold text-base rounded-xl shadow-lg shadow-black/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-[#1B2A49]" />
                <span>Sumar tu Aporte</span>
              </Link>

              <Link
                href="/voluntariado"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5 text-[#E0A030]" />
                <span>Ser Voluntario</span>
              </Link>
            </div>

            {/* Microcredenciales de rigor */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E0A030]" />
                <span>Personería Jurídica DPJ Res. N.º 4.933/2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Compromiso de Trazabilidad Integral</span>
              </div>
            </div>
          </div>

          {/* Tarjeta Visual de Presentación Institucional con Logo Maestro */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#F7F3EA] rounded-3xl shadow-2xl overflow-hidden text-[#1B2A49] border border-[#EBE3D3] transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="p-8 space-y-6 flex flex-col items-center text-center">
                {/* Logo Completo Oficial con máxima nitidez */}
                <div className="w-full flex justify-center py-2">
                  <Logo orientation="full-image" size="lg" />
                </div>

                <div className="w-16 h-1 bg-[#E0A030] rounded-full"></div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030]">
                    Concepto Institucional
                  </span>
                  <h3 className="text-xl font-bold font-heading text-[#1B2A49]">
                    Ascender abriendo caminos
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed max-w-xs">
                    Dos flechas que simbolizan <strong>dirección institucional</strong> e <strong>impulso compartido</strong> para transformar realidades en Luján de Cuyo, Mendoza.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 w-full pt-1">
                  <div className="p-3.5 rounded-2xl bg-white border border-[#EBE3D3] text-center shadow-sm">
                    <span className="block text-2xl font-extrabold text-[#1B2A49] font-heading">
                      100%
                    </span>
                    <span className="text-[11px] text-[#4A5568] font-semibold">Compromiso Territorial</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#EBE3D3] text-center shadow-sm">
                    <span className="block text-2xl font-extrabold text-[#E0A030] font-heading">
                      Auditable
                    </span>
                    <span className="text-[11px] text-[#4A5568] font-semibold">Gestión Transparente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
