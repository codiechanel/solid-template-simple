var tailwind = {};

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans"],
      },
      textColor: {
        "primary-1": "var(--color-text-primary-1)",
        "primary-2": "var(--color-text-primary-2)",
        "accent-1": "var(--color-text-accent-1)",
      },
      backgroundColor: {
        "primary-1": "var(--color-bg-primary-1)",
        "primary-2": "var(--color-bg-primary-2)",
        "primary-3": "var(--color-bg-primary-3)",
        "primary-4": "var(--color-bg-primary-4)",
        "accent-1": "var(--color-bg-accent-1)",
        "accent-2": "var(--color-bg-accent-2)",
        "accent-3": "var(--color-bg-accent-3)",
      },
      borderColor: {
        "primary-1": "var(--color-bg-primary-1)",
        "primary-2": "var(--color-bg-primary-2)",
        "primary-3": "var(--color-bg-primary-3)",
        "primary-4": "var(--color-bg-primary-4)",
        "accent-1": "var(--color-bg-accent-1)",
      },
    },
  },
};
