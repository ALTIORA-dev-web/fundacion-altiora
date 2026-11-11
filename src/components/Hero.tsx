import React from "react";
import Logo from "./Logo";
import { ArrowUpRight, Heart, Sparkles, MapPin, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1B2A49] text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Patrones de fondo geométricos sutiles con flechas ascendentes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="absolute -right-20 -bottom-20 w-[600px] h-[600px] text-[#E0A030]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M40 160 L100 40 L160 160 H120 V180 H80 V160 Z" />
        </svg>
        <svg
          className="absolute left-10 top-10 w-96 h-96 text-white"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M40 160 L100 40 L160 160 H120 V180 H80 V160 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenido textual */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge de ubicación y concepto */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-[#E0A030]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Luján de Cuyo, Mendoza</span>
              <span className="text-white/40">•</span>
              <span className="text-white">Ascender abriendo caminos</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
              Inclusión social, oportunidades y desarrollo.{" "}
              <span className="text-[#E0A030] block mt-1">Juntos, más alto.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
              En <strong>Fundación ALTIORA</strong> trabajamos día a día para promover
              la igualdad de oportunidades y el desarrollo integral de personas,
              familias y comunidades en situación de vulnerabilidad social y económica.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#donaciones"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#E0A030] hover:bg-[#C78922] text-[#1B2A49] font-bold text-base rounded-xl shadow-lg shadow-black/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-[#1B2A49]" />
                <span>Colaborar con una Donación</span>
              </a>

              <a
                href="#voluntariado"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5 text-[#E0A030]" />
                <span>Ser Voluntario</span>
              </a>
            </div>

            {/* Microcredenciales de impacto */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E0A030]" />
                <span>Compromiso de Transparencia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Programas comunitarios activos</span>
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

                <div className="w-full pt-1">
                  <a
                    href="#identidad"
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-[#1B2A49] text-white text-xs font-bold hover:bg-[#253961] transition-colors w-full"
                  >
                    <span>Conoce el significado de nuestra marca</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E0A030] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
