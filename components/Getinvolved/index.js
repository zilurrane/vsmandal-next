import React from "react";
import blog1 from "../../public/images/blog/img-1.jpg";
import blog2 from "../../public/images/blog/img-2.jpg";
import blog3 from "../../public/images/blog/img-3.jpg";
import Link from "next/link";
import Image from "next/image";
import styles from "./GetInvolved.module.scss";

const Banner = () => {
  return (
    <div
      className={`wpo-blog-area section-padding ${styles["wpo-blog-area-mod"]}`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={`wpo-section-title`}>
              <span>Our Blog</span>
              <h2>Latest News</h2>
            </div>
          </div>
        </div>
        <div className={`row`}>
          <div className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid ${styles["custom-grid-mod"]}`}>
            <div className={`wpo-blog-item`}>
              <div className={`wpo-blog-img`}>
                <Image src={blog1} alt="" />
              </div>
              <div
                className={`wpo-blog-content ${styles["wpo-blog-content-mod"]}`}
              >
                <span>Nov 24, 2020</span>
                <h2>
                  <Link href="/Blog">
                    {/* click handler removed */}
                    <a>Help The Helpless</a>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid ${styles["custom-grid-mod"]}`}
          >
            <div className={`wpo-blog-item ${styles["wpo-blog-item-mod"]}`}>
              <div className={`wpo-blog-img ${styles["wpo-blog-img-mod"]}`}>
                <Image src={blog2} alt="" />
              </div>
              <div
                className={`wpo-blog-content  ${styles["wpo-blog-content-mod"]}`}
              >
                <span>Nov 24, 2020</span>
                <h2>
                  <Link href="/Blog">
                    {/* click handler removed */}
                    <a>Help The Helpless</a>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid ${styles["custom-grid-mod"]}`}
          >
            <div className={`wpo-blog-item ${styles["wpo-blog-item-mod"]}`}>
              <div className={`wpo-blog-img ${styles["wpo-blog-img-mod"]}`}>
                <Image src={blog3} alt="" />
              </div>
              <div
                className={`wpo-blog-content ${styles["wpo-blog-content-mod"]}`}
              >
                <span>Nov 24, 2020</span>
                <h2>
                  <Link href="/Blog">
                    {/* click handler removed */}
                    <a>Help The Helpless</a>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
