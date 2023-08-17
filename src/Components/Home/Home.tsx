import "../../../src/App.css";
import Subheading from "../Subheading/Subheading";
import styles from "./Home.module.css";
import images from "../../Data/images";
import { useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  return (
    <div
      className={`${styles.home_header} app__wrapper section__padding`}
      id="Home"
    >
      <div className={`app__wrapper_info ${styles.home_wrapper}`}>
        <Subheading title="Eat healthy, be happy" />
        <h1 className={styles.home_header_h1}>
          Where every dish tells a story
        </h1>
        <p className={`${styles.home_wrapper_paragraph} p__cormorant `}>
          Indulge in a symphony of tastes, where food becomes an adventure and
          every bite a delightful discovery. Welcome to our culinary playground,
          where we celebrate the joy of eating with creative flair and a dash of
          whimsy. Let's savor the moments together, one delectable dish at a
          time.
        </p>
        <a href="#Menu">
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </a>
      </div>
      <div
        className="app__wrapper_img"
        style={{
          visibility: showImage ? "visible" : "hidden",
        }}
      >
        <img
          className={styles.home_burger_img}
          src={images.burger}
          alt="burger img"
          onLoad={() => setShowImage(true)}
        />
      </div>
    </div>
  );
}
