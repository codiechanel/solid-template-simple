import type { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "solid-app-router";
import { HiSolidMenu, HiSolidBell } from "solid-icons/hi";
import { routes } from "./routes";
import MyNav from "./components/MyNav";

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <div class="flex flex-col  min-h-full ">
      <MyNav />
      <div class="bg-primary-3 h-[4px] " />

      {/*    <main>*/}
      <Route />
    </div>
  );
};

export default App;
