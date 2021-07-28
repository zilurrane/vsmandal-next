import React from "react";
import Link from "next/link";
import styles from "./Cta.module.scss";

const CtaSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className={`wpo-cta-area ${props.ctaclass} ${styles["wpo-cta-area-mod"]}`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-lg-12`}>
            <div className={`wpo-cta-text ${styles["wpo-cta-text-mod"]}`}>
              <h2>You Can Help The Poor With Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse{" "}
              </p>
              <div className={`btns ${styles["btns-mod"]}`}>
                <Link href="/donate">
                  <a
                    onClick={ClickHandler}
                    className={`theme-btn ${styles["theme-btn-mod"]}`}
                  >
                    Donate Now
                  </a>
                </Link>
                <Link href="/">
                  <a
                    onClick={ClickHandler}
                    className={`theme-btn-s2  ${styles["theme-btn-s2-mod"]}`}
                  >
                    Join Us Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
