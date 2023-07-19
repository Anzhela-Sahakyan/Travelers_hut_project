import { colors } from "@mui/material";
import "../../../src/App.css";
import Subheading from "../Subheading/Subheading";
import styles from "./Menu.module.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

export default function Menu() {
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
        <button type="button" className="custom__button__menu">
          Salads
        </button>
        <button type="button" className="custom__button__menu">
          Burgers
        </button>
        <button type="button" className="custom__button__menu">
          Pizza
        </button>
        <button type="button" className="custom__button__menu">
          Pasta
        </button>
        <button type="button" className="custom__button__menu">
          Beverages
        </button>
        <button type="button" className="custom__button__menu">
          Sweets
        </button>
      </div>
    </div>
  );
}
