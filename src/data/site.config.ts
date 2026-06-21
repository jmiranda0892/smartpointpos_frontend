import type { MembershipTier } from '@/types/api'

export const siteConfig = {
  brand: {
    name: 'Kelin Pérez Ulloa',
    initials: 'KPU',
    tagline: 'Análisis • Membresías • Contenido Premium',
  },
  prices: {
    pale: 1500,
    vip: 3500,
    book: 999,
  },
  membershipTier: 'free' as MembershipTier,
  membershipLabels: {
    free: 'Cuenta Gratis',
    pale: 'Membresía Palé',
    vip: 'Membresía VIP',
  },
  social: {
    whatsapp: '',
    telegram: '',
    youtube: '',
    instagram: '',
    facebook: '',
    tiktok: '',
  },
  legal: {
    numbersDisclaimer:
      'Aviso: Contenido informativo de entretenimiento. No garantiza resultados',
    premiumUnlockNote: 'Las áreas premium se desbloquean después del pago.',
  },
  home: {
    subtitle: 'App para comunidad y membresía',
    statusLabel: 'Estado del usuario',
  },
  membership: {
    pale: {
      subtitle: 'Plan mensual de acceso exclusivo',
      priceLabel: 'Pago mensual',
      benefits: [
        'Análisis especial de palé',
        'Actualizaciones diarias',
        'Acceso a grupo privado',
        'Notificaciones importantes',
      ],
      cta: 'Pagar membresía Palé',
    },
    vip: {
      subtitle: 'Acceso premium para miembros avanzados',
      priceLabel: 'Pago mensual premium',
      benefits: [
        'Todo lo de membresía Palé',
        'Contenido VIP privado',
        'Acceso temprano a análisis',
        'Atención directa por WhatsApp',
        'Videos privados para miembros',
      ],
      cta: 'Entrar al VIP',
    },
    book: {
      subtitle: 'Producto de pago único',
      title: 'Métodos de análisis y tendencias',
      bullets: ['Libro PDF descargable'],
      note: 'Recibirás acceso al libro digital, después de realizar el pago.',
      cta: 'Comprar libro digital',
    },
  },
  homeTiles: [
    {
      subtitle: 'Contenido diario',
      title: 'Números del día',
      to: '/numeros',
      icon: 'numbers' as const,
    },
    {
      subtitle: 'Acceso pago',
      title: 'Membresía Palé',
      to: '/membresia/pale',
      icon: 'pale' as const,
    },
    {
      subtitle: 'Premium',
      title: 'Membresía VIP',
      to: '/membresia/vip',
      icon: 'vip' as const,
    },
    {
      subtitle: 'PDF pago',
      title: 'Libro Digital',
      to: '/libro',
      icon: 'book' as const,
    },
  ],
  socialPlatforms: [
    { id: 'whatsapp', label: 'WhatsApp', hrefKey: 'whatsapp' as const },
    { id: 'telegram', label: 'Telegram', hrefKey: 'telegram' as const },
    { id: 'youtube', label: 'YouTube', hrefKey: 'youtube' as const },
    { id: 'instagram', label: 'Instagram', hrefKey: 'instagram' as const },
    { id: 'facebook', label: 'Facebook', hrefKey: 'facebook' as const },
    { id: 'tiktok', label: 'TikTok', hrefKey: 'tiktok' as const },
  ],
} as const
