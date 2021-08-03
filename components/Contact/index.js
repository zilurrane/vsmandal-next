import React from "react";
import ContactForm from "../ContactForm";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <main
      className={`wpo-contact-form-map section-padding ${styles["wpo-contact-form-map-mod"]}`}
    >
      {/* contact info cards */}
      <div className={`container`}>
        <section className={`wpo-content-info`}>
          <div className={`${styles['responsive-cards']}`}>
            <div className={`info-item`}>
              <h2>Dnyan Mandir Building</h2>
              <div className={`info-wrap`}>
                <div className={`info-icon ${styles["info-icon-mod"]}`}>
                  <i className={`ti-world`}></i>
                </div>
                <div className={`info-text`}>
                  <span>
                    Nerurkar Road, Dutta Nagar Chowk, Sangita Wadi, Dombivli(E)
                    421-201
                  </span>
                </div>
              </div>
            </div>

            <div className={`info-item`}>
              <h2>
                <a href="mailto:contact@vsmandal.org">contact@vsmandal.org</a>
              </h2>
              <div className={`info-wrap`}>
                <div className={`info-icon-2 ${styles["info-icon-mod"]}`}>
                  <i className={`fi flaticon-envelope`}></i>
                </div>
                <div className={`info-text`}>
                  <span>Official Mail</span>
                </div>
              </div>
            </div>

            <div className={`info-item`}>
              <h2>(0251)-2800&nbsp;303</h2>
              <div className={`info-wrap`}>
                <div className={`info-icon-3 ${styles["info-icon-mod"]}`}>
                  <i className={`ti-headphone-alt`}></i>
                </div>
                <div className={`info-text`}>
                  <span>Official&nbsp;Phone</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* contact form and map */}
      <section className={`container`}>
        <div className={`row`}>
          <div className={`col col-lg-6 col-md-6 col-sm-12 col-12`}>
            <div className={`contact-form ${styles["contact-form-mod"]}`}>
              <h2>Get In Touch</h2>
              <ContactForm />
            </div>
          </div>
          <div className={`col col-lg-6 col-md-6 col-sm-12 col-12`}>
            <div className={`contact-map`}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15070.477255923242!2d73.0889436!3d19.2118227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b809ed224efb4be!2sVivekanand%20Seva%20Mandal!5e0!3m2!1sen!2sin!4v1624082905551!5m2!1sen!2sin"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
