import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact JOSUDDI - Get Involved',
  description: 'Contact JOSUDDI in Kampala, Wakiso, Uganda. Reach out to donate, partner with us, or seek support for PWDs.',
  openGraph: {
    title: 'Contact JOSUDDI - Get Involved',
    description: 'Contact JOSUDDI in Kampala, Wakiso, Uganda. Reach out to donate, partner with us, or seek support.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
