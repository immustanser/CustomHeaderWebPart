export interface INavigation {
  categories: ICategory[];
}

export interface ICategory {
  name: string;
  menuItems:IMenuItem[];
}

export interface IMenuItem {
  title: string;
  url: string
}
