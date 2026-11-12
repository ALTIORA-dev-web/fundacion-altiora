import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fundación ALTIORA | Impulsamos oportunidades. Elevamos futuros.",
  description:
    "Promovemos el desarrollo integral y la inclusión social en Mendoza mediante programas de asistencia alimentaria, capacitación, educación y fortalecimiento comunitario con enfoque de dignidad y transparencia.",
  keywords: [
    "Fundación Altiora",
    "Altiora Mendoza",
    "Luján de Cuyo",
    "Mendoza",
    "Inclusión social",
    "Asistencia alimentaria",
    "Capacitación laboral",
    "Voluntariado Mendoza",
    "Transparencia institucional",
    "Desarrollo comunitario",
  ],
  authors: [{ name: "Fundación ALTIORA" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Fundación ALTIORA | Impulsamos oportunidades. Elevamos futuros.",
    description:
      "Articulamos asistencia inmediata con oportunidades reales de desarrollo personal y comunitario en Mendoza.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#F7F3EA] text-[#1B2A49]">
        {children}
      </body>
    </html>
  );
}
