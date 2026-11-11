import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Retornamos cliente dummy o nulo si no está configurado aún para evitar que la app crashee en build inicial
    return null;
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
