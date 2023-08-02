import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import FoodBankTwoToneIcon from "@mui/icons-material/FoodBankTwoTone";
import images from "../../Data/images";

import styles from "./Footer.module.css";
import "../../../src/App.css";

export default function () {
  return (
    <div className={styles.footer} id="Contact">
      <div className={styles.footer_links}>
        <div className={styles.footer_links_contact}>
          <h1 className={styles.footer_headtext}>Contact us</h1>
          <p className="p__opensans">Maksim Gorki 46 , Dilijan, Armenia</p>
          <p className="p__opensans">+374 33 456321</p>
          <p className="p__opensans">champorditnak@gmail.com</p>
        </div>
        <div className={styles.footer_links_logo}>
          <img src={images.logo} alt="footer_logo" />
          <p className="p__opensans">Choose healthy. Be strong. Live long.</p>
          <div className={styles.footer_links_icons}>
            <FaFacebookF
              onClick={() => {
                window.open("https://www.facebook.com/travelers.hut.dili/");
              }}
            />
            <FaInstagram
              onClick={() => {
                window.open("https://www.instagram.com/champordi.tnak/");
              }}
            />
            <FaTelegramPlane
              onClick={() => {
                window.open("https://t.me/domdilijan");
              }}
            />
          </div>
        </div>
        <div className={styles.footer_links_work}>
          <h1 className={styles.footer_headtext}>Working Hours</h1>
          <p className="p__opensans">Monday - Sunday</p>
          <p className="p__opensans">10:00am - 10:00pm</p>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <FoodBankTwoToneIcon className={styles.footer_copyright_icon} />
        <p className="p__opensans">2023 Travelers Hut. All rights reserved.</p>
      </div>
    </div>
  );
}
