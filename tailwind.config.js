/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        // Add more as needed
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outfit: '"Outfit", sans-serif',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
    },
  },
  plugins: [],
}
