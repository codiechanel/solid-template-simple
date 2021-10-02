import Categories from "../components/Categories";
import Packages from "../components/Packages";

export default function Home() {
  return (
    <>
      <section class="bg-gray-100 text-gray-500 flex bg-yellow-500 flex-1">
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
