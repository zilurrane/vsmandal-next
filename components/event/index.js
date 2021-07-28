import React from "react";
import pr1 from "../../public/images/event/img-1.jpg";
import pr2 from "../../public/images/event/img-2.jpg";
import pr3 from "../../public/images/event/img-3.jpg";
import Link from "next/link";
import Image from "next/image";
import styles from "./Event.module.scss";

const EventSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div
      className={`wpo-event-area section-padding ${styles["wpo-event-area-mod"]}`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={`wpo-section-title`}>
              <span>Our Events</span>
              <h2>Upcoming Events</h2>
            </div>
          </div>
        </div>
        <div className={`row`}>
          <div className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid`}>
            <div className={`wpo-event-item ${styles["wpo-event-item-mod"]}`}>
              <div className={`wpo-event-img ${styles["wpo-event-img-mod"]}`}>
                <Image src={pr1} alt="" />
                <div className={`thumb-text ${styles["thumb-text-mod"]}`}>
                  <span>25</span>
                  <span>NOV</span>
                </div>
              </div>
              <div className={`wpo-event-text ${styles["wpo-event-text-mod"]}`}>
                <h2>Education for All Children</h2>
                <ul>
                  <li>
                    <i className={`fa fa-clock-o`} aria-hidden="true"></i>8.00 -
                    5.00
                  </li>
                  <li>
                    <i
                      className={`fi flaticon-pin ${styles["flaticon-pin-mod"]}`}
                    ></i>
                    Newyork City
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Link onClick={ClickHandler} href="/event-details">
                  Get Details...
                </Link>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid`}>
            <div className={`wpo-event-item ${styles["wpo-event-item-mod"]}`}>
              <div className={`wpo-event-img ${styles["wpo-event-img-mod"]}`}>
                <Image src={pr2} alt="" />
                <div
                  className={`thumb-text-2 ${styles["thumb-text-2-mod"]}`}
                >
                  <span>25</span>
                  <span>NOV</span>
                </div>
              </div>
              <div className={`wpo-event-text ${styles["wpo-event-text-mod"]}`}>
                <h2>Food for All Everyone</h2>
                <ul>
                  <li>
                    <i className={`fa fa-clock-o`} aria-hidden="true"></i>8.00 -
                    5.00
                  </li>
                  <li>
                    <i
                      className={`fi flaticon-pin ${styles["flaticon-pin-mod"]}`}
                    ></i>
                    Newyork City
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Link onClick={ClickHandler} href="/event-details">
                  Get Details...
                </Link>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 col-sm-12 col-12 custom-grid`}>
            <div className={`wpo-event-item ${styles["wpo-event-item-mod"]}`}>
              <div className={`wpo-event-img ${styles["wpo-event-img-mod"]}`}>
                <Image src={pr3} alt="" />
                <div
                  className={`thumb-text-3 ${styles["thumb-text-3-mod"]}`}
                >
                  <span>25</span>
                  <span>NOV</span>
                </div>
              </div>
              <div className={`wpo-event-text ${styles["wpo-event-text-mod"]}`}>
                <h2>Free Treatment </h2>
                <ul>
                  <li>
                    <i className={`fa fa-clock-o`} aria-hidden="true"></i>8.00 -
                    5.00
                  </li>
                  <li>
                    <i
                      className={`fi flaticon-pin ${styles["flaticon-pin-mod"]}`}
                    ></i>
                    Newyork City
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Link onClick={ClickHandler} href="/event-details">
                  Get Details...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
