import React from "react"
import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-sans' });
const lato = Lato({ subsets: ["latin"], weight: ['300', '400', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Prestige Cleaning By Caro | Premium Cleaning Services',
  description: 'Experience exceptional cleaning services that leave more than just a fresh scent – they leave a lasting impression. Residential and commercial cleaning.',
  generator: 'v0.app',
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
