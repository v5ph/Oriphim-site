/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
        logo: ['ASIX-FOUNDER', 'Space Grotesk', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#0B0F0E',
        panel: '#1B1F1D',
        'brand-green': '#2FA36B',
        'accent-green': '#6ED7A0',
        'text-primary': '#EDEDED',
        'text-secondary': '#9AA3A0',
        'charcoal-brown': '#9AA3A0',
        'carbon-black': '#EDEDED',
        'floral-white': '#EDEDED',
        'blood-red': '#2FA36B',
        'deep-crimson': '#6ED7A0',
        'space-indigo': '#1B1F1D',
        'warm-ivory': '#1B1F1D',
      },
    },
  },
  plugins: [],
}
