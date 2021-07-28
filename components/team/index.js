import React from "react";
import Link from "next/link";
import Image from "next/image";
import tm1 from "../../public/images/team/team-1.jpg";
import tm2 from "../../public/images/team/team-2.jpg";
import tm3 from "../../public/images/team/team-3.jpg";
import styles from "./Team.module.scss";

const TeamSection = (props) => {
  return (
    <div
      className={`wpo-team-area section-padding ${styles["wpo-team-area-mod"]}`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={`wpo-section-title`}>
              <span>Meet Our Team</span>
              <h2>Our Expert Volunteer</h2>
            </div>
          </div>
        </div>
        <div className={`row`}>
          <div className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid`}>
            <div className={`wpo-team-wrap ${styles["wpo-team-wrap-mod"]}`}>
              <div className={`wpo-team-img ${styles["wpo-team-img-mod"]}`}>
                <Image src={tm1} alt="" />
              </div>
              <div
                className={`wpo-team-content ${styles["wpo-team-content-mod"]}`}
              >
                <div
                  className={`wpo-team-text-sub ${styles["wpo-team-text-sub-mod"]}`}
                >
                  <h2>
                    <Link href="/volunteer">
                      <a>Smith Tomkin</a>
                    </Link>
                  </h2>
                  <span>CEO & Founder</span>
                  <ul>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-google"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid`}>
            <div className={`wpo-team-wrap ${styles["wpo-team-wrap-mod"]}`}>
              <div className={`wpo-team-img ${styles["wpo-team-img-mod"]}`}>
                <Image src={tm2} alt="" />
              </div>
              <div
                className={`wpo-team-content ${styles["wpo-team-content-mod"]}`}
              >
                <div
                  className={`wpo-team-text-sub ${styles["wpo-team-text-sub-mod"]}`}
                >
                  <h2>
                    <Link href="/volunteer">Robert Honey</Link>
                  </h2>
                  <span>Volunteer</span>
                  <ul>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-google"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid`}>
            <div className={`wpo-team-wrap ${styles["wpo-team-wrap-mod"]}`}>
              <div className={`wpo-team-img ${styles["wpo-team-img-mod"]}`}>
                <Image src={tm3} alt="" />
              </div>
              <div
                className={`wpo-team-content ${styles["wpo-team-content-mod"]}`}
              >
                <div
                  className={`wpo-team-text-sub ${styles["wpo-team-text-sub-mod"]}`}
                >
                  <h2>
                    <Link href="/volunteer">Juliya Jossoy</Link>
                  </h2>
                  <span>Volunteer</span>
                  <ul>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-google"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" passHref>
                        <a>
                          <i className="ti-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
