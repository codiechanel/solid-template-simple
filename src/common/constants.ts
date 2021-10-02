export interface StoreState {
  packages?: any;
  categories?: any;
  drawerHidden: boolean;
}

export interface StoreActions {
  loadPackages?: Function;
  loadCategories?: Function;
  createCategoryToDB?: Function;
  toggleDrawer?: Function;
}
