import React from "react";
import vimg from "../../public/images/about-vedio.jpg";
import VideoModal from "../../components/ModalVideo";
import Image from "next/image";
import styles from "./VideoCta.module.scss";

const VedioCta = (props) => {
  return (
    <div
      className={`wpo-about-video-area ${styles["wpo-about-video-area-mod"]}`}
    >
      <div className={`container`}>
        <div className={`row ${styles["row-mod"]}`}>
          <div className={`col-lg-8 offset-lg-2`}>
            <div
              className={`wpo-about-video-item ${styles["wpo-about-video-item-mod"]}`}
            >
              <div
                className={`wpo-about-video-img ${styles["wpo-about-video-img-mod"]}`}
              >
                <Image src={vimg} alt="" />
                <div
                  className={`entry-media video-holder video-btn2 ${styles["video-btn2-mod"]}`}
                >
                  <VideoModal />
                </div>
              </div>
              <h2>
                See what we do for the <span>poor people and the children</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedioCta;
