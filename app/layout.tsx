import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'JOSSUD - Empowering PWDs in Uganda',
  description: 'JOSSUD creates awareness and support for Persons with Disabilities in Kampala and Wakiso. Supporting savings groups, entrepreneurship, advocacy, and disability initiatives.',
  generator: 'Next.js',
  keywords: 'disability support Uganda, PWD initiatives Kampala, NGO Uganda, disability awareness, Persons with Disabilities',
  authors: [{ name: 'JOSSUD' }],
  openGraph: {
    title: 'JOSSUD - Empowering PWDs in Uganda',
    description: 'Join us in creating positive change for Persons with Disabilities in Uganda through advocacy, support, and community empowerment.',
    type: 'website',
    locale: 'en_UG',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
