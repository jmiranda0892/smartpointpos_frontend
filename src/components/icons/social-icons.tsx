import { cn } from '@/lib/cn'

export type SocialIconName =
  | 'whatsapp'
  | 'telegram'
  | 'youtube'
  | 'instagram'
  | 'facebook'
  | 'tiktok'

export function SocialIcon({
  name,
  className,
}: {
  name: SocialIconName
  className?: string
}) {
  return (
    <img
      src={`/assets/icons/social-${name}.svg`}
      alt=""
      className={cn(className)}
      aria-hidden
    />
  )
}
