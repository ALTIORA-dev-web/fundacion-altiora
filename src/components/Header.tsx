"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  Menu,
  X,
  Heart,
  HandHelping,
  ShieldCheck,
  Mail,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Misión", href: "/mision" },
    { label: "Áreas de Acción", href: "/areas" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Voluntariado", href: "/voluntariado" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Noticias", href: "/noticias" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* Barra superior de acreditación institucional */}
      <aside aria-label="Acreditación institucional" className="bg-[#111B30] text-white/80 text-[11px] py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E0A030] flex-shrink-0" />
            <span className="font-medium text-white/90">
              Personería Jurídica Provincial aprobada por Resolución DPJ N.º 4.933/2026
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">Mendoza, República Argentina</span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <Link
              href="/transparencia"
              className="hover:text-[#E0A030] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Marco Legal y Gobierno</span>
            </Link>
            <span className="text-white/30">|</span>
            <a
              href="mailto:altiorafundacion@gmail.com"
              className="hover:text-[#E0A030] transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-[#E0A030]" />
              <span>altiorafundacion@gmail.com</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Header principal */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? "bg-[#F7F3EA]/95 backdrop-blur-md shadow-md shadow-black/5 border-b border-[#EBE3D3]"
            : "bg-[#F7F3EA] border-b border-[#EBE3D3]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo ALTIORA */}
            <Link
              href="/"
              className="group focus:outline-none focus:ring-2 focus:ring-[#E0A030] rounded-xl p-1 -ml-1 transition-transform transform active:scale-95"
            >
              <Logo size="md" orientation="horizontal" />
            </Link>

            {/* Menú Desktop */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-[#1B2A49]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 rounded-xl text-xs xl:text-sm transition-all duration-150 relative ${
                      isActive
                        ? "text-[#1B2A49] bg-white border border-[#EBE3D3] shadow-xs font-bold"
                        : "text-[#1B2A49]/80 hover:text-[#1B2A49] hover:bg-white/60"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#E0A030] rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Acciones principales Desktop */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="/voluntariado"
                className="px-4 py-2 text-xs xl:text-sm font-bold text-[#1B2A49] border border-[#1B2A49]/20 rounded-xl hover:border-[#1B2A49] hover:bg-white transition-all shadow-2xs flex items-center gap-1.5 active:scale-95"
              >
                <HandHelping className="w-4 h-4 text-[#E0A030]" />
                <span>Sumarse</span>
              </Link>
              <Link
                href="/donar"
                className="px-5 py-2.5 text-xs xl:text-sm font-extrabold text-[#1B2A49] bg-[#E0A030] hover:bg-[#C78922] shadow-sm rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-[#1B2A49]" />
                <span>Donar</span>
              </Link>
            </div>

            {/* Botón menú móvil */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/donar"
                className="sm:hidden px-3 py-1.5 text-xs font-extrabold text-[#1B2A49] bg-[#E0A030] rounded-lg flex items-center gap-1 shadow-xs"
              >
                <Heart className="w-3.5 h-3.5 fill-[#1B2A49]" />
                <span>Donar</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#1B2A49] hover:bg-white border border-transparent hover:border-[#EBE3D3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Drawer móvil accesible y refinado */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#EBE3D3] bg-[#F7F3EA] shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-4">
              <div className="p-3 bg-[#1B2A49] text-white rounded-2xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E0A030]" />
                  <span className="font-semibold">Personería DPJ Res. 4.933/2026</span>
                </div>
                <Link
                  href="/transparencia"
                  className="text-[#E0A030] font-bold text-[11px] underline"
                >
                  Ver legal
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-[#1B2A49] text-white"
                          : "text-[#1B2A49] hover:bg-white/80"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive ? "text-[#E0A030]" : "text-[#1B2A49]/30"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#EBE3D3] grid grid-cols-2 gap-3">
                <Link
                  href="/voluntariado"
                  className="py-3 px-4 text-center text-xs font-bold text-[#1B2A49] bg-white border border-[#EBE3D3] rounded-xl shadow-xs"
                >
                  Ser Voluntario
                </Link>
                <Link
                  href="/donar"
                  className="py-3 px-4 text-center text-xs font-extrabold text-[#1B2A49] bg-[#E0A030] rounded-xl shadow-sm"
                >
                  Colaborar Ahora
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
