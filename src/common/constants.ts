export interface StoreState {
  packages?: any;
  categories?: any;
}

export interface StoreActions {
  loadPackages?: Function;
  loadCategories?: Function;
}
