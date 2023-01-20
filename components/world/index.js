import React from "react";
import Link from "next/link";
import tm1 from "../../public/images/team/1.png";
import Image from "next/image";
import styles from "./World.module.scss";

const WorldSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div
      className={`wpo-world-area section-padding ${props.worldclass} ${styles["wpo-world-area-mod"]}`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div
              className={`wpo-world-section ${styles["wpo-world-section-mod"]}`}
            >
              <h2>Lets Chenge The World With Humanity</h2>
              <Link onClick={ClickHandler} href="/Volunteer">
                <a href="/Volunteer">
                  <div>
                    <Image src={tm1} alt="" /> Become A Volunteer
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldSection;
