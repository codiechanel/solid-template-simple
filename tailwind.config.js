const defaultTheme = require("tailwindcss/defaultTheme");
var fs = require("fs");
var text = fs.readFileSync("./public/config.js").toString("utf-8");

let s = eval(text);

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./index.html",
      "./node_modules/@codiechanel/solid-library/mine/**/*.{js,jsx,ts,tsx}",
    ],
  },
  darkMode: false,
  theme: s.theme,
};
