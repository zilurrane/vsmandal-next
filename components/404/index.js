import Link from "next/link";
import Image from "next/image";
import erimg from "../../public/images/error-404.png";
import styles from "./404.module.scss";

const Error = () => {
  return (
    <section className={`${styles["error-404-section"]} section-padding`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col col-xs-12`}>
            <div className={`content clearfix`}>
              <div className={`error`}>
                <Image src={erimg} alt="" />
              </div>
              <div className={`${styles["error-message"]}`}>
                <h3>Oops! Page Not Found!</h3>
                <p>
                  We’re sorry but we can’t seem to find the page you requested.
                  This might be because you have typed the web address
                  incorrectly.
                </p>
                <Link href="/">
                  <a className={`theme-btn-s4`}>Back to home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
