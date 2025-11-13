/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0052CC",
        "accent": "#00A3BF",
        "background-light": "#F8F9FA",
        "background-dark": "#101922",
        "text-light": "#0d141b",
        "text-dark": "#e7edf3",
        "card-light": "rgba(255, 255, 255, 0.7)",
        "card-dark": "rgba(30, 41, 59, 0.5)",
        "surface-light": "#ffffff",
        "surface-dark": "#182431",
        "border-light": "#cfdbe7",
        "border-dark": "#2a3b4e",
        "accent-teal": "#17A2B8",
        "subtext-light": "#4c739a",
        "subtext-dark": "#a0b0c0",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px",
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundColor: {
        'glass-light': 'rgba(255, 255, 255, 0.7)',
        'glass-dark': 'rgba(24, 36, 49, 0.7)'
      },
      backdropBlur: {
        'xl': '20px',
        'md': '12px',
      },
    },
  },
  plugins: [],
}
