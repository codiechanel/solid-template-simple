const defaultTheme = require("tailwindcss/defaultTheme");
var fs = require("fs");
var text = fs.readFileSync("./public/config.js").toString("utf-8");

let s = eval(text);

module.exports = {
  mode: "jit",
  // purge: {
  //   content: [
  //     "./src/**/*.{js,jsx,ts,tsx}",
  //     "./index.html",
  //     "./node_modules/@codiechanel/solid-library/mine/**/*.{js,jsx,ts,tsx}",
  //     "./node_modules/@codiechanel/solid-library/flowbite/**/*.{js,jsx,ts,tsx}",
  //   ],
  // },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/@codiechanel/solid-library/mine/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@codiechanel/solid-library/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",
        "primary-4": "var(--primary-4)",
        "secondary-1": "var(--secondary-1)",
        "secondary-2": "var(--secondary-2)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "label-1": "var(--label-1)",
        "label-2": "var(--label-2)",
        "label-3": "var(--label-3)",
        "label-4": "var(--label-4)",
      },
    },
  },
  // theme: s.theme,
};
