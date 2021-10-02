import Categories from "../components/Categories";
import { useMediaQuery } from "@codiechanel/solid-library/hooks";
import { useStore } from "../store";
import { Outlet } from "solid-app-router";
export default function Home() {
  let x = useMediaQuery("(min-width: 400px)");
  const [store] = useStore();
  return (
    <>
      <section class="text-gray-500 flex flex-1">
        <div
          class="flex-1 max-w-sm bg-primary-1"
          classList={{ hidden: store.drawerHidden }}
        >
          <Categories />
        </div>
        <div
          class="bg-primary-2 flex flex-1"
          classList={{ hidden: !x() && !store.drawerHidden }}
        >
          <div class="max-w-lg p-4 relative  flex-1 ">
            <div class="absolute inset-0 overflow-auto ">
              {/*<Packages />*/}
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
