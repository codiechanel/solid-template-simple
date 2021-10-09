import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./app";
// @ts-ignore
// import { setup } from "https://cdn.skypack.dev/twind/shim";
// import { setup, disconnect } from "twind/shim";
import { Provider } from "./store"; // Tailwind V2 colors

import "./theme.css";
import "./index.css";
import "./tailwind.css";
/*
setup({
  mode: "silent",
});
*/

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
