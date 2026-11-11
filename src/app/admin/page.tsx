"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Lock, Mail, Key, ShieldCheck, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    const supabase = createClient();

    if (!supabase) {
      setStatus({
        type: "error",
        message:
          "Supabase aún no está configurado en tus variables de entorno (.env.local o Vercel). Añade NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY para habilitar Supabase Auth.",
      });
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus({ type: "error", message: error.message });
    } else {
      setStatus({
        type: "success",
        message: "¡Sesión iniciada con éxito! Redirigiendo...",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#111B30] flex flex-col justify-between p-4 sm:p-8 text-white">
      {/* Barra superior */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al sitio web</span>
        </Link>
        <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-[#E0A030] font-mono">
          Supabase Auth Protected
        </span>
      </div>

      {/* Contenedor central */}
      <div className="max-w-md w-full mx-auto my-12 bg-white text-[#1B2A49] rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo orientation="vertical" size="md" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B2A49]/5 text-xs font-bold text-[#1B2A49] mb-2">
            <Lock className="w-3.5 h-3.5 text-[#E0A030]" />
            <span>Panel de Gestión y Backoffice</span>
          </div>
          <p className="text-xs text-[#4A5568]">
            Acceso exclusivo para administradores y equipo autorizado de Fundación ALTIORA.
          </p>
        </div>

        {status.message && (
          <div
            className={`p-4 rounded-xl mb-6 text-xs flex items-start gap-3 ${
              status.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#4A5568] absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@fundacionaltiora.org.ar"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-[#4A5568] absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#1B2A49] hover:bg-[#253961] text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <span>Verificando...</span> : <span>Ingresar al Sistema</span>}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#EBE3D3] text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#4A5568]">
            <ShieldCheck className="w-4 h-4 text-[#E0A030]" />
            <span>Seguridad cifrada de punto a punto (RLS)</span>
          </div>
          <p className="text-[11px] text-[#4A5568]/80">
            Los roles y permisos se asignan a través del panel de Supabase Auth.
          </p>
        </div>
      </div>

      {/* Pie inferior */}
      <div className="max-w-7xl mx-auto w-full text-center text-xs text-white/40">
        Fundación ALTIORA • Plataforma Administrativa Modular
      </div>
    </div>
  );
}
