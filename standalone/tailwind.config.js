/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Shippori Mincho"', 'ui-serif', 'serif'],
        body: ['"Instrument Sans"', '"Noto Sans JP"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Shippori Mincho"', 'ui-serif', 'serif'],
      },
    },
  },
  plugins: [],
}