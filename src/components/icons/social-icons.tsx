import { cn } from '@/lib/cn'

export type SocialIconName =
  | 'whatsapp'
  | 'telegram'
  | 'youtube'
  | 'instagram'
  | 'facebook'
  | 'tiktok'

const iconSrc: Record<SocialIconName, string> = {
  whatsapp: '/assets/icons/social-whatsapp.svg',
  telegram: '/assets/icons/social-telegram.svg',
  youtube: '/assets/icons/social-youtube.svg',
  instagram: '/assets/icons/social-instagram.svg',
  facebook: '/assets/icons/social-fb.svg',
  tiktok: '/assets/icons/social-tiktok.svg',
}

export function SocialIcon({
  name,
  className,
}: {
  name: SocialIconName
  className?: string
}) {
  return (
    <img
      src={iconSrc[name]}
      alt=""
      className={cn('block shrink-0 object-contain', className)}
      aria-hidden
      draggable={false}
    />
  )
}
