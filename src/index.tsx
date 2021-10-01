import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./app";
// import "virtual:windi.css";

// import { setup, strict, voidSheet } from "twind";
// @ts-ignore
import { setup } from "https://cdn.skypack.dev/twind/shim";
import { Provider } from "./store"; // Tailwind V2 colors
import "./index.css";
import "./one-dark.css";

setup({
  mode: "silent",
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
