/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magog: {
          orange: {
            DEFAULT: '#F26522',
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F26522',
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
          },
          navy: {
            DEFAULT: '#0B1528',
            50: '#F0F4F8',
            100: '#D9E2EC',
            200: '#BCCCDC',
            300: '#9FB3C8',
            400: '#627D98',
            500: '#334E68',
            600: '#1B2A4A',
            700: '#142038',
            800: '#0E1726',
            900: '#0B1528',
            950: '#060B15',
          },
          slate: {
            light: '#F8FAFC',
            card: '#FFFFFF',
            border: '#E2E8F0',
            subtle: '#64748B',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 35px -5px rgba(242, 101, 34, 0.35)',
        'glow-navy': '0 0 35px -5px rgba(11, 21, 40, 0.4)',
        'soft-float': '0 20px 40px -15px rgba(11, 21, 40, 0.08)',
        'elevated': '0 25px 50px -12px rgba(11, 21, 40, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
