import React from "react";
import Logo from "./Logo";
import { Heart, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111B30] text-white/80 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Logo y resumen institucional */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="inverso" orientation="horizontal" size="md" />
            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Promovemos la inclusión social, la igualdad de oportunidades y el desarrollo
              integral de personas, familias y comunidades en situación de vulnerabilidad en
              Luján de Cuyo, Mendoza.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E0A030] block">
                Concepto Institucional
              </span>
              <span className="text-xs text-white/90 font-medium">
                Ascender abriendo caminos • Lema: Juntos, más alto
              </span>
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E0A030]">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#mision" className="hover:text-white transition-colors">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Áreas de Acción
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-white transition-colors">
                  Iniciativas y Proyectos
                </a>
              </li>
              <li>
                <a href="#transparencia" className="hover:text-white transition-colors">
                  Transparencia y Balances
                </a>
              </li>
              <li>
                <a href="#noticias" className="hover:text-white transition-colors">
                  Noticias y Actualidad
                </a>
              </li>
            </ul>
          </div>

          {/* Cómo Participar */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E0A030]">
              Participación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#voluntariado" className="hover:text-white transition-colors">
                  Ser Voluntario
                </a>
              </li>
              <li>
                <a href="#donaciones" className="hover:text-white transition-colors">
                  Hacer una Donación
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Alianzas Estratégicas
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Solicitar Asistencia
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto & Sede */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E0A030]">
              Sede Territorial
            </h4>
            <address className="not-italic text-xs text-white/70 space-y-1.5">
              <p>Luján de Cuyo</p>
              <p>Mendoza, República Argentina</p>
              <p className="pt-2 text-white font-medium">contacto@fundacionaltiora.org.ar</p>
            </address>

            <div className="pt-2">
              <a
                href="/admin"
                className="inline-flex items-center gap-1.5 text-[11px] text-white/50 hover:text-[#E0A030] transition-colors"
              >
                <Lock className="w-3 h-3" />
                <span>Panel Administrativo (Supabase Auth)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Créditos y copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            © 2026 Fundación ALTIORA. Personería Jurídica en trámite /
            registrada en la Provincia de Mendoza.
          </p>

          <div className="flex items-center gap-1 text-white/60">
            <span>Hecho con compromiso en Mendoza</span>
            <Heart className="w-3.5 h-3.5 text-[#E0A030] fill-[#E0A030]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
