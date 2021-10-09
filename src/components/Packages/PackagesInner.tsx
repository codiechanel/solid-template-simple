import { For, Suspense } from "solid-js";
import { RippleLoader, Flex } from "@codiechanel/solid-library/mine";
import { useStore } from "../../store";
// import Flex from "../Flex";
export default function PackagesInner() {
  const [store, { loadPackages }] = useStore();
  return (
    <Flex.ColumnFull class="p-4 min-h-full text-primary-1">
      <Suspense fallback={<RippleLoader />}>
        <For each={store.packages}>
          {(item: any) => {
            return (
              /*    <Link href={`/?catId=${item.id}`}>*/
              <div
                class="flowbite card hover:bg-gray-700  px-4 py-2 rounded cursor-pointer mt-4"
                onClick={() => {
                  // navigate(`/?catId=${item.id}`, { replace: true });
                }}
              >
                {item.name}
              </div>
            );
          }}
        </For>
      </Suspense>
    </Flex.ColumnFull>
  );
}
