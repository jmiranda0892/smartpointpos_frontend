import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SocialIcon, type SocialIconName } from '@/components/icons/social-icons'

export function SocialRow({
  platform,
  icon,
  href,
}: {
  platform: string
  icon: SocialIconName
  href: string
}) {
  const open = () => {
    if (!href) return
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className="flex h-[2.75rem] items-center justify-between px-3 py-2">
      <div className="flex items-center gap-2.5">
        <SocialIcon name={icon} className="size-5 shrink-0" />
        <span className="text-sm font-extrabold text-white">{platform}</span>
      </div>
      <Button variant="open" type="button" onClick={open} disabled={!href}>
        Abrir
      </Button>
    </Card>
  )
}
