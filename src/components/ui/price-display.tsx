export function PriceDisplay({
  amount,
  className,
}: {
  amount: number
  className?: string
}) {
  const formatted = `RD$${amount.toLocaleString('es-DO')}`

  return (
    <p
      className={`text-center text-2xl font-extrabold text-kpu-gold ${className ?? ''}`}
    >
      {formatted}
    </p>
  )
}
