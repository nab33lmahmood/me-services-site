'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  stagger?: boolean
}

export default function Reveal({ children, className, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'ssr' | 'wait' | 'in'>('ssr')

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') return

    const rect = node.getBoundingClientRect()
    const visibleHeight =
      Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
    const inView = rect.height > 0 && visibleHeight / rect.height >= 0.15
    if (inView) return

    setState('wait')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setState('in')
        observer.disconnect()
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const motionClass =
    state === 'wait' ? 'nabeel-reveal--wait' : state === 'in' ? 'nabeel-reveal--in' : ''
  const classes = [
    'nabeel-reveal',
    stagger ? 'nabeel-reveal--stagger' : '',
    motionClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
