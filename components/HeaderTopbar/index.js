import React from "react";
import Link from "next/link";
import styles from "./HeaderTopBar.module.scss";

const HeaderTopbar = () => {
  return (
    <div className={`topbar ${styles["topbar-mod"]}`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col col-md-6 col-sm-8 col-8`}>
            <div className={`contact-intro ${styles["contact-intro-mod"]}`}>
              <ul>
                <li>
                  <i className={`fi flaticon-call ${styles["fi-mod"]}`}></i>
                  +000123456789
                </li>
                <li>
                  <i className={`fi flaticon-envelope ${styles["fi-mod"]}`}></i>
                  vsmandal@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className={`col col-md-6 col-sm-4 col-4`}>
            <div className={`contact-info ${styles["contact-info-mod"]}`}>
              <ul>
                <li>
                  <Link href="/donate">
                    <a
                      className={`theme-btn ${styles["theme-btn-mod"]}`}
                      href="/donate"
                    >
                      Donate Now
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
