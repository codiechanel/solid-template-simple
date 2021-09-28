import { HiSolidPlusCircle } from "solid-icons/hi";
import {
  createResource,
  createSignal,
  For,
  Match,
  Switch,
  Suspense,
} from "solid-js";
// import Modal from "./Modal";

import { useNavigate } from "solid-app-router";
import { ChakraInput } from "@codiechanel/solid-lib-simple/Chakra";
// import {categories, categoriesAction} from "../common/resource";
import { TwButton } from "@codiechanel/solid-lib-simple/Tailwind";
import { Modal } from "@codiechanel/solid-lib-simple/Mine";
// import {createCategoryToDB} from "../common/api";

export default function Categories(props) {
  let [showModal, setShowModal] = createSignal(false);
  let [categoryName, setCategoryName] = createSignal("");
  let navigate = useNavigate();
  return (
    <div class="p-8">
      <Modal
        show={showModal}
        innerClassName="bg-gray-800"
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-300 mb-4">
            Create category
          </h3>
          <ChakraInput
            placeholder="please enter a name"
            onInput={(e) => {
              setCategoryName(e.currentTarget.value);
            }}
          />
          <div className="mt-4">
            <TwButton
              onClick={() => {
                /*     createCategoryToDB(categoryName()).then((res) => {
                                let newArr = [...categories(), res];
                                categoriesAction.mutate(newArr);
                                setShowModal(false);
                            });*/
              }}
            >
              Save
            </TwButton>
          </div>
        </div>
      </Modal>
      <div class="flex items-center justify-between mb-4 ">
        <span class="text-2xl font-bold text-gray-400">Categories</span>
        <HiSolidPlusCircle
          className="h-6 w-6"
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>

      <div class="flex flex-col gap-2">
        <div
          class="hover:bg-gray-700  px-4 py-2 rounded cursor-pointer"
          onClick={() => {
            navigate(`/`, { replace: true });
          }}
        >
          All
        </div>

        <Suspense
          fallback={
            <div class="article-preview text-red-500">Loading articles...</div>
          }
        >
          <For each={props.categories}>
            {(item: any) => {
              return (
                /*    <Link href={`/?catId=${item.id}`}>*/
                <div
                  class="hover:bg-gray-700  px-4 py-2 rounded cursor-pointer"
                  onClick={() => {
                    navigate(`/?catId=${item.id}`, { replace: true });
                  }}
                >
                  {item.name}
                </div>
              );
            }}
          </For>
        </Suspense>

        {/*     <div class="hover:bg-gray-700  px-4 py-2 rounded cursor-pointer">
            solidjs
          </div>

          <div class="hover:bg-gray-700  px-4 py-2 rounded cursor-pointer">
            tailwind
          </div>*/}
      </div>
    </div>
  );
}
