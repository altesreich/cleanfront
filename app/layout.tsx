import React from "react"
import type { Metadata } from 'next'
import { Montserrat, Lato, Playfair_Display, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import GlobalWhatsAppRedirect from '@/components/whatsapp/global-redirect'
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-sans' });
const lato = Lato({ subsets: ["latin"], weight: ['300', '400', '700'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-serif' });
const cinzel = Cinzel({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Prestige Cleaning By Caro | Premium Cleaning Services Dallas TX',
  description: 'Prestige Cleaning By Caro offers professional cleaning services in Dallas. Expert house cleaning, maid services, and home cleaning solutions. Cheap cleaning services Dallas TX.',
  keywords: 'Prestige Cleaning By Caro, cleaning in Dallas, cheap cleaning, cleaning services Dallas TX, cleaning service Dallas Texas, house cleaning Dallas, maid service Dallas, home cleaning services Dallas, housecleaning',
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
        <GlobalWhatsAppRedirect />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
