/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'hs-blue': '#0048AB',
        'hs-blue-light': '#0058D6',
        'hs-blue-lighter': '#0068FF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#4b5563',
            a: {
              color: '#0048AB',
              textDecoration: 'none',
              '&:hover': {
                color: '#0058D6',
              },
            },
            'h1, h2, h3, h4': {
              color: '#111827',
              fontWeight: '700',
            },
            'ul > li::marker': {
              color: '#9ca3af',
            },
            'ol > li::marker': {
              color: '#9ca3af',
            },
            code: {
              color: '#1f2937',
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#111827',
              color: '#f3f4f6',
            },
            blockquote: {
              borderLeftColor: '#0048AB',
              color: '#374151',
              fontStyle: 'italic',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}