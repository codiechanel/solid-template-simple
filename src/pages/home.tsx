import Categories from "../components/Categories";
import { useMediaQuery } from "@codiechanel/solid-library/hooks";
import { Flex, Scrollable } from "@codiechanel/solid-library/mine";
import { useStore } from "../store";
import { Outlet } from "solid-app-router";
import { Transition } from "solid-headless";
export const transitionTemplate = {
  enter: "transform transition duration-[400ms]",
  // rotate-[-120deg] scale-50
  enterFrom: "opacity-0 ",
  // rotate-0 scale-100
  enterTo: "opacity-100  ",
  leave: "transform duration-400 transition delay-[200ms] ease-in-out",
  // rotate-0 scale-100
  leaveFrom: "opacity-100  ",
  // scale-95
  leaveTo: "opacity-0  ",
};

/*export const transitionTemplate = {
  enter: "transform transition ease-in-out duration-500 sm:duration-700",
  /!*enterFrom: "translate-x-full",
  enterTo: "translate-x-0",*!/
  enterFrom: "-translate-x-[400px]",
  enterTo: "translate-x-[100px]",
  leave: "transform transition ease-in-out duration-500 sm:duration-700",
  leaveFrom: "translate-x-0",
  leaveTo: "translate-x-full",
};*/

export default function Home() {
  let x = useMediaQuery("(min-width: 400px)");

  const [store] = useStore();
  // alert(!x() + " " + !store.drawerHidden);
  return (
    <>
      <Flex.RowFull className="text-gray-500 ">
        <Transition
          show={!store.drawerHidden}
          // className="w-full h-full bg-white rounded-md shadow-lg"
          {...transitionTemplate}
        >
          <div
            class="flex-1 max-w-sm bg-primary-1"
            classList={{ hidden: store.drawerHidden }}
          >
            <Categories />
          </div>
        </Transition>
        <Flex.RowFull
          // flex flex-row flex-1
          className="  bg-primary-2 "
          classList={{ hidden: !x() && !store.drawerHidden }}
        >
          <div class=" p-4 relative  flex-1 ">
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
