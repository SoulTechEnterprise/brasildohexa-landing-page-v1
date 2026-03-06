'use client'

import { useState, useEffect } from 'react'

const TARGET_DATE = new Date('2026-06-11T00:00:00').getTime()

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const diff = TARGET_DATE - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  const items = [
    { value: timeLeft.days, label: 'D' },
    { value: timeLeft.hours, label: 'H' },
    { value: timeLeft.minutes, label: 'M' },
    { value: timeLeft.seconds, label: 'S' },
  ]

  return (
    <div className="flex gap-1 md:gap-1.5 items-center">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-0.5">
          <span className="bg-black text-yellow-500 font-mono font-bold text-[10px] md:text-xs px-1 md:px-1.5 py-0.5 rounded min-w-[1.5rem] md:min-w-[1.75rem] text-center tabular-nums">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[9px] md:text-[10px] font-bold">{item.label}</span>
          {i < 3 && <span className="text-black/40 font-bold text-[10px] mx-0.5 hidden md:inline">:</span>}
        </div>
      ))}
    </div>
  )
}
