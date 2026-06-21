import { CheckIcon } from '@/components/icons/check-icon'

export function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-kpu-gold" />
          <span className="text-xs leading-snug tracking-[-0.03em] text-white/90">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
