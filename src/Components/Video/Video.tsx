import { StyleRounded } from "@mui/icons-material";
import brickovenvideo from "../../Data/videos";

import styles from "./Video.module.css";

export default function Video() {
  return (
    <div className={styles.video_wrapper}>
      <video className={styles.video} src={brickovenvideo.brickovenvideo} />
    </div>
  );
}
