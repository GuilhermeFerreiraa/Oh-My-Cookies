import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      brand: {
        'main': '#D73035',
        'dark': '#8A1114',
        'light': '#FFABAD',
      },
      gray: {
        500: '#333333',
        400: '#666666',
        300: '#999999',
        200: '#CCCCCC',
        100: '#F2F2F2',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Quicksand', 'Arial', 'sans-serif'],
      serif: ['Quicksand', 'Arial', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
export default config
