import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 font-bold transition-opacity disabled:opacity-60',
  {
    variants: {
      variant: {
        primary:
          'h-8 w-full max-w-[276px] rounded-[11px] bg-kpu-button text-xs text-kpu-navy-button',
        open: 'h-[21px] min-w-[55px] rounded-[5px] bg-kpu-button px-2.5 text-[9px] text-kpu-navy-button',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export function Button({
  className,
  variant,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  )
}
