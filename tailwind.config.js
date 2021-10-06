const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        "primary-1": "var(--color-text-primary-1)",
        "primary-2": "var(--color-text-primary-2)",
      },
      backgroundColor: {
        "primary-1": "var(--color-bg-primary-1)",
        "primary-2": "var(--color-bg-primary-2)",
        "primary-3": "var(--color-bg-primary-3)",
      },
    },
  },
};
