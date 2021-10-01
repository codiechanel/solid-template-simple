import {
  createComputed,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import { useStore } from "../store";
import Categories from "../components/Categories";
import Packages from "../components/Packages";
import { createSWR, useSWR } from "../common/solid-swr";
import { createStore } from "solid-js/store";

const fetcher = (collectionId) =>
  fetch(`https://api.raindrop.io/rest/v1/raindrops/${collectionId}`, {
    headers: {
      Authorization: "Bearer 15adda79-54c8-4a0c-8def-a3e3318464f1",
    },
  }).then((res) => res.json());

function createResourceSWR(key, fetcher) {
  const swr = createSWR({
    fetcher,
  });

  let [state, setState] = createSignal([]);

  let actions = {
    mutate: () => {
      console.log("mutate");
    },
  };
  let memo1 = createMemo(() => {
    const [state, actions]: any = swr.useSWR(key());
    return [state, actions];
  });

  createComputed(() => {
    let [state, actions] = memo1();
    if (state.data) {
      setState(state.data);
    } else {
      setState([]);
    }
    // console.log("post createComputed", data);
  });
  return [state, actions];
}

// 20492806
// 20494359

export default function Home() {
  // https://api.raindrop.io/rest/v1/raindrops/${collectionId}
  // https://api.raindrop.io/rest/v1/user
  // https://api.raindrop.io/rest/v1/collections
  /*const [data, actions]: any = swr.useSWR(
    "https://api.raindrop.io/rest/v1/collections/childrens"
  );*/

  let [collectId, setCollectId] = createSignal("20492806");

  const [raindrops, { mutate }]: any = createResourceSWR(collectId, fetcher);
  // .loading, raindrops()
  createComputed(() => {
    console.log("post raindrops", raindrops());
  });

  return (
    <>
      <section class="bg-gray-100 text-gray-500 flex bg-yellow-500 flex-1">
        <button
          onClick={() => {
            setCollectId("20494359");
          }}
        >
          click
        </button>
        <div class="w-80 max-w-md bg-primary-1">
          <Categories />
        </div>
        <div class="bg-primary-2 flex flex-1 p-8 ">
          <div class="max-w-lg p-4 relative  flex-1 ">
            <div class="absolute inset-0 overflow-auto">
              <Packages />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
