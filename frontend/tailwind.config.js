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
        "primary": "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "surface-light": "#ffffff",
        "surface-dark": "#182431",
        "text-light": "#0d141b",
        "text-dark": "#e7edf3",
        "border-light": "#cfdbe7",
        "border-dark": "#2a3b4e",
        "accent-teal": "#17A2B8",
        "subtext-light": "#4c739a",
        "subtext-dark": "#a0b0c0",
        "card-light": "rgba(255, 255, 255, 0.8)",
        "card-dark": "rgba(30, 41, 59, 0.5)"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.5rem", "lg": "0.75rem", "xl": "1rem", "full": "9999px"},
      boxShadow: {
          'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
          'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)',
          'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundColor: {
          'glass-light': 'rgba(255, 255, 255, 0.7)',
          'glass-dark': 'rgba(24, 36, 49, 0.7)'
      },
       backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
}
