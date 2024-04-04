/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        coding_one: "url(../public/coding_images/1.jpeg)",
        coding_two: "url(../public/coding_images/2.jpeg)",
        coding_three: "url(../public/coding_images/3.webp)",
      },
    },
  },
  plugins: [],
};
