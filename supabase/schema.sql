-- ==============================================================================
-- FUNDACIÓN ALTIORA - ESQUEMA DE BASE DE DATOS SUPABASE
-- "Ascender abriendo caminos" | "Juntos, más alto"
-- Luján de Cuyo, Mendoza, Argentina
-- ==============================================================================

-- 1. TIPOS ENUMERADOS
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('admin', 'colaborador', 'voluntario');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE contact_category AS ENUM (
        'contacto_general',
        'solicitud_asistencia',
        'prensa_institucional',
        'alianzas'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE volunteer_status AS ENUM (
        'postulado',
        'contactado',
        'entrevista',
        'activo',
        'inactivo'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE project_status AS ENUM ('planificacion', 'en_curso', 'completado');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE transparency_category AS ENUM (
        'memoria_anual',
        'balance_contable',
        'auditoria',
        'informe_impacto'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE donation_status AS ENUM ('pendiente', 'aprobado', 'rechazado');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 2. TABLA: PERFILES DE USUARIOS (Vinculada a auth.users de Supabase)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'colaborador',
    phone TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. TABLA: MENSAJES DE CONTACTO Y SOLICITUDES DE ASISTENCIA
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    category contact_category NOT NULL DEFAULT 'contacto_general',
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pendiente' CHECK (status IN ('pendiente', 'en_revision', 'respondido', 'archivado'))
);

-- 4. TABLA: VOLUNTARIADO
CREATE TABLE IF NOT EXISTS public.volunteers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    dni TEXT,
    birth_date DATE,
    city TEXT NOT NULL DEFAULT 'Luján de Cuyo',
    occupation TEXT,
    skills TEXT[] DEFAULT '{}',
    availability_hours TEXT NOT NULL,
    areas_of_interest TEXT[] DEFAULT '{}',
    motivation TEXT NOT NULL,
    status volunteer_status NOT NULL DEFAULT 'postulado'
);

-- 5. TABLA: SUSCRIPTORES NEWSLETTER
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    is_active BOOLEAN NOT NULL DEFAULT true
);

-- 6. TABLA: PROYECTOS Y PROGRAMAS
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL,
    summary TEXT NOT NULL,
    description TEXT NOT NULL,
    cover_image TEXT,
    location TEXT NOT NULL DEFAULT 'Luján de Cuyo, Mendoza',
    beneficiaries_count INTEGER NOT NULL DEFAULT 0,
    status project_status NOT NULL DEFAULT 'en_curso',
    start_date DATE,
    featured BOOLEAN NOT NULL DEFAULT false
);

-- 7. TABLA: NOTICIAS Y NOVEDADES
CREATE TABLE IF NOT EXISTS public.news (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    category TEXT NOT NULL DEFAULT 'Institucional',
    published_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

-- 8. TABLA: TRANSPARENCIA Y RENDICIÓN DE CUENTAS
CREATE TABLE IF NOT EXISTS public.transparency_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    title TEXT NOT NULL,
    year INTEGER NOT NULL,
    category transparency_category NOT NULL,
    file_url TEXT NOT NULL,
    file_size TEXT
);

-- 9. TABLA: DONACIONES
CREATE TABLE IF NOT EXISTS public.donations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    donor_name TEXT NOT NULL,
    donor_email TEXT NOT NULL,
    donor_phone TEXT,
    amount NUMERIC(12, 2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'ARS',
    donation_type TEXT NOT NULL CHECK (donation_type IN ('unica', 'mensual')),
    payment_method TEXT NOT NULL CHECK (payment_method IN ('mercadopago', 'transferencia', 'tarjeta')),
    payment_id TEXT,
    status donation_status NOT NULL DEFAULT 'pendiente'
);

-- 10. TABLA: IMPACTO SOCIAL Y ESTADÍSTICAS GLOBALES
CREATE TABLE IF NOT EXISTS public.social_impact_stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_key TEXT NOT NULL UNIQUE,
    label TEXT NOT NULL,
    value INTEGER NOT NULL DEFAULT 0,
    prefix TEXT DEFAULT '',
    suffix TEXT DEFAULT '+',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- POLÍTICAS DE SEGURIDAD (ROW LEVEL SECURITY - RLS)
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transparency_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_impact_stats ENABLE ROW LEVEL SECURITY;

-- Lectura pública para información institucional
CREATE POLICY "Acceso público lectura proyectos" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Acceso público lectura noticias" ON public.news FOR SELECT USING (true);
CREATE POLICY "Acceso público lectura transparencia" ON public.transparency_documents FOR SELECT USING (true);
CREATE POLICY "Acceso público lectura impacto" ON public.social_impact_stats FOR SELECT USING (true);

-- Inserción pública para formularios
CREATE POLICY "Cualquiera puede enviar mensaje contacto" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Cualquiera puede postularse como voluntario" ON public.volunteers FOR INSERT WITH CHECK (true);
CREATE POLICY "Cualquiera puede suscribirse al newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Cualquiera puede registrar una donación" ON public.donations FOR INSERT WITH CHECK (true);

-- Solo administradores y colaboradores autenticados pueden ver y gestionar mensajes y voluntarios
CREATE POLICY "Staff puede ver mensajes contacto" ON public.contact_messages
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Staff puede ver y editar voluntarios" ON public.volunteers
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Staff puede gestionar proyectos" ON public.projects
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Staff puede gestionar noticias" ON public.news
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Staff puede gestionar transparencia" ON public.transparency_documents
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Staff puede gestionar donaciones" ON public.donations
    FOR ALL USING (auth.role() = 'authenticated');

-- Datos semilla iniciales para impacto social
INSERT INTO public.social_impact_stats (metric_key, label, value, suffix) VALUES
('personas_asistidas', 'Personas y Familias Asistidas', 1250, '+'),
('capacitaciones', 'Horas de Talleres y Formación', 420, 'hs'),
('voluntarios_activos', 'Voluntarios Comprometidos', 65, '+'),
('proyectos_comunitarios', 'Iniciativas y Proyectos en Marcha', 8, '')
ON CONFLICT (metric_key) DO NOTHING;
