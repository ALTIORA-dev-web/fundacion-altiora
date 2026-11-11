export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = "admin" | "colaborador" | "voluntario";

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  phone?: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone?: string;
  category: "contacto_general" | "solicitud_asistencia" | "prensa_institucional" | "alianzas";
  message: string;
  status: "pendiente" | "en_revision" | "respondido" | "archivado";
}

export interface VolunteerApplication {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  dni?: string;
  birth_date?: string;
  city: string;
  occupation?: string;
  skills: string[];
  availability_hours: string;
  areas_of_interest: string[];
  motivation: string;
  status: "postulado" | "contactado" | "entrevista" | "activo" | "inactivo";
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
  is_active: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  cover_image?: string;
  location: string;
  beneficiaries_count: number;
  status: "planificacion" | "en_curso" | "completado";
  start_date?: string;
  featured: boolean;
  created_at: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  category: string;
  published_at: string;
  author_id?: string;
  created_at: string;
}

export interface TransparencyReport {
  id: string;
  title: string;
  year: number;
  category: "memoria_anual" | "balance_contable" | "auditoria" | "informe_impacto";
  file_url: string;
  file_size?: string;
  created_at: string;
}

export interface DonationRecord {
  id: string;
  donor_name: string;
  donor_email: string;
  donor_phone?: string;
  amount: number;
  currency: string;
  donation_type: "unica" | "mensual";
  payment_method: "mercadopago" | "transferencia" | "tarjeta";
  payment_id?: string;
  status: "pendiente" | "aprobado" | "rechazado";
  created_at: string;
}
