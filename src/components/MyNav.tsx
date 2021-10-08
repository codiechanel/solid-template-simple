// import MenuIcon from "../heroicons/solid/menu.svg";
import { HiSolidMenu, HiSolidBell } from "solid-icons/hi";
import { useStore } from "../store";
import { TwButton } from "@codiechanel/solid-library/tailwind";

export default function MyNav() {
  const [store, { toggleDrawer }] = useStore();
  return (
    /*main disclosure*/
    <div class="bg-primary-1">
      <div class="mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-12 md:h-16">
          {/*x buttton sm:hidden */}
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => {
                toggleDrawer();
              }}
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <HiSolidMenu className="h-6 w-6" />
            </button>
          </div>
          {/*for the icon and text menu */}
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div
              onClick={() => {
                toggleDrawer();
              }}
              class="flex-shrink-0 flex items-center"
            >
              <img
                class="block lg:hidden h-6 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              {/*this will be hidden on small screens*/}
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>

            {/*menu items */}
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <a class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                  {" "}
                  Home{" "}
                </a>
                <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {" "}
                  Projects{" "}
                </a>
                <TwButton
                  className="!bg-primary-3 !text-white"
                  onClick={() => {
                    let theme = "one-dark";
                    document.documentElement.setAttribute("data-theme", theme);

                    localStorage.setItem("theme", theme);
                  }}
                >
                  Dark
                </TwButton>
                <TwButton
                  className="!bg-accent-1 !text-white"
                  onClick={() => {
                    let theme = "deck-ui";
                    document.documentElement.setAttribute("data-theme", theme);

                    localStorage.setItem("theme", theme);
                  }}
                >
                  Deck UI
                </TwButton>
              </div>
            </div>
          </div>{" "}
          {/*end icon/text menu */}
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">View notifications</span>
              <HiSolidBell className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
