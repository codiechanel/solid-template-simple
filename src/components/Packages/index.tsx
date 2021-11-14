import { useStore } from "../../store";

import { createComputed, createEffect, createMemo } from "solid-js";
import PackagesInner from "./PackagesInner";
import { useLocation, useParams } from "solid-app-router";

export default function index() {
  const [store, { loadPackages }] = useStore();

  let packages = () => store.packages;

  const catId = createMemo(() => {
    let { catId } = useParams();
    return catId;
  });

  /*  const catId = createMemo(() => {
    let j = new URLSearchParams(useLocation().search);
    return j.get("catId") ? j.get("catId") : "fetchAllCategories";
  });*/

  createComputed(() => {
    let cId = catId();
    // alert(cId);
    queueMicrotask(() => {
      loadPackages(cId);
    });
  });

  return <PackagesInner />;
}
