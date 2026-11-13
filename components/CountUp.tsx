'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  value: number
  prefix?: string
  suffix?: string
}

export default function CountUp({ value, prefix = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)
  const label = `${prefix}${value}${suffix}`

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') return

    let frame = 0
    let started = false

    const start = () => {
      if (started) return
      started = true
      const began = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - began) / 1200)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(value * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
        else setDisplay(value)
      }
      setDisplay(0)
      frame = requestAnimationFrame(tick)
    }

    const rect = node.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (!inView) setDisplay(0)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        start()
        observer.disconnect()
      },
      { threshold: 0.15 }
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref} aria-label={label}>
      {`${prefix}${display}${suffix}`}
    </span>
  )
}
