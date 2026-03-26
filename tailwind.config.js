/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#064591',
          50: '#EEF4FC',
          100: '#D0E0F7',
          200: '#A1C1EF',
          300: '#6D9FE5',
          400: '#3A7DD9',
          500: '#064591',
          600: '#053A7A',
          700: '#042E63',
          800: '#03234C',
          900: '#021735',
        },
        accent: {
          DEFAULT: '#E72629',
          50: '#FEF0F0',
          100: '#FDD5D5',
          200: '#F9A8A9',
          300: '#F27B7C',
          400: '#EC4D4F',
          500: '#E72629',
          600: '#C41E21',
          700: '#A11719',
          800: '#7E1012',
          900: '#5B0A0B',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(6, 69, 145, 0.08)',
        'glass-lg': '0 16px 48px rgba(6, 69, 145, 0.12)',
        'glow': '0 0 40px rgba(6, 69, 145, 0.15)',
        'glow-accent': '0 0 40px rgba(231, 38, 41, 0.15)',
        'glow-lg': '0 0 60px rgba(6, 69, 145, 0.20), 0 0 120px rgba(6, 69, 145, 0.05)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(6, 69, 145, 0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.04), 0 16px 40px rgba(6, 69, 145, 0.12)',
        'inner-glow': 'inset 0 1px 4px rgba(6, 69, 145, 0.05), 0 1px 2px rgba(6, 69, 145, 0.02)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 40% 20%, rgba(6,69,145,0.04) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(231,38,41,0.03) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6,69,145,0.04) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, rgba(6,69,145,0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(231,38,41,0.1) 0px, transparent 50%)',
        'dot-pattern': 'radial-gradient(circle, rgba(6,69,145,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot': '24px 24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'shine': 'shine 1.5s ease-in-out',
        'morph': 'morph 8s ease-in-out infinite',
        'sweep-right': 'sweep-right 15s linear infinite',
        'sweep-left': 'sweep-left 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'sweep-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'sweep-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
