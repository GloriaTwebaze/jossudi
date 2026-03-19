'use client'

import { useRef, useEffect, useState } from 'react'

// ── useInView hook ──────────────────────────────────────────────
export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.15, ...options })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

// ── FadeUp ──────────────────────────────────────────────────────
// Fades + slides up when scrolled into view
interface FadeUpProps {
  children: React.ReactNode
  delay?: number       // ms
  className?: string
}

export function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── FadeIn ──────────────────────────────────────────────────────
// Simple fade, no vertical movement
export function FadeIn({ children, delay = 0, className = '' }: FadeUpProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── SlideIn ──────────────────────────────────────────────────────
// Slides in from left or right
interface SlideInProps extends FadeUpProps {
  from?: 'left' | 'right'
}

export function SlideIn({ children, delay = 0, from = 'left', className = '' }: SlideInProps) {
  const { ref, inView } = useInView()
  const x = from === 'left' ? '-48px' : '48px'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : `translateX(${x})`,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── StaggerChildren ─────────────────────────────────────────────
// Wraps a list and staggers fade-up on each child
interface StaggerProps {
  children: React.ReactNode[]
  staggerMs?: number
  className?: string
}

export function StaggerChildren({ children, staggerMs = 100, className = '' }: StaggerProps) {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0px)' : 'translateY(28px)',
            transition: `opacity 0.6s ease ${i * staggerMs}ms, transform 0.6s ease ${i * staggerMs}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

// ── ScaleIn ──────────────────────────────────────────────────────
// Scales up from slightly smaller
export function ScaleIn({ children, delay = 0, className = '' }: FadeUpProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.92)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── FloatingBadge ────────────────────────────────────────────────
// Gentle floating animation (CSS keyframes via inline style)
export function FloatingBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={className}
      style={{
        animation: 'floatBadge 3s ease-in-out infinite',
      }}
    >
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
      {children}
    </div>
  )
}

// ── PulseRing ────────────────────────────────────────────────────
// A pulsing ring around an element (e.g. CTA button)
export function PulseRing({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-flex ${className}`}>
      <span
        className="absolute inset-0 rounded-lg bg-primary/30"
        style={{ animation: 'pulseRing 2s ease-out infinite' }}
      />
      <style>{`
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
      {children}
    </div>
  )
}

// ── TypewriterBadge ──────────────────────────────────────────────
// Fades in a badge with a slight bounce
export function BounceIn({ children, delay = 0, className = '' }: FadeUpProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.7)',
        transition: `opacity 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}