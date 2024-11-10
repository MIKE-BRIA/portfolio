/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        large: "1100px",
      },
      backgroundImage: {
        "discord-gradient": "linear-gradient(135deg, #2c2f33, #23272a)",
      },
    },
  },
  plugins: [],
};
