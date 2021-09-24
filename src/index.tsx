import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./app";
// import "virtual:windi.css";
import "./index.css";

import { setup, strict, voidSheet } from "twind";
import * as colors from "twind/colors"; // Tailwind V2 colors

setup({
  theme: {
    extend: {
      // @ts-ignore
      gray: colors.trueGray,
      colors: { hotpink: "#FF00FF" },
    },
  },
});

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
