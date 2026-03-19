import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About JOSSUD - Our Story and Mission',
  description: 'Learn about JOSSUD\'s journey since 2022 in supporting PWDs in Kampala and Wakiso. Discover our vision, mission, and core values.',
  keywords: 'NGO Uganda, disability support organization, JOSSUD, PWD initiatives',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
