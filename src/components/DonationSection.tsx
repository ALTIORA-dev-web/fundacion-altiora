"use client";

import React, { useState } from "react";
import {
  Heart,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
  CreditCard,
  Building2,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function DonationSection() {
  const [activeTab, setActiveTab] = useState<"monetaria" | "especie">("monetaria");
  const [donationType, setDonationType] = useState<"mensual" | "unica">("mensual");
  const [selectedAmount, setSelectedAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const predefinedAmounts = [5000, 10000, 20000, 50000];

  const bankData = {
    titular: "Fundación ALTIORA",
    cuit: "30-XXXXXXXX-X",
    banco: "Banco Nación / Banco Macro (Mendoza)",
    alias: "FUNDACION.ALTIORA.MZA",
    cbu: "0110000000000000000000",
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const currentAmount = customAmount ? Number(customAmount) : selectedAmount;

  return (
    <section id="donaciones" className="py-24 bg-[#1B2A49] text-white relative overflow-hidden">
      {/* Detalle visual sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0A030]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#253961]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E0A030] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 fill-[#E0A030]" />
            <span>Colaboración Responsable</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Tu apoyo abre caminos y genera oportunidades
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Cada aporte se destina con trazabilidad estricta a programas de asistencia alimentaria,
            capacitación laboral y desarrollo comunitario en Mendoza. Toda donación cuenta con
            constancia formal y destino auditado.
          </p>

          {/* Selector de Pestaña Principal */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <button
                type="button"
                onClick={() => setActiveTab("monetaria")}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "monetaria"
                    ? "bg-[#E0A030] text-[#1B2A49] shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Donación Monetaria
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("especie")}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "especie"
                    ? "bg-[#E0A030] text-[#1B2A49] shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                En Especie y Alianzas
              </button>
            </div>
          </div>
        </div>

        {activeTab === "monetaria" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tarjeta interactiva de donación online */}
            <div className="lg:col-span-7 bg-white text-[#1B2A49] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EBE3D3] pb-5 mb-6 gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] block">
                    Aporte Online
                  </span>
                  <h3 className="text-xl font-bold font-heading text-[#1B2A49]">
                    Mercado Pago Seguro
                  </h3>
                </div>
                <div className="inline-flex p-1 rounded-xl bg-[#F7F3EA] border border-[#EBE3D3]">
                  <button
                    type="button"
                    onClick={() => setDonationType("mensual")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      donationType === "mensual"
                        ? "bg-[#1B2A49] text-white shadow-xs"
                        : "text-[#4A5568] hover:text-[#1B2A49]"
                    }`}
                  >
                    Mensual (Recomendado)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("unica")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      donationType === "unica"
                        ? "bg-[#1B2A49] text-white shadow-xs"
                        : "text-[#4A5568] hover:text-[#1B2A49]"
                    }`}
                  >
                    Por única vez
                  </button>
                </div>
              </div>

              {/* Selector de Montos */}
              <div className="space-y-4 mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B2A49]">
                  Selecciona un monto sugerido en ARS:
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {predefinedAmounts.map((amt) => {
                    const isSelected = selectedAmount === amt && !customAmount;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-3 px-3 rounded-xl border text-center transition-all ${
                          isSelected
                            ? "bg-[#1B2A49] text-white border-[#1B2A49] shadow-sm font-extrabold"
                            : "bg-[#F7F3EA] text-[#1B2A49] border-[#EBE3D3] hover:border-[#E0A030] font-bold"
                        }`}
                      >
                        <span className="text-sm sm:text-base">
                          ${amt.toLocaleString("es-AR")}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Monto personalizado */}
                <div>
                  <label className="block text-xs font-semibold text-[#4A5568] mb-1.5">
                    O ingresa otro monto personalizado:
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#1B2A49]">
                      $
                    </span>
                    <input
                      type="number"
                      min="500"
                      step="500"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Ej. 15000"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] font-bold focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Botón Mercado Pago */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://link.mercadopago.com.ar/fundacionaltiora?amount=${currentAmount}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#E0A030] hover:bg-[#C78922] text-[#1B2A49] font-extrabold text-base rounded-2xl transition-all shadow-md flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <CreditCard className="w-5 h-5 fill-[#1B2A49]" />
                  <span>
                    Donar ${currentAmount.toLocaleString("es-AR")}{" "}
                    {donationType === "mensual" ? "mensuales" : ""} con Mercado Pago
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-[11px] text-[#4A5568]">
                  Cobro procesado de forma cifrada y segura a través de la pasarela de Mercado Pago.
                </p>
              </div>
            </div>

            {/* Tarjeta de Transferencia Bancaria Directa */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#E0A030]" />
                <h3 className="text-xl font-bold font-heading text-white">
                  Transferencia Bancaria Directa
                </h3>
              </div>

              <p className="text-xs text-white/70 leading-relaxed">
                Puedes transferir sin comisiones intermediarias a la cuenta institucional de la fundación.
              </p>

              <div className="space-y-3">
                {/* Alias */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/50 block">
                      Alias bancario
                    </span>
                    <span className="text-sm font-mono font-bold text-[#E0A030]">
                      {bankData.alias}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(bankData.alias, "alias")}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Copiar alias"
                  >
                    {copiedField === "alias" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* CBU */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/50 block">
                      CBU Institucional
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {bankData.cbu}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(bankData.cbu, "cbu")}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Copiar CBU"
                  >
                    {copiedField === "cbu" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Titular y CUIT */}
                <div className="text-xs text-white/70 space-y-1 pt-1">
                  <p>
                    <strong>Titular:</strong> {bankData.titular}
                  </p>
                  <p>
                    <strong>CUIT:</strong> {bankData.cuit}
                  </p>
                  <p>
                    <strong>Entidad:</strong> {bankData.banco}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs text-white/80">
                <span>¿Deseas constancia formal de donación?</span>
                <Link
                  href="/contacto"
                  className="block text-[#E0A030] font-bold mt-1 hover:underline"
                >
                  Envíanos tu comprobante por el formulario &rarr;
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* Pestaña de Donación en Especie y Alianzas */
          <div className="bg-white text-[#1B2A49] rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto border border-white/20 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] bg-[#E0A030]/10 px-3 py-1 rounded-full">
                POL-05 · Trazabilidad de Bienes
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#1B2A49]">
                Donaciones en Especie y Alianzas Logísticas
              </h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Articulamos con productores, empresas de logística, supermercados e instituciones educativas para recibir alimentos aptos, insumos formativos y equipamiento bajo estricto control de calidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F7F3EA] border border-[#EBE3D3] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#E0A030] shadow-2xs">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#1B2A49] text-sm">Alimentos e Insumos</h4>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Alimentos no perecederos con fecha de vencimiento controlada, embalaje íntegro y aptitud bromatológica.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F3EA] border border-[#EBE3D3] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1B2A49] shadow-2xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#1B2A49] text-sm">Alianzas y Logística</h4>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Convenios con empresas para almacenamiento, traslado seguro y distribución en territorio mendocino.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F3EA] border border-[#EBE3D3] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#E0A030] shadow-2xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#1B2A49] text-sm">Herramientas y Talleres</h4>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Donación de insumos pedagógicos, herramientas de oficio y equipamiento para las capacitaciones sociolaborales.
                </p>
              </div>
            </div>

            <div className="text-center pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1B2A49] hover:bg-[#253961] text-white font-extrabold text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                <span>Coordinar Donación en Especie o Alianza</span>
                <ArrowRight className="w-4 h-4 text-[#E0A030]" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
