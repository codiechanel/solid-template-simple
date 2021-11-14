import type { Component } from "solid-js";
import { Route, Routes } from "solid-app-router";

import MyNav from "./components/MyNav";
import { Flex } from "@codiechanel/solid-library/mine";
import Home from "./pages/home";
import Packages from "./components/Packages";
import { createEffect, Switch, Match } from "solid-js";
import { useMediaQuery } from "@codiechanel/solid-library/hooks";
import Mobile from "./pages/Mobile";

const App: Component = () => {
  let x = useMediaQuery("(min-width: 480px)");
  /* false if we are in small screen */
  // alert(x() === true ? "true" : "false");
  createEffect(() => {
    // themeChange(false);
    let theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  });
  return (
    <Flex.Column className=" min-h-full bg-primary-1 ">
      <MyNav />
      <div class="bg-primary-3 h-[4px]  " />

      <Switch>
        <Match when={x()}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Packages />} />
              <Route path="/category/:catId" element={<Packages />} />
            </Route>
          </Routes>
        </Match>
        <Match when={!x()}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}

            <Route path="/" element={<Mobile />}>
              <Route path="/" element={<Packages />} />
              <Route path="/category/:catId" element={<Packages />} />
            </Route>
            {/* <Route path="/category/:catId" element={<Mobile />} /> */}
          </Routes>
        </Match>
      </Switch>

      {/*<Route />*/}
    </Flex.Column>
  );
};

export default App;
