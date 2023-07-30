import Salads from "../../Data/Menu/Salads";
import Burgers from "../../Data/Menu/Burgers";
import Pastas from "../../Data/Menu/Pastas";
import Pizzas from "../../Data/Menu/Pizzas";
import Sweets from "../../Data/Menu/Sweets";
import { MenuCategory } from "../../types/menu.types";

import styles from "./Menu.module.css";

export default function RenderMenuItems({ type }: { type: MenuCategory }) {
  const getMenuItems = () => {
    switch (Number(type)) {
      case MenuCategory.Salad:
        return Salads;
      case MenuCategory.Burger:
        return Burgers;
      case MenuCategory.Pasta:
        return Pastas;
      case MenuCategory.Pizza:
        return Pizzas;
      case MenuCategory.Sweets:
        return Sweets;
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className={styles.renderMenuItems_items}>
      {menuItems.map((item) => (
        <div key={item.name}>
          <ul className={styles.menu_listItems}>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>Ingredients:</li>
            <li>
              {item.ingredients.map((ingredient) => (
                <div key={ingredient}>{ingredient}</div>
              ))}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
