import React from "react";
import ContactForm from "../ContactForm";
import styles from "./Contact.module.scss";

const Contactpage = () => {
  return (
    <section
      className={`wpo-contact-form-map section-padding ${styles["wpo-contact-form-map-mod"]}`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <div className={`wpo-contact-info`}>
              <div className={`row`}>
                <div className={`col-lg-4 col-md-6 col-sm-12 col-12`}>
                  <div className={`info-item`}>
                    <h2>25 North Street,Dubai</h2>
                    <div className={`info-wrap`}>
                      <div className={`info-icon`}>
                        <i className={`ti-world`}></i>
                      </div>
                      <div className={`info-text`}>
                        <span>Office Address</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-4 col-md-6 col-sm-12 col-12`}>
                  <div className={`info-item`}>
                    <h2>info@vsmandal.com</h2>
                    <div className={`info-wrap`}>
                      <div className={`info-icon-2`}>
                        <i className={`fi flaticon-envelope`}></i>
                      </div>
                      <div className={`info-text`}>
                        <span>Official Mail</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-4 col-md-6 col-sm-12 col-12`}>
                  <div className={`info-item`}>
                    <h2>+91 256-987-239</h2>
                    <div className={`info-wrap`}>
                      <div className={`info-icon-3`}>
                        <i className={`ti-headphone-alt`}></i>
                      </div>
                      <div className={`info-text`}>
                        <span>Official Phone</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
