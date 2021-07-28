import React from "react";
import Image from "next/image";
import ms1 from "../../public/images/mission/icon1.png";
import ms2 from "../../public/images/mission/icon2.png";
import ms3 from "../../public/images/mission/icon3.png";
import ms4 from "../../public/images/mission/icon4.png";
import styles from "./Mission.module.scss";

const Mission = (props) => {
  return (
    <div
      className={`wpo-mission-area ${props.subclass} ${styles["wpo-mission-area-mod"]}`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={`wpo-section-title`}>
              <span>What We Do?</span>
              <h2>We Are In A Mission To Help The Helpless</h2>
            </div>
          </div>
        </div>
        <div className={`wpo-mission-wrap ${styles["wpo-mission-wrap-mod"]}`}>
          <div className={`row`}>
            <div className={`col-lg-3 col-md-6 col-sm-12 col-12 custom-grid`}>
              <div
                className={`wpo-mission-item ${styles["wpo-mission-item-mod"]}`}
              >
                <div
                  className={`wpo-mission-icon-5 ${styles["wpo-mission-icon-5-mod"]}`}
                >
                  <Image src={ms1} alt="" />
                </div>
                <div className={`wpo-mission-content`}>
                  <h2>Clean Water</h2>
                  <p>
                    Lorem ipsum dolor amet cosectetur adipiscing, sed do
                    eiusmod.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 col-sm-12 col-12 custom-grid`}>
              <div
                className={`wpo-mission-item ${styles["wpo-mission-item-mod"]}`}
              >
                <div
                  className={`wpo-mission-icon-6 ${styles["wpo-mission-icon-6-mod"]}`}
                >
                  <Image src={ms2} alt="" />
                </div>
                <div className={`wpo-mission-content`}>
                  <h2>Healthy Food</h2>
                  <p>
                    Lorem ipsum dolor amet cosectetur adipiscing, sed do
                    eiusmod.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 col-sm-12 col-12 custom-grid`}>
              <div
                className={`wpo-mission-item ${styles["wpo-mission-item-mod"]}`}
              >
                <div
                  className={`wpo-mission-icon-7 ${styles["wpo-mission-icon-7-mod"]}`}
                >
                  <Image src={ms3} alt="" />
                </div>
                <div className={`wpo-mission-content`}>
                  <h2>Pure Education</h2>
                  <p>
                    Lorem ipsum dolor amet cosectetur adipiscing, sed do
                    eiusmod.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 col-sm-12 col-12 custom-grid`}>
              <div
                className={`wpo-mission-item ${styles["wpo-mission-item-mod"]}`}
              >
                <div
                  className={`wpo-mission-icon-8 ${styles["wpo-mission-icon-8-mod"]}`}
                >
                  <Image src={ms4} alt="" />
                </div>
                <div className={`wpo-mission-content`}>
                  <h2>Medical Facilities</h2>
                  <p>
                    Lorem ipsum dolor amet cosectetur adipiscing, sed do
                    eiusmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
