/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        velvet: "#6A0F1A",
        gilded: "#D4AF37",
        blush: "#F2EDE7",
        ink: "#1E1B1B",
        becoming: "#E3C8BB",
        taupe: "#B6A99E"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      letterSpacing: {
        "wide-2": "0.12em"
      }
    }
  },
  plugins: []
};
