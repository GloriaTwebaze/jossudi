'use client'

import { useCountUp } from '@/hooks/use-count-up'

interface StatCardProps {
  number: string | number
  label: string
}

export function StatCard({ number, label }: StatCardProps) {
    const str = String(number)
  const numeric = parseInt(str.replace(/\D/g, ''), 10)
  const suffix = str.replace(/[0-9]/g, '')

  const { count, ref } = useCountUp(numeric)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm text-white/80 font-medium">{label}</p>
    </div>
  )
}