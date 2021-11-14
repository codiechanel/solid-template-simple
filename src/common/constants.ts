export interface StoreState {
  packages?: any;
  categories?: any;
  drawerHidden: boolean;
  showCategories?: boolean;
}

export interface StoreActions {
  loadPackages?: Function;
  loadCategories?: Function;
  createCategoryToDB?: Function;
  toggleDrawer?: Function;
  toggleCategories?: Function;
}
