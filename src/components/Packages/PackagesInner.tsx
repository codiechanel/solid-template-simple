import { createMemo, For, Suspense } from "solid-js";
import { RippleLoader, Flex } from "@codiechanel/solid-library/mine";
import { useStore } from "../../store";
import { createStore, produce } from "solid-js/store";
// import Flex from "../Flex";
export default function PackagesInner() {
  let [state, setState] = createStore({
    list: {},
  });

  let list = createMemo(() => {
    return Object.entries(state.list);
  });

  return (
    <Flex.ColumnFull class="p-4 min-h-full text-primary-1">
      <For each={list()}>
        {([key, val]) => {
          console.log("hey");

          return <div>{val.name}</div>;
        }}
      </For>

      <button
        onClick={() => {
          setState(
            produce((x: any) => {
              let newObj = {
                key: Date.now().toString(),
                name: "new",
              };
              x.list[newObj.key] = newObj;
            })
          );
        }}
      >
        click
      </button>
    </Flex.ColumnFull>
  );
}
