/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/App.vue", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foo: "var(--color-background)",
        foo2: "var(--color-background-2)",
      },
    },
  },
  plugins: [],
};
