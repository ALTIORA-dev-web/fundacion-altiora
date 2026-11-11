"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, Heart, HandHelping } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Misión e Identidad", href: "/mision" },
    { label: "Áreas de Acción", href: "/areas" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Voluntariado", href: "/voluntariado" },
    { label: "Transparencia", href: "/transparencia" },
    { label: "Noticias", href: "/noticias" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F3EA]/95 backdrop-blur-md border-b border-[#EBE3D3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo ALTIORA */}
          <Link href="/" className="group focus:outline-none">
            <Logo size="md" orientation="horizontal" />
          </Link>

          {/* Menú Desktop con rutas dedicadas */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-[#1B2A49]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors relative py-1.5 ${
                    isActive
                      ? "text-[#E0A030] after:w-full after:bg-[#E0A030]"
                      : "hover:text-[#E0A030] after:w-0 hover:after:w-full after:bg-[#E0A030]"
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Acciones principales */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/voluntariado"
              className="px-4 py-2 text-sm font-semibold text-[#1B2A49] border border-[#1B2A49]/30 rounded-lg hover:border-[#1B2A49] hover:bg-[#1B2A49]/5 transition-all flex items-center gap-1.5"
            >
              <HandHelping className="w-4 h-4 text-[#1B2A49]" />
              <span>Sumarse</span>
            </Link>
            <Link
              href="/donar"
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#E0A030] hover:bg-[#C78922] shadow-sm rounded-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donar</span>
            </Link>
          </div>

          {/* Botón Móvil */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1B2A49] hover:text-[#E0A030] focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EBE3D3] bg-[#F7F3EA] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-semibold ${
                    isActive
                      ? "bg-[#1B2A49] text-white"
                      : "text-[#1B2A49] hover:bg-[#EBE3D3]/50 hover:text-[#E0A030]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-[#EBE3D3] flex flex-col gap-2">
            <Link
              href="/voluntariado"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-[#1B2A49] border border-[#1B2A49]/30 rounded-lg"
            >
              Sumarse como Voluntario
            </Link>
            <Link
              href="/donar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-bold text-white bg-[#E0A030] rounded-lg shadow-sm"
            >
              Hacer una Donación
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
