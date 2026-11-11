import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  withTagline?: boolean;
}

export default function Logo({
  className = "",
  variant = "dark",
  withTagline = true,
}: LogoProps) {
  const isLight = variant === "light";
  const primaryColor = isLight ? "#FFFFFF" : "#1B2A49";
  const goldColor = "#E0A030";
  const subtitleColor = isLight ? "#E0A030" : "#4A5568";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icono: Dos flechas ascendentes superpuestas */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform group-hover:scale-105"
        >
          {/* Fondo sutil */}
          <rect
            width="48"
            height="48"
            rx="12"
            fill={isLight ? "rgba(255,255,255,0.08)" : "#F7F3EA"}
            className="transition-colors"
          />

          {/* Flecha ascendente izquierda / base (Dorado) */}
          <path
            d="M13 32L21 16L29 32H23V34H19V32H13Z"
            fill={goldColor}
            fillOpacity="0.9"
          />

          {/* Flecha ascendente derecha / avanzada que asciende más alto (Azul profundo o Blanco) */}
          <path
            d="M21 26L29 10L37 26H31V28H27V26H21Z"
            fill={primaryColor}
          />

          {/* Línea dinámica de progreso */}
          <circle cx="29" cy="8" r="2.5" fill={goldColor} />
        </svg>
      </div>

      {/* Nombre y subtítulo */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: goldColor }}
          >
            Fundación
          </span>
        </div>
        <span
          className="text-xl font-extrabold tracking-tight font-heading leading-tight"
          style={{ color: primaryColor }}
        >
          ALTIORA
        </span>
        {withTagline && (
          <span
            className="text-[10px] tracking-wider uppercase font-medium leading-none mt-0.5"
            style={{ color: subtitleColor }}
          >
            Juntos, más alto
          </span>
        )}
      </div>
    </div>
  );
}
