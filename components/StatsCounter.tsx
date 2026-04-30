'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type Stat = {
  value: number
  suffix: string
  prefix?: string
  label: string
  sub: string
}

const stats: Stat[] = [
  { value: 25, suffix: ' ans', label: "D'exercice", sub: 'au Barreau de Lyon' },
  { value: 98, suffix: '%', label: 'de satisfaction', sub: 'clients accompagnés' },
  { value: 3, prefix: '', suffix: ' modes', label: 'de consultation', sub: 'Présentiel · Visio · Téléphone' },
]

function Counter({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <div ref={ref}>
      {prefix}{display}{suffix}
    </div>
  )
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-stone/20">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center px-8 py-6 sm:py-0">
          {/* Ghost number behind */}
          <div className="relative">
            <div
              className="font-cormorant text-[5rem] lg:text-[7rem] font-light text-gold leading-none"
              aria-hidden
            >
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </div>
          </div>
          <p className="label text-cream mt-2">{stat.label}</p>
          <p className="label text-stone/60 mt-1">{stat.sub}</p>
        </div>
      ))}
    </div>
  )
}
