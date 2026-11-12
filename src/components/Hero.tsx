import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Heart, Sparkles, Users, ArrowUpRight, ShieldCheck, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#111B30] via-[#1B2A49] to-[#1B2A49] text-white pt-14 pb-20 lg:pt-20 lg:pb-28">
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E0A030]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#253961]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Lado izquierdo: Contenido textual y CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge oficial de acreditación */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-white/90 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E0A030] animate-pulse"></span>
              <span>Personería Jurídica DPJ Res. N.º 4.933/2026 · Mendoza</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12]">
              Impulsamos oportunidades.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0A030] to-[#F5BE58] block mt-1">
                Elevamos futuros.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              En <strong>Fundación ALTIORA</strong> articulamos asistencia inmediata con
              oportunidades reales de desarrollo personal y comunitario, uniendo cercanía
              humana, planificación responsable y cooperación interinstitucional en Mendoza.
            </p>

            {/* Bloque de Botones CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/donar"
                className="w-full sm:w-auto px-8 py-4 bg-[#E0A030] hover:bg-[#C78922] text-[#1B2A49] font-extrabold text-base rounded-2xl shadow-lg shadow-black/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
              >
                <Heart className="w-5 h-5 fill-[#1B2A49] transition-transform group-hover:scale-110" />
                <span>Colaborar con un Aporte</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/voluntariado"
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-2xl border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:border-white/35 active:scale-95"
              >
                <Users className="w-5 h-5 text-[#E0A030]" />
                <span>Sumarse al Voluntariado</span>
              </Link>
            </div>

            {/* Microcredenciales de rigor institucional */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/75">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E0A030]" />
                <span>Consejo 100% Ad Honorem</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E0A030]" />
                <span>Trazabilidad integral de fondos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Foco territorial: Mendoza</span>
              </div>
            </div>
          </div>

          {/* Lado derecho: Tarjeta de Presentación Institucional y Concepto Isotipo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#F7F3EA] rounded-3xl shadow-2xl overflow-hidden text-[#1B2A49] border border-[#EBE3D3] transition-all duration-300 hover:shadow-black/20">
              <div className="p-8 space-y-6 flex flex-col items-center text-center">
                {/* Logo Completo Oficial con máxima definición */}
                <div className="w-full flex justify-center py-2">
                  <Logo orientation="full-image" size="lg" />
                </div>

                <div className="w-16 h-1 bg-[#E0A030] rounded-full"></div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E0A030] bg-[#E0A030]/10 px-3 py-1 rounded-full inline-block">
                    Concepto de Marca
                  </span>
                  <h3 className="text-xl font-bold font-heading text-[#1B2A49]">
                    Ascender abriendo caminos
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed max-w-xs mx-auto">
                    Dos flechas ascendentes que simbolizan <strong>dirección institucional</strong> e <strong>impulso compartido</strong> para transformar realidades con dignidad.
                  </p>
                </div>

                {/* Métricas de compromiso institucional */}
                <div className="grid grid-cols-2 gap-3 w-full pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-[#EBE3D3] text-center shadow-xs">
                    <span className="block text-2xl font-extrabold text-[#1B2A49] font-heading">
                      100%
                    </span>
                    <span className="text-[11px] text-[#4A5568] font-semibold">Trazabilidad Total</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#EBE3D3] text-center shadow-xs">
                    <span className="block text-2xl font-extrabold text-[#E0A030] font-heading">
                      Auditable
                    </span>
                    <span className="text-[11px] text-[#4A5568] font-semibold">Gestión Pública</span>
                  </div>
                </div>

                <Link
                  href="/proyectos"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1B2A49]/5 hover:bg-[#1B2A49]/10 text-xs font-bold text-[#1B2A49] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Conocer nuestra cartera de programas</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#E0A030]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
