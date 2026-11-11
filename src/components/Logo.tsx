import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "original" | "inverso" | "marfil";
  orientation?: "horizontal" | "vertical" | "full-image" | "isotipo";
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Logotipo Institucional de Fundación ALTIORA
 * Cumple estrictamente con el Manual de Identidad Visual Institucional 2026.
 * Diseñado para que "Fundación ALTIORA" se lea con total claridad y nitidez.
 */
export default function Logo({
  className = "",
  variant = "original",
  orientation = "horizontal",
  size = "md",
}: LogoProps) {
  const isDarkBg = variant === "inverso";

  // Colores oficiales del manual
  const titleColor = isDarkBg ? "#FFFFFF" : "#1B2A49";
  const descriptorColor = isDarkBg ? "#E0A030" : "#1B2A49";

  // Dimensiones configuradas para máxima legibilidad
  const dimensions = {
    sm: {
      icon: 32,
      box: "w-8 h-8",
      title: "text-lg font-extrabold tracking-[0.16em]",
      desc: "text-[10px] font-bold tracking-[0.32em]",
    },
    md: {
      icon: 46,
      box: "w-11 h-11",
      title: "text-2xl font-black font-heading tracking-[0.18em]",
      desc: "text-xs font-bold tracking-[0.36em]",
    },
    lg: {
      icon: 72,
      box: "w-20 h-20",
      title: "text-3xl sm:text-4xl font-black font-heading tracking-[0.2em]",
      desc: "text-sm font-bold tracking-[0.4em]",
    },
    xl: {
      icon: 96,
      box: "w-28 h-28",
      title: "text-4xl sm:text-5xl font-black font-heading tracking-[0.22em]",
      desc: "text-base font-bold tracking-[0.45em]",
    },
  };

  const current = dimensions[size];

  // Si se solicita el isotipo solo (para favicons, iconos o sellos de agua)
  if (orientation === "isotipo") {
    if (!isDarkBg) {
      return (
        <div className={`relative ${current.box} flex items-center justify-center flex-shrink-0 ${className}`}>
          <Image
            src="/brand/isotipo-transparente.png"
            alt="Isotipo Fundación ALTIORA"
            width={current.icon}
            height={current.icon}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      );
    }

    return (
      <svg
        viewBox="0 0 100 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${current.box} flex-shrink-0 ${className}`}
        aria-label="Isotipo Fundación ALTIORA Inverso"
      >
        <path
          d="M 18 78 L 50 24 L 82 78"
          stroke="#FFFFFF"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 33 78 L 50 49 L 67 78"
          stroke="#E0A030"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Si se solicita la imagen oficial completa del diseñador (con fondo marfil o transparente)
  if (orientation === "full-image") {
    const imgSrc =
      variant === "marfil"
        ? "/brand/logo-completo-marfil.png"
        : "/brand/logo-completo-transparente.png";

    const imgSizes = {
      sm: { w: 140, h: 140 },
      md: { w: 200, h: 200 },
      lg: { w: 280, h: 280 },
      xl: { w: 360, h: 360 },
    };

    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <Image
          src={imgSrc}
          alt="Fundación ALTIORA"
          width={imgSizes[size].w}
          height={imgSizes[size].h}
          className="object-contain max-w-full h-auto drop-shadow-sm"
          priority
        />
      </div>
    );
  }

  // Versión Vertical (Para tarjetas de presentación, portadas y panel admin)
  if (orientation === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Isotipo */}
        {!isDarkBg ? (
          <div className={`relative ${current.box} mb-3 flex items-center justify-center flex-shrink-0`}>
            <Image
              src="/brand/isotipo-transparente.png"
              alt="Isotipo ALTIORA"
              width={current.icon}
              height={current.icon}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        ) : (
          <svg
            viewBox="0 0 100 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${current.box} mb-3 flex-shrink-0`}
          >
            <path
              d="M 18 78 L 50 24 L 82 78"
              stroke="#FFFFFF"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 33 78 L 50 49 L 67 78"
              stroke="#E0A030"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {/* Tipografía con alta legibilidad */}
        <div className="flex flex-col items-center">
          <span
            className={`font-black uppercase leading-none font-montserrat ${current.title}`}
            style={{ color: titleColor }}
          >
            ALTIORA
          </span>
          <span
            className={`uppercase leading-none mt-2 ${current.desc}`}
            style={{ color: descriptorColor }}
          >
            FUNDACIÓN
          </span>
        </div>
      </div>
    );
  }

  // Versión Horizontal (Para Header y Barra de Navegación)
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Isotipo */}
      {!isDarkBg ? (
        <div className={`relative ${current.box} flex items-center justify-center flex-shrink-0`}>
          <Image
            src="/brand/isotipo-transparente.png"
            alt="Isotipo ALTIORA"
            width={current.icon}
            height={current.icon}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      ) : (
        <svg
          viewBox="0 0 100 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${current.box} flex-shrink-0`}
        >
          <path
            d="M 18 78 L 50 24 L 82 78"
            stroke="#FFFFFF"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 33 78 L 50 49 L 67 78"
            stroke="#E0A030"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {/* Nombre y descriptor perfectamente legibles */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black uppercase leading-none font-montserrat ${current.title}`}
          style={{ color: titleColor }}
        >
          ALTIORA
        </span>
        <span
          className={`uppercase leading-none mt-1.5 ${current.desc}`}
          style={{ color: descriptorColor }}
        >
          FUNDACIÓN
        </span>
      </div>
    </div>
  );
}
