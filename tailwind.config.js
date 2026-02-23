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
        'charcoal-brown': '#414535',
        'carbon-black': '#1e1e1d',
        'floral-white': '#f9f6ee',
        'blood-red': '#8b0000',
        'deep-crimson': '#981515',
        'space-indigo': '#353956',
      },
    },
  },
  plugins: [],
}
