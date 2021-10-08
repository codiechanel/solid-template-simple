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
                class="hover:bg-gray-700  px-4 py-2 rounded cursor-pointer"
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
