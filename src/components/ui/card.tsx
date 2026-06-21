import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const cardVariants = cva('rounded-[10px] border-[0.3px] border-white', {
  variants: {
    variant: {
      glass: 'bg-kpu-glass',
      status: 'bg-kpu-status',
      feature: 'bg-kpu-glass px-3 py-3',
    },
  },
  defaultVariants: {
    variant: 'glass',
  },
})

export function Card({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>) {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props} />
  )
}
