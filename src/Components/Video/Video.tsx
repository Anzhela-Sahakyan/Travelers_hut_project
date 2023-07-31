import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";
import brickovenvideo from "../../Data/videos";

import { useRef, useState } from "react";

import "../../App.css";
import styles from "./Video.module.css";

export default function Video() {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((prevVideoState) => !prevVideoState);

    if (playVideo) {
      vidRef.current?.pause();
    } else {
      vidRef.current?.play();
    }
  };

  return (
    <div className={styles.video_wrapper}>
      <video
        className={styles.video}
        src={brickovenvideo.brickovenvideo}
        ref={vidRef}
        loop
        controls={false}
        muted
      />
      <div className={`${styles.video_overlay} flex__center`}>
        <div
          className={`${styles.video_overlay_circle} flex__center`}
          onClick={handleVideo}
        >
          {playVideo ? (
            <PauseCircleOutlinedIcon className={styles.video_btn} />
          ) : (
            <PlayArrowOutlinedIcon className={styles.video_btn} />
          )}
        </div>
      </div>
    </div>
  );
}
