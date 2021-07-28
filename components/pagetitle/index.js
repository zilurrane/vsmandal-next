import Link from "next/link";
import React from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = (props) => {
  return (
    <div className={`wpo-breadcumb-area ${styles['wpo-breadcumb-area-mod']}`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={`wpo-breadcumb-wrap ${styles['wpo-breadcumb-wrap-mod']}`}>
              <h2>{props.pageTitle}</h2>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span>{props.pagesub}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
