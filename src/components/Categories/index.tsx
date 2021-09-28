import { useStore } from "../../store";
import Categories from "./Categories";

export default function index() {
  const [store, { loadCategories }] = useStore();

  loadCategories();
  return <Categories categories={store.categories} />;
}
