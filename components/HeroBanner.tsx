'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HeroBanner() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate opacity: 1 at top, 0 at 400px scroll
  const opacity = Math.max(0, 1 - scrollY / 400)
  // Calculate scale: 1 at top, slight scale down as you scroll
  const scale = 1 - scrollY / 1000

  return (
    <div
      className="fixed top-0 left-0 w-full z-0 overflow-hidden"
      style={{
        opacity,
        transform: `scale(${scale})`,
        transition: 'none',
        pointerEvents: opacity === 0 ? 'none' : 'auto',
        height: '100vh',
      }}
      role="banner"
      aria-label="Hero banner image"
    >
      <Image
        src="/assets/images/Oriphim-homepage.png"
        alt="ORIPHIM - Watcher Protocol for AI validation and compliance"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
