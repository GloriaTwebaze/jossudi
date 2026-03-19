import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Programs - Supporting PWDs in Uganda',
  description: 'Explore JOSSUD\'s disability support programs: Savings Groups (VSLAs), Entrepreneurship Support, Advocacy & Awareness, and Disability Support Initiatives in Kampala and Wakiso.',
  keywords: 'disability support Uganda, PWD initiatives, VSLA, entrepreneurship support, disability advocacy Kampala',
}

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
