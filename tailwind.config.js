/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    theme: {
      extend: {
        animation: {
          pulse: 'pulse 2s ease-in-out infinite', // Animação de pulsação
        },
        keyframes: {
          pulse: {
            '0%': {
              transform: 'scale(1)',
              opacity: '1',
            },
            '50%': {
              transform: 'scale(1.1)',
              opacity: '0.8',
            },
            '100%': {
              transform: 'scale(1)',
              opacity: '1',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
