"use client";

import React, { useState } from "react";
import { HandHelping, Check, Send, AlertCircle, Sparkles } from "lucide-react";

export default function VolunteerSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dni: "",
    city: "Luján de Cuyo",
    occupation: "",
    availabilityHours: "fines_de_semana",
    areasOfInterest: [] as string[],
    motivation: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const areaOptions = [
    { id: "alimenta", label: "ALTIORA Alimenta: Logística y entrega de alimentos" },
    { id: "capacita", label: "ALTIORA Capacita: Talleres de habilidades y oficios" },
    { id: "comunidad", label: "ALTIORA Comunidad: Acompañamiento territorial y escucha" },
    { id: "comunicacion", label: "Comunicación institucional, diseño y difusión ética" },
    { id: "profesional", label: "Apoyo profesional voluntario (social, pedagógico, técnico)" },
    { id: "eventos", label: "Organización de ferias, campañas y encuentros comunitarios" },
  ];

  const handleAreaToggle = (areaId: string) => {
    setFormData((prev) => {
      const exists = prev.areasOfInterest.includes(areaId);
      return {
        ...prev,
        areasOfInterest: exists
          ? prev.areasOfInterest.filter((id) => id !== areaId)
          : [...prev.areasOfInterest, areaId],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "No se pudo procesar la postulación.");
      }

      setStatus({
        type: "success",
        message:
          "¡Muchas gracias por postularte a Fundación ALTIORA! Nos pondremos en contacto contigo a la brevedad.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dni: "",
        city: "Luján de Cuyo",
        occupation: "",
        availabilityHours: "fines_de_semana",
        areasOfInterest: [],
        motivation: "",
      });
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Error al conectar con el servidor.";
      setStatus({ type: "error", message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="voluntariado" className="py-24 bg-white border-y border-[#EBE3D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Lado informativo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
              <HandHelping className="w-3.5 h-3.5 text-[#E0A030]" />
              <span>ALTIORA Solidaria</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A49] font-heading leading-tight">
              Súmate a nuestro voluntariado protegido y responsable
            </h2>

            <p className="text-base text-[#4A5568] leading-relaxed">
              En ALTIORA organizamos la participación voluntaria con roles definidos, inducción ética,
              resguardo de datos y condiciones seguras. Tu vocación y tiempo se traducen en
              oportunidades reales para personas y familias de Mendoza.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F7F3EA] border border-[#EBE3D3] flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#E0A030] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#1B2A49]">
                    Inducción y Cuidado Mutuo
                  </h4>
                  <p className="text-xs text-[#4A5568] mt-1">
                    Cada voluntario recibe capacitación inicial sobre protocolos de dignidad,
                    seguridad operativa y confidencialidad en el trato con las familias.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F3EA] border border-[#EBE3D3] flex items-start gap-3">
                <Check className="w-5 h-5 text-[#1B2A49] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#1B2A49]">
                    Certificación Institucional
                  </h4>
                  <p className="text-xs text-[#4A5568] mt-1">
                    Emitimos acreditación formal de horas y desempeño para tu legajo y desarrollo personal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de postulación */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F3EA] rounded-3xl p-6 sm:p-10 border border-[#EBE3D3] shadow-md">
              <h3 className="text-2xl font-bold text-[#1B2A49] font-heading mb-1">
                Formulario de Postulación
              </h3>
              <p className="text-xs text-[#4A5568] mb-6">
                Completa tus datos y nos comunicaremos para coordinar una primera charla.
              </p>

              {status.type && (
                <div
                  className={`p-4 rounded-xl mb-6 text-sm flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Ej. Sofía Morales"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-white text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
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
                      placeholder="sofia@ejemplo.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-white text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+54 9 261 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-white text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
                      DNI (Opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.dni}
                      onChange={(e) =>
                        setFormData({ ...formData, dni: e.target.value })
                      }
                      placeholder="Número de documento"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-white text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
                      Ciudad / Localidad
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      placeholder="Luján de Cuyo"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-white text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
                      Profesión / Oficio / Estudio
                    </label>
                    <input
                      type="text"
                      value={formData.occupation}
                      onChange={(e) =>
                        setFormData({ ...formData, occupation: e.target.value })
                      }
                      placeholder="Ej. Estudiante, docente, electricista..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-white text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
                      Disponibilidad
                    </label>
                    <select
                      value={formData.availabilityHours}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          availabilityHours: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-white text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                    >
                      <option value="fines_de_semana">Fines de semana (Sábados/Domingos)</option>
                      <option value="mananas">Días hábiles por la mañana</option>
                      <option value="tardes">Días hábiles por la tarde</option>
                      <option value="flexible">Flexible / A coordinar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-2">
                    Áreas de Interés (Selecciona una o más)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {areaOptions.map((opt) => {
                      const checked = formData.areasOfInterest.includes(opt.id);
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => handleAreaToggle(opt.id)}
                          className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all flex items-center justify-between ${
                            checked
                              ? "bg-[#1B2A49] text-white border-[#1B2A49]"
                              : "bg-white text-[#1B2A49] border-[#EBE3D3] hover:border-[#1B2A49]/40"
                          }`}
                        >
                          <span>{opt.label}</span>
                          {checked && <Check className="w-3.5 h-3.5 text-[#E0A030]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1B2A49] uppercase tracking-wider mb-1">
                    ¿Qué te motiva a sumarte a Fundación ALTIORA? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.motivation}
                    onChange={(e) =>
                      setFormData({ ...formData, motivation: e.target.value })
                    }
                    placeholder="Cuéntanos brevemente sobre ti y en qué te gustaría aportar..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBE3D3] bg-white text-sm text-[#1B2A49] focus:outline-none focus:ring-2 focus:ring-[#E0A030]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#1B2A49] hover:bg-[#253961] text-white font-bold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Enviando postulación...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#E0A030]" />
                      <span>Enviar Postulación</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#4A5568] text-center leading-relaxed">
                  Tus datos personales serán tratados de manera confidencial y utilizados exclusivamente
                  para la gestión y coordinación del programa de voluntariado de Fundación ALTIORA (Ley Nacional 25.326).
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
