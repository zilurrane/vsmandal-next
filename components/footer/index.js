import React from "react";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "../Newsletter";
import n1 from "../../public/images/footer/img-1.jpg";
import n2 from "../../public/images/footer/img-2.jpg";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className={`wpo-site-footer ${styles["wpo-site-footer-mod"]}`}>
      <Newsletter />
      <div className={`wpo-upper-footer ${styles["wpo-upper-footer-mod"]}`}>
        <div className={`container ${styles["container-mod"]}`}>
          <div className={`row ${styles["row-mod"]}`}>
            <div
              className={`col col-lg-3 col-md-6 col-sm-12 col-12 ${styles["col-mod"]}`}
            >
              <div
                className={`widget about-widget ${styles["widget-mod"]} ${styles["about-widget-mod"]}`}
              >
                <p>
                  Build and Earn with your online store with lots of cool and
                  exclusive wpo-features{" "}
                </p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/" passHref>
                      <i className={`ti-facebook`}></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/" passHref>
                      <i className={`ti-twitter-alt`}></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/" passHref>
                      <i className={`ti-instagram`}></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/" passHref>
                      <i className={`ti-google`}></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`col col-lg-3 col-md-6 col-sm-12 col-12 ${styles["col-mod"]}`}
            >
              <div
                className={`widget link-widget resource-widget ${styles["widget-mod"]} ${styles["link-widget-mod"]} ${styles["resource-widget-mod"]}`}
              >
                <div className={`widget-title ${styles["widget-title-mod"]}`}>
                  <h3>Top News</h3>
                </div>
                <div className={`news-wrap ${styles["news-wrap-mod"]}`}>
                  <div className={`news-img ${styles["news-img-mod"]}`}>
                    <Image src={n1} alt="" />
                  </div>
                  <div className={`news-text ${styles["news-text-mod"]}`}>
                    <h3>
                      <Link onClick={ClickHandler} href="/blog">
                        Education for all poor children
                      </Link>
                    </h3>
                    <span>12 Nov, 2020</span>
                  </div>
                </div>
                <div className={`news-wrap ${styles["news-wrap-mod"]}`}>
                  <div className={`news-img ${styles["news-img-mod"]}`}>
                    <Image src={n2} alt="" />
                  </div>
                  <div className={`news-text ${styles["news-text-mod"]}`}>
                    <h3>
                      <Link onClick={ClickHandler} href="/blog">
                        Education for all poor children
                      </Link>
                    </h3>
                    <span>12 Nov, 2020</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col col-lg-2 col-md-6 col-sm-12 col-12 ${styles["col-mod"]}`}
            >
              <div
                className={`widget link-widget ${styles["widget-mod"]} ${styles["link-widget-mod"]}`}
              >
                <div className={`widget-title ${styles["widget-title-mod"]}`}>
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/case">
                      Our Causes
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/case">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/event">
                      Our Event
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12 ${styles["col-mod"]}`}
            >
              <div
                className={`widget market-widget wpo-service-link-widget ${styles["widget-mod"]}`}
              >
                <div className={`widget-title ${styles["widget-title-mod"]}`}>
                  <h3>Contact </h3>
                </div>
                <p>online store with lots of cool and exclusive wpo-features</p>
                <div className={`contact-ft ${styles["contact-ft-mod"]}`}>
                  <ul>
                    <li>
                      <i className={`fi flaticon-pin ${styles["fi-mod"]}`}></i>
                      28 Street, New York City, USA
                    </li>
                    <li>
                      <i className={`fi flaticon-call ${styles["fi-mod"]}`}></i>
                      +000123456789
                    </li>
                    <li>
                      <i
                        className={`fi flaticon-envelope ${styles["fi-mod"]}`}
                      ></i>
                      vsmandal@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`wpo-lower-footer ${styles["wpo-lower-footer-mod"]}`}>
        <div className={`container ${styles["container-mod"]}`}>
          <div className={`row ${styles["row-mod"]}`}>
            <div className={`col col-xs-12 ${styles["col-mod"]}`}>
              <p className={`copyright ${styles["copyright-mod"]}`}>
                &copy; 2020 vsmandal. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
