import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "original" | "inverso" | "monocromo";
  orientation?: "horizontal" | "vertical" | "isotipo";
  size?: "sm" | "md" | "lg" | "xl";
  useImageFile?: boolean;
}

/**
 * Logotipo Institucional de Fundación ALTIORA
 * Basado estrictamente en los archivos maestros y el Manual de Identidad Visual 2026.
 *
 * Colores oficiales:
 * - Azul profundo: #1B2A49
 * - Dorado sol: #E0A030
 * - Blanco / Marfil: #FFFFFF / #F7F3EA
 */
export default function Logo({
  className = "",
  variant = "original",
  orientation = "horizontal",
  size = "md",
  useImageFile = true,
}: LogoProps) {
  const isDarkBg = variant === "inverso";

  // Colores según versión del manual
  const outerChevronColor = isDarkBg ? "#FFFFFF" : "#1B2A49";
  const innerChevronColor = "#E0A030";
  const titleColor = isDarkBg ? "#FFFFFF" : "#1B2A49";
  const descriptorColor = isDarkBg ? "rgba(255,255,255,0.85)" : "#1B2A49";

  // Dimensiones según tamaño
  const dimensions = {
    sm: { px: 28, box: "w-7 h-7" },
    md: { px: 42, box: "w-10 h-10" },
    lg: { px: 64, box: "w-16 h-16" },
    xl: { px: 96, box: "w-24 h-24" },
  };

  const textSizes = {
    sm: { title: "text-base tracking-[0.25em]", desc: "text-[8px] tracking-[0.38em]" },
    md: { title: "text-xl tracking-[0.25em]", desc: "text-[9px] tracking-[0.42em]" },
    lg: { title: "text-3xl tracking-[0.28em]", desc: "text-xs tracking-[0.45em]" },
    xl: { title: "text-4xl tracking-[0.3em]", desc: "text-sm tracking-[0.48em]" },
  };

  // Renderizado del Isotipo
  const renderIsotipo = () => {
    // Si es fondo claro y tenemos el archivo oficial transparente del diseñador
    if (useImageFile && !isDarkBg) {
      return (
        <div className={`relative ${dimensions[size].box} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}>
          <Image
            src="/brand/isotipo-transparente.png"
            alt="Isotipo Fundación ALTIORA"
            width={dimensions[size].px}
            height={dimensions[size].px}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      );
    }

    // Versión vectorial SVG (imprescindible para la versión inversa sobre azul/fondos oscuros)
    return (
      <svg
        viewBox="0 0 100 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dimensions[size].box} flex-shrink-0 transition-transform duration-200 group-hover:scale-105`}
        aria-label="Isotipo Fundación ALTIORA"
      >
        <path
          d="M 18 78 L 50 24 L 82 78"
          stroke={outerChevronColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 33 78 L 50 49 L 67 78"
          stroke={innerChevronColor}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  if (orientation === "isotipo") {
    return <div className={`inline-flex items-center ${className}`}>{renderIsotipo()}</div>;
  }

  if (orientation === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {renderIsotipo()}
        <div className="mt-3 flex flex-col items-center">
          <span
            className={`font-black font-heading uppercase leading-none font-montserrat ${textSizes[size].title}`}
            style={{ color: titleColor }}
          >
            ALTIORA
          </span>
          <span
            className={`font-semibold uppercase leading-none mt-1.5 opacity-90 ${textSizes[size].desc}`}
            style={{ color: descriptorColor }}
          >
            FUNDACIÓN
          </span>
        </div>
      </div>
    );
  }

  // Horizontal (Firma por defecto para Navbar)
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {renderIsotipo()}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black font-heading uppercase leading-none font-montserrat ${textSizes[size].title}`}
          style={{ color: titleColor }}
        >
          ALTIORA
        </span>
        <span
          className={`font-semibold uppercase leading-none mt-1 opacity-90 ${textSizes[size].desc}`}
          style={{ color: descriptorColor }}
        >
          FUNDACIÓN
        </span>
      </div>
    </div>
  );
}
