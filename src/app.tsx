import type { Component } from "solid-js";
import { Route, Routes } from "solid-app-router";

import MyNav from "./components/MyNav";
import { Flex } from "@codiechanel/solid-library/mine";
import Home from "./pages/home";
import Packages from "./components/Packages";

const App: Component = () => {
  return (
    <Flex.Column className=" min-h-full bg-primary-1">
      <MyNav />
      <div class="bg-primary-3 h-[4px] " />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Home />}>
          <Route path="/" element={<Packages />} />
        </Route>
        <Route path="/category/:catId" element={<Home />}>
          <Route path="/" element={<Packages />} />
        </Route>
      </Routes>
      {/*<Route />*/}
    </Flex.Column>
  );
};

export default App;
