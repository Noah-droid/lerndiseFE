/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lerndis-white": "#F8F8F8",
        "lerndis-orange": "#FB8500",
        "lerndis-black-pearl": "#000814",
        "lerndis-black": "#202020",
        "lerndis-grey": "#F2F2F2",
        "lerndis-light-grey": "#333333",
        "lerndis-grey-600": "#666666",
        "lerndis-light-grey2": "#666666",
        "lerndis-text-black": "#0A0A0A",
        "lerndis-blue": "#00A8E8",
        "lerndis-light-orange": "#FFF2E3",
      },

      fontFamily: {
        display: ['"Comic Sans MS"'],
        body: ['"Nunito Sans"'],
      },
    },
  },
  plugins: [],
};
