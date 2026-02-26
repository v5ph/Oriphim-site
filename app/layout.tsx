import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
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
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
