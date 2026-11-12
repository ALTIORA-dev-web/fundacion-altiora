"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "contacto_general",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [loading, setLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setContactStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al enviar el mensaje.");

      setContactStatus({
        type: "success",
        message:
          "¡Gracias por comunicarte con nosotros! Tu mensaje fue recibido y te responderemos a la brevedad.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        category: "contacto_general",
        message: "",
      });
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Error al conectar con el servidor.";
      setContactStatus({ type: "error", message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al suscribir.");

      setNewsletterStatus({
        type: "success",
        message: "¡Te has suscrito exitosamente a nuestro boletín institucional!",
      });
      setNewsletterEmail("");
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Error al procesar la suscripción.";
      setNewsletterStatus({ type: "error", message: errorMsg });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Lado Izquierdo: Canales y Datos Institucionales */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-[#E0A030]" />
                <span>Canales Abiertos</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
                Estamos para escucharte
              </h2>
              <p className="text-base text-[#4A5568] leading-relaxed">
                Ya sea para proponer una alianza institucional, coordinar donaciones en especie,
                hacernos llegar una consulta o solicitar orientación social en Mendoza,
                nuestros canales están a tu disposición.
              </p>
            </div>

            {/* Fichas de Contacto */}
            <div className="space-y-3.5">
              <div className="p-4.5 rounded-2xl bg-white border border-[#EBE3D3] flex items-center gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-[#1B2A49] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#E0A030]" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-bold text-[#4A5568] tracking-wider">
                    Sede Territorial
                  </h4>
                  <p className="text-sm font-bold text-[#1B2A49]">
                    Luján de Cuyo, Mendoza, República Argentina
                  </p>
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-white border border-[#EBE3D3] flex items-center gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-[#1B2A49] text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#E0A030]" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-bold text-[#4A5568] tracking-wider">
                    Correo Electrónico Oficial
                  </h4>
                  <a
                    href="mailto:altiorafundacion@gmail.com"
                    className="text-sm font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors"
                  >
                    altiorafundacion@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-white border border-[#EBE3D3] flex items-center gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-[#1B2A49] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#E0A030]" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-bold text-[#4A5568] tracking-wider">
                    Mesa de Entrada y Consultas
                  </h4>
                  <p className="text-sm font-bold text-[#1B2A49]">+54 9 261 000-0000</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-7 rounded-3xl bg-[#1B2A49] text-white space-y-4 shadow-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E0A030]" />
                <h3 className="text-base font-bold font-heading">
                  Boletín Informativo de ALTIORA
                </h3>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Recibe novedades de programas, cronogramas de ferias e informes de gestión en tu casilla de correo.
              </p>

              {newsletterStatus.message && (
                <p
                  className={`text-xs p-3 rounded-xl ${
                    newsletterStatus.type === "success"
                      ? "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30"
                      : "bg-red-500/20 text-red-200 border border-red-500/30"
                  }`}
                >
                  {newsletterStatus.message}
                </p>
              )}

              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#E0A030] hover:bg-[#C78922] text-[#1B2A49] font-extrabold text-xs rounded-xl transition-all whitespace-nowrap cursor-pointer active:scale-95"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EBE3D3] shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#1B2A49] font-heading mb-1">
                  Envíanos un Mensaje
                </h3>
                <p className="text-xs text-[#4A5568]">
                  Completa el formulario y derivaremos tu mensaje al área correspondiente del Consejo o coordinación.
                </p>
              </div>

              {contactStatus.type && (
                <div
                  className={`p-4.5 rounded-2xl mb-6 text-sm flex items-start gap-3.5 animate-in fade-in duration-200 ${
                    contactStatus.type === "success"
                      ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                      : "bg-red-50 text-red-900 border border-red-200"
                  }`}
                >
                  {contactStatus.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">
                    {contactStatus.message}
                  </span>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Tu nombre y apellido"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="tu@correo.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+54 9 261 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1.5">
                      Motivo del Contacto
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none transition-all"
                    >
                      <option value="contacto_general">Consulta general</option>
                      <option value="alianzas">
                        Alianza institucional / Cooperación empresarial
                      </option>
                      <option value="donacion_especie">
                        Donación en especie o apoyo logístico
                      </option>
                      <option value="solicitud_asistencia">
                        Orientación y asistencia comunitaria
                      </option>
                      <option value="transparencia">
                        Consulta institucional y transparencia
                      </option>
                      <option value="prensa_institucional">
                        Prensa y medios de comunicación
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1.5">
                    Mensaje o detalle de la consulta *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#E0A030] hover:bg-[#C78922] text-[#1B2A49] font-extrabold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98 cursor-pointer"
                >
                  {loading ? (
                    <span>Enviando mensaje...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 fill-[#1B2A49]" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#4A5568] text-center leading-relaxed">
                  Tratamiento confidencial según Ley Nacional 25.326. La información suministrada se utiliza exclusivamente para responder tu consulta institucional.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
