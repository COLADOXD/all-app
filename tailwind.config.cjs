/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(0, 0%, 98%)",

        secondary: "hsl(236, 33%, 92%)",

        terceary: "hsl(236, 9%, 61%)",

        cuarto: "hsl(235, 19%, 35%)",

        quinto: "hsl(235, 21%, 11%)",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(0, 0%, 98%)",

        secondary: "hsl(236, 33%, 92%)",

        terceary: "hsl(236, 9%, 61%)",

        cuarto: "hsl(235, 19%, 35%)",

        quinto: "hsl(235, 21%, 11%)",
      }),
    },
  },
  plugins: [],
};

// ### Light Theme

// - Very Light Gray: hsl(0, 0%, 98%)
// - Very Light Grayish Blue: hsl(236, 33%, 92%)
// - Light Grayish Blue: hsl(233, 11%, 84%)
// - Dark Grayish Blue: hsl(236, 9%, 61%)
// - Very Dark Grayish Blue: hsl(235, 19%, 35%)

// ### Dark Theme

// - Very Dark Blue: hsl(235, 21%, 11%)
// - Very Dark Desaturated Blue: hsl(235, 24%, 19%)
// - Light Grayish Blue: hsl(234, 39%, 85%)
// - Light Grayish Blue (hover): hsl(236, 33%, 92%)
// - Dark Grayish Blue: hsl(234, 11%, 52%)
// - Very Dark Grayish Blue: hsl(233, 14%, 35%)
// - Very Dark Grayish Blue: hsl(237, 14%, 26%)
