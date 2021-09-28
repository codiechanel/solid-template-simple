import { createResource, createSignal } from "solid-js";

const LIMIT = 10;

export default function createArticles(agent, actions, state, setState) {
  const [packagesSource, setPackagesSource] = createSignal();
  const [categoriesSource, setCategoriesSource] = createSignal();

  const [categories, categoriesAction] = createResource(
    categoriesSource,
    () =>
      agent.Articles.fetchCategoriesFromDB().then((res) => {
        return res?.data?.categories;
      }),
    {
      initialValue: [],
    }
  );
  /*.then((res) => {
        return res?.data?.packages;
    })*/
  const [packages, packagesAction] = createResource(
    packagesSource,
    (args: string[]) =>
      agent.Articles.fetchPackagesFromDB(args[1]).then((res) => {
        return res?.data?.packages;
      }),
    {
      initialValue: [],
    }
  );

  Object.assign(actions, {
    // setPage: (page) => setState({page}),
    loadPackages(catId) {
      setPackagesSource(["packages", catId]);
    },
    loadCategories() {
      setCategoriesSource(["categories"]);
    },
  });

  return [packages, categories];
}
