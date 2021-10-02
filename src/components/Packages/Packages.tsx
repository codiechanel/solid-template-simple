import { For, Suspense } from "solid-js";

export default function Packages(props) {
  return (
    <div class={"p-8"}>
      <Suspense
        fallback={
          <div class="article-preview text-red-500">Loading articles...</div>
        }
      >
        <For each={props.packages}>
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
