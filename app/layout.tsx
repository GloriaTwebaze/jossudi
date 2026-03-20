import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'jOSUDDI - Empowering PWDs in Uganda',
  description: 'jOSUDDI creates awareness and support for Persons with Disabilities in Kampala and Wakiso. Supporting savings groups, entrepreneurship, advocacy, and disability initiatives.',
  generator: 'Next.js',
  keywords: 'disability support Uganda, PWD initiatives Kampala, NGO Uganda, disability awareness, Persons with Disabilities',
  authors: [{ name: 'JOSSUD' }],
  openGraph: {
    title: 'jOSUDDI - Empowering PWDs in Uganda',
    description: 'Join us in creating positive change for Persons with Disabilities in Uganda through advocacy, support, and community empowerment.',
    type: 'website',
    locale: 'en_UG',
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
