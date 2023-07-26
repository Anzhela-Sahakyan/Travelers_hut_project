import "../../../src/App.css";
import Subheading from "../Subheading/Subheading";
import RenderMenuItems from "./RenderMenuItems";
import styles from "./Menu.module.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import { useState } from "react";
import { MenuCategory } from "../../types/menu.types";
import { MENU_BUTTONS } from "../../const/menu.const";

export default function Menu() {
  const [category, setCategory] = useState<MenuCategory | null>(null);

  const menuButtons = Object.keys(
    MENU_BUTTONS
  ) as unknown as Array<MenuCategory>;

  function handleClick(newCategory: MenuCategory) {
    if (category === newCategory) {
      setCategory(null);
    } else {
      setCategory(newCategory);
    }
  }

  return (
    <div className={`${styles.menu}  section__padding`} id="Menu">
      <div className={`${styles.menu_title_subtitle} flex__center `}>
        <h1 className="headtext__cormorant">Menu</h1>
        <div className={styles.menu_menu_icon_wrapper}>
          <MenuBookTwoToneIcon className={styles.menu_menu_icon} />
        </div>
        <Subheading title="Explore Our Menu" />
      </div>
      <div className={styles.menu_menu}>
        {menuButtons.map((category) => (
          <button
            key={category}
            type="button"
            className="custom__button__menu"
            onClick={() => handleClick(category)}
          >
            {MENU_BUTTONS[category]}
          </button>
        ))}
      </div>
      <div className={styles.menu_items}>
        {category && <RenderMenuItems type={category} />}
      </div>
    </div>
  );
}
