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
  title: "Fundación ALTIORA | Juntos, más alto",
  description:
    "Promovemos la inclusión social, la igualdad de oportunidades y el desarrollo integral de personas, familias y comunidades en Luján de Cuyo, Mendoza.",
  keywords: [
    "Fundación Altiora",
    "Luján de Cuyo",
    "Mendoza",
    "Inclusión social",
    "Voluntariado",
    "Donaciones",
    "Desarrollo comunitario",
    "Ayuda social",
  ],
  authors: [{ name: "Fundación ALTIORA" }],
  icons: {
    icon: [
      { url: "/brand/isotipo-transparente.png" },
      { url: "/brand/isotipo-transparente.png", sizes: "32x32" },
      { url: "/brand/isotipo-transparente.png", sizes: "192x192" },
    ],
    shortcut: "/brand/isotipo-transparente.png",
    apple: "/brand/isotipo-transparente.png",
  },
  openGraph: {
    title: "Fundación ALTIORA | Juntos, más alto",
    description: "Ascender abriendo caminos. Luján de Cuyo, Mendoza.",
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
