import React from "react";

import styles from "../GetInvolved.module.scss"

const Banner = () => {
  return (
    <div className={`container ${styles["banner"]}`}>
    <div className={`row`}>
      <div className={`col-md-6`}>

      </div>
      <div className={`col-md-6 ${styles["banner-right-text"]}`}>
        <h2>Get Involved</h2>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    </div>
    
  );
};


export default Banner;
