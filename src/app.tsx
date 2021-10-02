import type { Component } from "solid-js";
import { useLocation } from "solid-app-router";

import MyNav from "./components/MyNav";
// import Flex from "./components/Flex";
import { Route, Routes } from "solid-app-router";
import Home from "./pages/home";
import Packages from "./components/Packages";
import Flex from "./components/Flex";

const App: Component = () => {
  const location = useLocation();
  // const Route = useRoutes(routes);

  return (
    <Flex.Column className=" min-h-full ">
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
