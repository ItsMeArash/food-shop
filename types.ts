export interface MenuItem {
  id: number;
  name: string;
  price: number;
  discount: number;
  introduction: string;
  details: {
    Cuisine: string;
    RecipeType: string;
    Difficulty: string;
    PreparationTime: string; 
    CookingTime: string;
    Serves: string;
  }[];
  ingredients: string[];
  recipe: string[];
}

export interface FoodDetails {
  data: MenuItem;
}

export interface MenuProps {
  data: MenuItem[];
}

export interface Context {
  params: {id?: string};
  locales?: string | undefined;
  locale?: string | undefined;
  defaultLocale?: string | undefined;
}

export interface QueryState {
  difficulty: string;
  time: string;
}