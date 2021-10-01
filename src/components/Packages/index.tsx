import { useStore } from "../../store";

import { createComputed, createEffect, createMemo } from "solid-js";
import Packages from "./Packages";
import { useLocation } from "solid-app-router";

export default function index() {
  const [store, { loadPackages }] = useStore();

  const catId = createMemo(() => {
    let j = new URLSearchParams(useLocation().search);
    return j.get("catId") ? j.get("catId") : "fetchAllCategories";
  });

  createComputed(() => {
    queueMicrotask(() => {
      loadPackages(catId());
    });
  });

  return <Packages packages={store.packages} />;
}
