import { Fragment } from 'react';
import JsonToHTML from '../JsonToHTML';
import JsonToTabs from '../JsonToTabs';
import JsonToTimeline from '../JsonToTimeline';

export default ({ jsonData = [] }) => (
    <Fragment>
        {
            jsonData.map((item, index) => {
                if (item.type === "richtexteditor") {
                    return <JsonToHTML key={index} json={item.tokens} />
                } else if (item.type === "tabs") {
                    return <JsonToTabs key={index} tabs={item.tabs} />
                } else if (item.type === "timeline") {
                    return <JsonToTimeline key={index} json={item.tokens} />
                } else if (item.type === "content1image1") {
                    return <JsonToHTML key={index} json={item.tokens} />
                } else {
                    return <div key={index}>Unhandled Component Preview</div>
                }
            })
        }
    </Fragment>
);
