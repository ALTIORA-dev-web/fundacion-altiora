"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

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
          "¡Gracias por comunicarte con nosotros! Tu mensaje fue recibido y responderemos pronto.",
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
        message: "¡Te has suscrito exitosamente a nuestro boletín!",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Datos Institucionales y Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E0A030] bg-[#E0A030]/10 px-3 py-1 rounded-full">
                Canales Abiertos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading">
                Estamos para escucharte y acompañarte
              </h2>
              <p className="text-base text-[#4A5568] leading-relaxed">
                Ya sea para solicitar asistencia, proponer una alianza institucional, o
                hacernos llegar una inquietud, las puertas de Fundación ALTIORA están
                siempre abiertas.
              </p>
            </div>

            {/* Fichas de Contacto */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#EBE3D3] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B2A49] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#E0A030]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#4A5568]">Sede Territorial</h4>
                  <p className="text-sm font-bold text-[#1B2A49]">
                    Luján de Cuyo, Mendoza, Argentina
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EBE3D3] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B2A49] text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#E0A030]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#4A5568]">Correo Electrónico</h4>
                  <p className="text-sm font-bold text-[#1B2A49]">
                    contacto@fundacionaltiora.org.ar
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EBE3D3] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B2A49] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#E0A030]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#4A5568]">Atención Directa</h4>
                  <p className="text-sm font-bold text-[#1B2A49]">+54 9 261 000-0000</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6 rounded-2xl bg-[#1B2A49] text-white space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E0A030]" />
                <h3 className="text-base font-bold font-heading">
                  Suscríbete a nuestro boletín mensual
                </h3>
              </div>
              <p className="text-xs text-white/70">
                Recibe noticias de nuestros proyectos, eventos e informes de impacto en tu correo.
              </p>

              {newsletterStatus.message && (
                <p
                  className={`text-xs p-2.5 rounded-lg ${
                    newsletterStatus.type === "success"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-red-500/20 text-red-300"
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
                  placeholder="Tu correo electrónico"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#E0A030] hover:bg-[#C78922] text-[#1B2A49] font-bold text-xs rounded-xl transition-colors whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>

          {/* Formulario de Contacto y Solicitud de Asistencia */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EBE3D3] shadow-md">
              <h3 className="text-2xl font-bold text-[#1B2A49] font-heading mb-1">
                Envíanos tu Consulta o Solicitud
              </h3>
              <p className="text-xs text-[#4A5568] mb-6">
                Completa el formulario y te responderemos a la brevedad.
              </p>

              {contactStatus.type && (
                <div
                  className={`p-4 rounded-xl mb-6 text-sm flex items-start gap-3 ${
                    contactStatus.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {contactStatus.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                  <span>{contactStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+54 9 261 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    >
                      <option value="contacto_general">Consulta general</option>
                      <option value="solicitud_asistencia">
                        Solicitud de asistencia directa
                      </option>
                      <option value="alianzas">
                        Alianza institucional / Cooperación empresarial
                      </option>
                      <option value="prensa_institucional">
                        Prensa y medios de comunicación
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-[#F7F3EA] text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#E0A030] hover:bg-[#C78922] text-[#1B2A49] font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
