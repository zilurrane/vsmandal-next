import React from "react";
import styles from './Counter.module.scss';

const CounterSection = ({ countclass = '', data = [] }) => {
  return (
    <div className={`wpo-counter-area ${countclass} ${styles['wpo-counter-area-mod']}`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-lg-12`}>
            <div className={`wpo-counter-grids ${styles['wpo-counter-grids-mod']}`}>

              {data?.map(item => {
                if (!item || !item.count || !item.title) return null;

                return (
                  <div className={`grid ${styles['grid-mod']}`}>
                    <div>
                      <h2>
                        <span className={`odometer`} data-count="6200">
                          {item.count}
                        </span>
                        +
                      </h2>
                    </div>
                    <p>{item.title}</p>
                  </div>
                )
              }
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
