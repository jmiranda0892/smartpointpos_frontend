import { useEffect, useState } from 'react'
import { getTodayNumbers } from '@/lib/api/client'
import type { DailyNumbers } from '@/types/api'

export function useDailyNumbers() {
  const [data, setData] = useState<DailyNumbers | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getTodayNumbers()
      .then((result) => {
        if (!cancelled) setData(result)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const formattedDate = data
    ? new Intl.DateTimeFormat('es-DO', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(`${data.date}T12:00:00`))
    : ''

  return { data, loading, formattedDate }
}
