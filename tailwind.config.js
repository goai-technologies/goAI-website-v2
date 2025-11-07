/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': {
          primary: '#f8fafc',
          secondary: '#ffffff',
          tertiary: '#f1f5f9',
        },
        'light-text': {
          primary: '#0f172a',
          secondary: '#334155',
          tertiary: '#64748b',
        },
      },
    },
  },
  plugins: [],
};
