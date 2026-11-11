"use client";

import React, { useState } from "react";
import { Heart, Copy, Check, ShieldCheck, ArrowRight, CreditCard } from "lucide-react";

export default function DonationSection() {
  const [donationType, setDonationType] = useState<"mensual" | "unica">("mensual");
  const [selectedAmount, setSelectedAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const predefinedAmounts = [5000, 10000, 20000, 50000];

  const bankData = {
    titular: "Fundación ALTIORA",
    cuit: "30-XXXXXXXX-X",
    banco: "Banco Nación / Macro (Mendoza)",
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0A030]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E0A030] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#E0A030]" />
            <span>Multiplica las Oportunidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Tu donación abre caminos y cambia futuros
          </h2>

          <p className="text-base text-white/80">
            Cada aporte se traduce directamente en alimentos, capacitación laboral y
            educación en Luján de Cuyo. Elige la forma que te sea más cómoda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tarjeta interactiva de donación online */}
          <div className="lg:col-span-7 bg-white text-[#1B2A49] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between border-b border-[#EBE3D3] pb-5 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030]">
                Donación Segura
              </span>
              <div className="inline-flex p-1 rounded-xl bg-[#F7F3EA] border border-[#EBE3D3]">
                <button
                  type="button"
                  onClick={() => setDonationType("mensual")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    donationType === "mensual"
                      ? "bg-[#1B2A49] text-white shadow-sm"
                      : "text-[#4A5568] hover:text-[#1B2A49]"
                  }`}
                >
                  Mensual (Recomendado)
                </button>
                <button
                  type="button"
                  onClick={() => setDonationType("unica")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    donationType === "unica"
                      ? "bg-[#1B2A49] text-white shadow-sm"
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
                Selecciona un monto sugerido:
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
                      className={`p-3.5 rounded-xl border text-center font-bold text-sm transition-all ${
                        isSelected
                          ? "bg-[#E0A030] text-[#1B2A49] border-[#E0A030] shadow-md scale-105"
                          : "bg-[#F7F3EA] text-[#1B2A49] border-[#EBE3D3] hover:border-[#1B2A49]"
                      }`}
                    >
                      ${amt.toLocaleString("es-AR")}
                    </button>
                  );
                })}
              </div>

              {/* Monto personalizado */}
              <div className="pt-2">
                <label className="block text-xs font-medium text-[#4A5568] mb-1">
                  O ingresa otro monto:
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-sm font-bold text-[#4A5568]">
                    $ ARS
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Ej. 15000"
                    className="w-full pl-16 pr-4 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm font-bold text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                  />
                </div>
              </div>
            </div>

            {/* Botón de Mercado Pago */}
            <div className="space-y-3">
              <a
                href={`#contacto`}
                className="w-full py-4 bg-[#009EE3] hover:bg-[#0082ba] text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>
                  Donar ${currentAmount.toLocaleString("es-AR")}{" "}
                  {donationType === "mensual" ? "por mes" : ""} con Mercado Pago
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-[#4A5568]">
                Cobro procesado de forma cifrada y segura a través de Mercado Pago.
              </p>
            </div>
          </div>

          {/* Tarjeta de Transferencia Bancaria Directa */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#E0A030]" />
              <h3 className="text-xl font-bold font-heading text-white">
                Transferencia Bancaria Directa
              </h3>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              Puedes realizar transferencias directamente a la cuenta institucional de la
              fundación sin comisiones intermediarias.
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
                    CBU
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
              <span>¿Necesitas comprobante o factura de donación?</span>
              <a
                href="#contacto"
                className="block text-[#E0A030] font-bold mt-1 hover:underline"
              >
                Envíanos tu comprobante por el formulario &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
