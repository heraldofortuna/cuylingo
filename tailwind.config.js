/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'gray-10': '#F2F4F8',
        'gray-20': '#DDE1E6',
        'gray-30': '#C1C7CD',
        'gray-40': '#A2A9B0',
        'gray-50': '#878D96',
        'gray-60': '#697077',
        'gray-70': '#4D5358',
        'gray-80': '#343A3F',
        'primary-30': '#A6C8FF',
        'primary-60': '#0F62FE',
        'primary-90': '#001D6C',
        alert: '#DA1E28',
        success: '#25A249'
      },
      width: {
        'fit-content': 'fit-content'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
