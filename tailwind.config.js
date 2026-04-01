/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Theme-aware colors (swap via CSS vars) */
        'theme-primary': 'var(--color-primary)',
        'theme-primary-dark': 'var(--color-primary-dark)',
        'theme-accent': 'var(--color-accent)',
        'theme-accent-hover': 'var(--color-accent-hover)',
        'theme-accent-light': 'var(--color-accent-light)',
        'theme-bg': 'var(--color-bg)',
        'theme-bg-alt': 'var(--color-bg-alt)',
        'theme-bg-warm': 'var(--color-bg-warm)',
        'theme-surface': 'var(--color-surface)',
        'theme-border': 'var(--color-border)',
        'theme-text': 'var(--color-text)',
        'theme-text-secondary': 'var(--color-text-secondary)',
        'theme-text-muted': 'var(--color-text-muted)',
        'theme-coral': 'var(--color-coral)',
        'theme-gold': 'var(--color-gold)',
        'theme-torote': 'var(--color-torote)',
        'theme-sky': 'var(--color-sky)',
        'theme-toggle-bg': 'var(--color-toggle-bg)',
        'theme-toggle-border': 'var(--color-toggle-border)',
        'theme-toggle-text': 'var(--color-toggle-text)',

        /* Static colors (don't change with theme) */
        'energy-navy': '#1B3A6B',
        'energy-navy-dark': '#122A4F',
        'energy-teal': '#50BB9B',
        'energy-teal-hover': '#2AA8A0',
        'energy-teal-light': '#6ED4B3',
        'energy-coral': '#E8735A',
        'energy-gold': '#D4A855',
        'energy-torote': '#C4883A',
        'energy-arena': '#F5F0E8',
        'energy-sky': '#87CEEB',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
