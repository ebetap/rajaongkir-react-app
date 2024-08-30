import flowbite from "flowbite-react/tailwind";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [daisyui, require("@tailwindcss/forms"), flowbite.plugin()],
};
