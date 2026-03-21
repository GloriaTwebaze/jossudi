'use client'

import { useState } from 'react'

interface ExpandableTextProps {
  text: string
  lines?: number
}

export function ExpandableText({ text }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <p
        className={`text-muted-foreground transition-all duration-300 ${
          !expanded ? 'line-clamp-2' : ''
        }`}
      >
        {text}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-accent text-sm font-medium mt-1 hover:underline focus:outline-none"
      >
        {expanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  )
}