import Link from "next/link";
import Image from "next/image";
import React from "react";
import abimg from "../../public/images/about3.png";
import VideoModal from "../ModalVideo";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div
      className={`wpo-about-area section-padding ${styles["wpo-about-area-mod"]}`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-lg-6 col-md-12 col-sm-12`}>
            <div className={`wpo-about-text ${styles["wpo-about-text-mod"]}`}>
              <div
                className={`wpo-section-title ${styles["wpo-section-title-mod"]}`}
              >
                <span>What We Do?</span>
                <h2>We Are In A Mission To Help The Helpless</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there.
              </p>
              <p>
                Thing embarrassing hidden in the middle of text. All the Lorem
                Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary,{" "}
              </p>
              <div className={`btns ${styles["btns-mod"]}`}>
                <Link href="/donate">
                  {/* click handler removed */}
                  <a href="/donate" className={`theme-btn`}>
                    Donate Now
                  </a>
                </Link>
                <ul>
                  <li className={`video-holder ${styles["video-holder-mod"]}`}>
                    <VideoModal />
                  </li>
                  <li className={`video-text ${styles["video-text-mod"]}`}>
                    Watch Our Video
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 col-md-12 col-sm-12`}>
            <div className={`wpo-about-img-3 ${styles["wpo-about-img-3-mod"]}`}>
              <Image src={abimg} layout="responsive" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
