import { useRef } from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import Subheading from "../Subheading/Subheading";
import imagesList from "../../Data/imagesList";

import styles from "./PhotoGallery.module.css";
import "../../App.css";

export default function PhotoGallery() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (direction === "left" && current) {
      current.scrollLeft -= 300;
    } else if (direction === "right" && current) {
      current.scrollLeft += 300;
    }
  };

  const image = imagesList.map((image) => (
    <div className={`${styles.gallery_image_card} flex__center`} key={image}>
      <img src={image} alt="gallery_img" />
    </div>
  ));

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery_content_wrapper}>
        <div className={styles.gallery_content}>
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <Subheading title="Delicious Photos" />
        </div>
      </div>
      <div className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {image}
        </div>
        <div className={styles.gallery_images_arrows}>
          <BsArrowLeftCircle
            className={styles.gallery_arrow}
            onClick={() => scroll("left")}
          />
          <BsArrowRightCircle
            className={styles.gallery_arrow}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}
