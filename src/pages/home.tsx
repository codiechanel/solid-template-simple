import Categories from "../components/Categories";
import { useMediaQuery } from "@codiechanel/solid-library/hooks";
import { Flex, Scrollable } from "@codiechanel/solid-library/mine";
import { useStore } from "../store";
import { Outlet } from "solid-app-router";

export default function Home() {
  let x = useMediaQuery("(min-width: 400px)");
  const [store] = useStore();
  return (
    <>
      <Flex.RowFull className="text-gray-500 ">
        <div
          class="flex-1 max-w-sm bg-primary-1"
          classList={{ hidden: store.drawerHidden }}
        >
          <Categories />
        </div>
        <Flex.RowFull
          className="bg-primary-2 "
          classList={{ hidden: !x() && !store.drawerHidden }}
        >
          <div class="max-w-lg p-4 relative  flex-1 ">
            <Scrollable>
              {/*<Packages />*/}
              <Outlet />
            </Scrollable>
          </div>
        </Flex.RowFull>
      </Flex.RowFull>
    </>
  );
}
