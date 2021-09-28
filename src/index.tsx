import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./app";
// import "virtual:windi.css";
import "./index.css";
import "./one-dark.css";

import { setup, strict, voidSheet } from "twind";
import * as colors from "twind/colors";
import { Provider } from "./store"; // Tailwind V2 colors

setup({
  theme: {
    extend: {
      // @ts-ignore
      gray: colors.trueGray,
      coolgray: colors.coolGray,
      colors: { hotpink: "#FF00FF" },
    },
  },
});

render(
  () => (
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  ),
  document.getElementById("root")
);
