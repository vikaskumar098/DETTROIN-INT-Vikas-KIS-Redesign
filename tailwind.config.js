/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#1B1F3B',        // headings, dark footer background
        primary: '#2F6FED',     // blue accent buttons, links, icons
        primaryDark: '#1E4FBB', // hover state for blue buttons
        accent: '#FDBB30',      // orange/yellow accent buttons, highlights
        accentDark: '#E8A61E',  // hover state for orange buttons
        bgBlue: '#3B7DDA',      // full-bleed section background (page wrapper)
        bgLight: '#F7F9FC',     // light section backgrounds
        blob1: '#DCEBFF',       // light blue decorative blob
        blob2: '#FDE7C7',       // light peach/orange decorative blob
        textMuted: '#6B7280',   // body copy gray
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        'card': '3rem',
        'blob': '80px',
      },
      boxShadow: {
        soft: "0 4px 20px rgba(27, 31, 59, 0.05)",
        highlight: "0 8px 30px rgba(27, 31, 59, 0.12)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(8px, 6px)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        drift: 'drift 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
