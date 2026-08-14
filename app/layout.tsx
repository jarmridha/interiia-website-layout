import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'Mridha Construction and Consultancy — Trusted Expertise. Professional Execution. Lasting Value.',
  description:
    'Mridha Construction and Consultancy is a professional construction and engineering company delivering reliable, quality-driven, and value-focused solutions across Bangladesh since 2019.',
  generator: 'Next.js',
}

export const viewport: Viewport = {
  themeColor: '#f5f1e8',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
