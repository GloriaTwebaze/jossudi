import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impact Stories - Success Stories from PWDs',
  description: 'Read inspiring success stories from persons with disabilities whose lives have been transformed through JOSUDDI\'s programs and support.',
  keywords: 'disability success stories, PWD testimonials, JOSUDDI impact, lives changed',
}

export default function ImpactStoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
