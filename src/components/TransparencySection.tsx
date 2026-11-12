import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  Scale,
  Users,
  Lock,
  Calendar,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function TransparencySection() {
  const pillars = [
    {
      title: "Personería Jurídica Aprobada",
      badge: "Resolución DPJ N.º 4.933/2026",
      category: "Marco Jurídico Oficial",
      description:
        "Constitución formal bajo el Código Civil y Comercial de la Nación (Arts. 193-224). Autorizada a funcionar por la Dirección de Personas Jurídicas de Mendoza (Expediente EX-2026-06638644-GDEMZA-DPJ#MGTYJ).",
      status: "Acreditado oficial",
      statusColor: "bg-emerald-100 text-emerald-900 border border-emerald-200",
      icon: Scale,
    },
    {
      title: "Consejo de Administración Ad Honorem",
      badge: "Gobierno Colegiado",
      category: "Gobernanza y Ética",
      description:
        "Presidente: Dante Gabriel Moner · Secretaria: Georgina Macarena Burgos · Tesorero: Carlos José Caselles. Conforme al estatuto (art. 6), los consejeros no perciben remuneración alguna por sus cargos.",
      status: "Dedicación estatutaria",
      statusColor: "bg-blue-100 text-blue-900 border border-blue-200",
      icon: Users,
    },
    {
      title: "Protección de Datos y Beneficiarios",
      badge: "Ley Nacional 25.326",
      category: "Privacidad y Dignidad",
      description:
        "Consentimiento informado, minimización y resguardo de la intimidad familiar. Prohibición absoluta de exhibir o publicar imágenes o datos de personas vulnerables y menores como condición de asistencia.",
      status: "Política interna POL-08",
      statusColor: "bg-purple-100 text-purple-900 border border-purple-200",
      icon: Lock,
    },
    {
      title: "Calendario de Rendición y Balances",
      badge: "Primer Cierre: 30/07/2027",
      category: "Contabilidad y Control",
      description:
        "El primer ejercicio estatutario concluye el 30/07/2027. Las memorias anuales, balances dictaminados por profesionales matriculados en Mendoza y rendiciones ante la DPJ serán de acceso público permanente.",
      status: "Obligación reglada",
      statusColor: "bg-amber-100 text-amber-900 border border-amber-200",
      icon: Calendar,
    },
  ];

  return (
    <section id="transparencia" className="py-24 bg-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0A030]/15 text-[#1B2A49] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E0A030]" />
            <span>Gobierno Abierto y Legalidad</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B2A49] font-heading tracking-tight">
            Transparencia y Ética Institucional
          </h2>

          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            La confianza pública de nuestra comunidad, donantes y colaboradores se funda en
            hechos y normas claras. Ponemos a disposición pública nuestras bases jurídicas,
            autoridades y políticas de gestión en Mendoza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 sm:p-9 rounded-3xl border border-[#EBE3D3] shadow-xs hover:border-[#E0A030] card-hover flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold text-[#E0A030] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-3 py-0.5 rounded-full ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F3EA] text-[#1B2A49] flex items-center justify-center flex-shrink-0 border border-[#EBE3D3]">
                      <Icon className="w-6 h-6 text-[#1B2A49]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#1B2A49] font-heading">
                        {item.title}
                      </h3>
                      <span className="inline-block text-[11px] font-bold text-[#1B2A49] bg-[#F7F3EA] px-2.5 py-0.5 rounded-md border border-[#EBE3D3] mt-1">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EBE3D3] flex items-center justify-between">
                  <span className="text-[11px] text-[#4A5568] flex items-center gap-1.5 font-medium">
                    <FileText className="w-3.5 h-3.5 text-[#1B2A49]" />
                    <span>Legajo oficial archivado</span>
                  </span>

                  <Link
                    href="/contacto"
                    className="text-xs font-bold text-[#1B2A49] hover:text-[#E0A030] transition-colors flex items-center gap-1"
                  >
                    <span>Consultar información</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E0A030]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Garantía Institucional */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE3D3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm text-[#1B2A49] leading-relaxed">
              Cumplimiento estricto de las disposiciones de la <strong>Dirección de Personas Jurídicas de Mendoza (Ley Provincial 9.577)</strong> y estándares éticos de administración del Código Civil y Comercial de la Nación.
            </p>
          </div>
          <Link
            href="/contacto"
            className="px-6 py-3 bg-[#1B2A49] hover:bg-[#253961] text-white font-bold text-xs rounded-xl transition-all whitespace-nowrap active:scale-95 shadow-xs"
          >
            Canal de Transparencia &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
