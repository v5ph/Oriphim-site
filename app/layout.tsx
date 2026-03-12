import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ORIPHIM | The Watcher Protocol for Deterministic Agency',
  description: 'AI Infrastructure for safety and integrity. Oriphim provides the deterministic gateway for high-stakes agentic workflows in BioPharma, Finance, and Aerospace.',
  keywords: ['AI safety', 'agent validation', 'financial AI', 'compliance', 'algorithmic trading', 'AI governance', 'machine learning validation'],
  authors: [{ name: 'ORIPHIM LABS LLC' }],
  creator: 'ORIPHIM LABS LLC',
  publisher: 'ORIPHIM LABS LLC',
  metadataBase: new URL('https://oriphim.com'),
  openGraph: {
    title: 'ORIPHIM | The Watcher Protocol for Deterministic Agency',
    description: 'AI Infrastructure for safety and integrity. Prevent AI hallucinations and errors before they cost millions.',
    url: 'https://oriphim.com',
    siteName: 'ORIPHIM',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/images/Oriphim-homepage.png',
        width: 1200,
        height: 630,
        alt: 'ORIPHIM - Watcher Protocol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORIPHIM | The Watcher Protocol for Deterministic Agency',
    description: 'AI Infrastructure for safety and integrity. Prevent AI hallucinations and errors before they cost millions.',
    images: ['/assets/images/Oriphim-homepage.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=20260311b' },
      { url: '/favicon-16x16.png?v=20260311b', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=20260311b', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png?v=20260311b',
  },
  manifest: '/site.webmanifest?v=20260311b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
