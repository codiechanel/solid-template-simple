import Categories from "../components/Categories";
import Packages from "../components/Packages";
import { useStore } from "../store";
import { Outlet } from "solid-app-router";

export default function Mobile() {
  let [store, { toggleCategories }] = useStore();
  return (
    <>
      {/* <Packages /> */}
      <Outlet />
      <aside
        class="bg-primary-1 transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        classList={{
          "translate-x-0": store.showCategories,
          "-translate-x-full": !store.showCategories,
        }}
      >
        <Categories />
      </aside>
      <div class="  w-full fixed bottom-0 px-4 ">
        <div class="bg-primary-3 p-4 rounded-t-xl ">
          <span
            onClick={() => {
              // setState({ selectedTab: Menu.Home });
              //   npmActions.selectTab(Menu.Home);
            }}
            class="mr-4 text-primary-1"
          >
            Home
          </span>
          <span
            onClick={() => {
              toggleCategories();
              //   npmActions.selectTab(Menu.Pages);
              // setState({ selectedTab: Menu.Pages });
            }}
            class=" text-primary-1"
          >
            Pages
          </span>
        </div>
      </div>
    </>
  );
}
