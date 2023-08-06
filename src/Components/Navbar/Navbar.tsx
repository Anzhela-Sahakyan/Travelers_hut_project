import styles from "./Navbar.module.css";
import "../../../src/App.css";
import images from "../../Data/images.js";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuTwoToneIcon from "@mui/icons-material/RestaurantMenuTwoTone";
import { useState } from "react";
import useEscapeKey from "../../helpers/useEscapeKey";
import RenderNavbarItems from "./RenderNavbarItems";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbar = <RenderNavbarItems onCloseMenu={() => setToggleMenu(false)} />;

  const closeWithEscKey = useEscapeKey(() => setToggleMenu(false));

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className={`${styles.navbar_links} p__opensans`}>{navbar} </ul>

      <div className={styles.navbar_smallscreen}>
        <MenuIcon
          className={styles.navbar_smallscreen_menu_icon}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className={`${styles.navbar_smallscreen_overlay} `}>
            <RestaurantMenuTwoToneIcon
              className={styles.navbar_smallscreen_overlay_icon}
              onClick={() => setToggleMenu(false)}
              onKeyDown={(event) => closeWithEscKey}
              tabIndex={0}
            />
            <ul className={`${styles.navbar_smallscreen_links} p__opensans`}>
              {navbar}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
