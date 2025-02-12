import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import withMT from "@material-tailwind/react/utils/withMT";
// https://vite.dev/config/
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'createBeige': '#F5EFEB',
        'createBlue': '#2F4156',
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        blue: {
          800: "#283593",
          600: "#039be5"
        }
      },
      rotate: {
        '24': '-6deg',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})