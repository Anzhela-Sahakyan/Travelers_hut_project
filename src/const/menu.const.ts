import { MenuCategory } from "../types/menu.types";

export const MENU_BUTTONS: Record<MenuCategory, string> = {
  [MenuCategory.Salad]: "Salad",
  [MenuCategory.Burger]: "Burger",
  [MenuCategory.Pizza]: "Pizza",
  [MenuCategory.Pasta]: "Pasta",
  [MenuCategory.Sweets]: "Sweets",
  [MenuCategory.Beverages]: "Beverages",
} as const;
