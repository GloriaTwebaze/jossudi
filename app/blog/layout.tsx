import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Updates and Insights on Disability Support',
  description: 'Read articles about disability rights, PWD empowerment, advocacy, and stories from the community in Uganda.',
  keywords: 'disability blog, PWD insights, advocacy articles, disability awareness Uganda',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
