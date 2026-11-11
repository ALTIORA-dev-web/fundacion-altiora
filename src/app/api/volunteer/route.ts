import { NextResponse } from "next/server";
import { createServerClientInstance } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      dni,
      city,
      occupation,
      skills,
      availabilityHours,
      areasOfInterest,
      motivation,
    } = body;

    if (!fullName || !email || !phone || !motivation) {
      return NextResponse.json(
        { error: "Por favor completa los campos obligatorios." },
        { status: 400 }
      );
    }

    const supabase = await createServerClientInstance();

    if (!supabase) {
      console.log("[Dev Mode] Postulación de voluntario recibida:", body);
      return NextResponse.json({
        success: true,
        message:
          "Postulación recibida (Modo prueba: configura Supabase en .env.local para persistencia)",
      });
    }

    const { error } = await supabase.from("volunteers").insert([
      {
        full_name: fullName,
        email,
        phone,
        dni: dni || null,
        city: city || "Luján de Cuyo",
        occupation: occupation || null,
        skills: Array.isArray(skills) ? skills : [],
        availability_hours: availabilityHours || "flexible",
        areas_of_interest: Array.isArray(areasOfInterest) ? areasOfInterest : [],
        motivation,
        status: "postulado",
      },
    ]);

    if (error) {
      console.error("Error guardando voluntario en Supabase:", error);
      return NextResponse.json(
        { error: "No se pudo registrar la postulación. Intente nuevamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "¡Gracias por tu vocación y compromiso! Nos contactaremos contigo muy pronto.",
    });
  } catch (err) {
    console.error("Error procesando solicitud de voluntariado:", err);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado al procesar la postulación." },
      { status: 500 }
    );
  }
}
