import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div class="bg-primary-3 h-[4px] " />
      <section class="bg-gray-100 text-gray-700 min-h-screen flex">
        <div class="w-80 max-w-md bg-primary-1">
          <div class="m-8">
            <p>Home</p>
          </div>
        </div>
        <div class="bg-primary-2 flex-1 p-8">
          <div class="max-w-lg p-4  h-[400px] relative">
            <div class="absolute inset-0 overflow-auto flex">Column</div>
          </div>
        </div>
      </section>
    </>
  );
}
