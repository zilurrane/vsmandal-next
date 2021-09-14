import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from "./JsonToTimeline.module.scss";
import 'react-vertical-timeline-component/style.min.css';

const JsonToTimeline = ({ json }) => {
    return (
        <div>
            <VerticalTimeline className={styles.timeline}>
                {
                    json.map((token, index) =>
                        <VerticalTimelineElement
                            key={index}
                            className={styles.timelineItem}
                            textClassName={styles.timelineTextContainer}
                            contentArrowStyle={{ borderRight: '7px solid #ff5900' }}
                            date={<time dateTime={token.date}>{token.date}</time>}
                            iconClassName={styles.timelineIconContainer}
                            dateClassName={styles.timelineDate}
                            icon={<img className={styles.timelineIcon} src={token.icon} />}
                        >
                            <h6 className={styles.timelineText}>
                                {token.text}
                            </h6>
                        </VerticalTimelineElement>
                    )
                }
            </VerticalTimeline>
        </div>
    );
}

export default JsonToTimeline;
