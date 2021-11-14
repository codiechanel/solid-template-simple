import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { StoreActions, StoreState } from "../common/constants";
import createAgent from "./createAgent";
import createArticles from "./createArticles";

interface AppStore extends Array<StoreState | StoreActions> {
  0?: StoreState;
  1?: StoreActions;
}

/*interface AppProps {
  value: AppStore
  children: any
}*/

const StoreContext = createContext<AppStore>();

export function Provider(props) {
  let packages, categories, drawerHidden;

  const [state, setState] = createStore({
    showCategories: false,
    get packages() {
      return packages?.();
    },
    get categories() {
      return categories?.();
    },
    get drawerHidden() {
      return drawerHidden?.();
    },
  });

  let actions: StoreActions = {},
    store = [state, actions],
    // @ts-ignore
    agent = createAgent(store);
  [packages, categories, drawerHidden] = createArticles(
    agent,
    actions,
    state,
    setState
  );

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
