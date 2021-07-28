import React from "react";
import styles from './Counter.module.scss';

const CounterSection = (props) => {
  return (
    <div className={`wpo-counter-area ${props.countclass} ${styles['wpo-counter-area-mod']}`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-lg-12`}>
            <div className={`wpo-counter-grids ${styles['wpo-counter-grids-mod']}`}>
              <div className={`grid ${styles['grid-mod']}`}>
                <div>
                  <h2>
                    <span className={`odometer`} data-count="6200">
                      6200
                    </span>
                    +
                  </h2>
                </div>
                <p>Donation</p>
              </div>
              <div className={`grid ${styles['grid-mod']}`}>
                <div>
                  <h2>
                    <span className={`odometer`} data-count="80">
                      80
                    </span>
                    +
                  </h2>
                </div>
                <p>Fund Raised</p>
              </div>
              <div className={`grid ${styles['grid-mod']}`}>
                <div>
                  <h2>
                    <span className={`odometer`} data-count="245">
                      245
                    </span>
                    +
                  </h2>
                </div>
                <p>Volunteers</p>
              </div>
              <div className={`grid ${styles['grid-mod']}`}>
                <div>
                  <h2>
                    <span className={`odometer`} data-count="605">
                      605
                    </span>
                    +
                  </h2>
                </div>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
