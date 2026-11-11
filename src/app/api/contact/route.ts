import { NextResponse } from "next/server";
import { createServerClientInstance } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, category, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Por favor completa todos los campos requeridos." },
        { status: 400 }
      );
    }

    const supabase = await createServerClientInstance();

    // Si Supabase aún no está vinculado con credenciales, respondemos éxito en modo simulado para desarrollo
    if (!supabase) {
      console.log("[Dev Mode] Mensaje de contacto recibido:", {
        fullName,
        email,
        phone,
        category,
        message,
      });
      return NextResponse.json({
        success: true,
        message:
          "Mensaje recibido exitosamente (Modo prueba: configura Supabase en .env.local para persistencia)",
      });
    }

    const { error } = await supabase.from("contact_messages").insert([
      {
        full_name: fullName,
        email,
        phone: phone || null,
        category: category || "contacto_general",
        message,
        status: "pendiente",
      },
    ]);

    if (error) {
      console.error("Error guardando contacto en Supabase:", error);
      return NextResponse.json(
        { error: "No se pudo registrar el mensaje. Intente nuevamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Tu mensaje fue enviado con éxito. Nos comunicaremos a la brevedad.",
    });
  } catch (err) {
    console.error("Error procesando solicitud de contacto:", err);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado al procesar tu solicitud." },
      { status: 500 }
    );
  }
}
