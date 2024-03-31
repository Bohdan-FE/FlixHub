import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-black': 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        'gradient-watch': 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8744747899159664) 65%);'
      },
      boxShadow: {
        'filmCard': '0px 0px 30px 11px rgba(128,119,128,0.3)',
        'sliderBtm': '0px 0px 15px 11px rgba(128,119,128,0.3)'
      },
      keyframes: {
        watch: {
          '0%, 100%': { transform: 'translateX(30px)' },
          '50%': { transform: 'translateX(20px)' },
        }
      },
      animation: {
        watch: 'watch 1s ease-in-out infinite',
      }
    },
     screens: {
       'header': '1024px',
       'filter': '646px',
       'cardlistmob': '438px',
       'cardlisttab': '828px'
    },
  },
  plugins: [
        require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements', nocompatible: true }),
        require('tailwindcss-3d')({ legacy: true }),
    ],
}
export default config
