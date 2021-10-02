import { createResource, createSignal } from "solid-js";

const LIMIT = 10;

export default function createArticles(agent, actions, state, setState) {
  const [packagesSource, setPackagesSource] = createSignal();
  const [categoriesSource, setCategoriesSource] = createSignal();
  const [drawerHidden, setDrawerHidden] = createSignal(false);

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
        console.log("fetchPackagesFromDB", res);
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
    createCategoryToDB(name) {
      return agent.Articles.createCategoryToDB(name).then((res) => {
        let newArr = [...categories(), res];
        categoriesAction.mutate(newArr);
        // console.log(x)
        return res;
      });
    },
    toggleDrawer() {
      setDrawerHidden((e) => {
        return !e;
      });
    },
  });

  return [packages, categories, drawerHidden];
}
