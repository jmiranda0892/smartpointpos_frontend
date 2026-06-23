import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 font-bold transition-opacity disabled:opacity-60',
  {
    variants: {
      variant: {
        primary:
          'h-8 w-full max-w-[17.25rem] rounded-kpu-button bg-kpu-button text-xs text-kpu-navy-button',
        open: 'h-[1.3125rem] min-w-[3.4375rem] rounded-[0.3125rem] bg-kpu-button px-2.5 text-[0.5625rem] text-kpu-navy-button',
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
