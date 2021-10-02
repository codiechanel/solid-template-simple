import { For, Suspense } from "solid-js";
import { RippleLoader } from "@codiechanel/solid-library/mine";
import { useStore } from "../../store";
export default function PackagesInner() {
  const [store, { loadPackages }] = useStore();
  return (
    <div class={"flex flex-col p-4  flex-1 h-full"}>
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
    </div>
  );
}
