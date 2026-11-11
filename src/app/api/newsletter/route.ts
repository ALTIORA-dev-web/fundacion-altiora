import { NextResponse } from "next/server";
import { createServerClientInstance } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Por favor ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    const supabase = await createServerClientInstance();

    if (!supabase) {
      console.log("[Dev Mode] Suscripción a newsletter:", email);
      return NextResponse.json({
        success: true,
        message:
          "¡Suscripción exitosa! (Modo prueba: configura Supabase en .env.local)",
      });
    }

    const { error } = await supabase.from("newsletter_subscribers").upsert([
      {
        email: email.toLowerCase().trim(),
        is_active: true,
      },
    ]);

    if (error) {
      console.error("Error guardando suscriptor en Supabase:", error);
      return NextResponse.json(
        { error: "No se pudo registrar la suscripción. Intente nuevamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "¡Te has suscrito exitosamente al boletín de Fundación ALTIORA!",
    });
  } catch (err) {
    console.error("Error procesando newsletter:", err);
    return NextResponse.json(
      { error: "Error procesando tu suscripción." },
      { status: 500 }
    );
  }
}
