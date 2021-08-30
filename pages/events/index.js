import React, { Fragment } from 'react';
import { getHeaderMenuJson } from '../../shared/api';
import Event from '../../components/event/index.js'
import EventDescription from '../../components/event/eventDescription.js'
import EventImages from '../../components/event/eventImages';
import Quote from '../../components/Quote/quote.js';

const ContactPage = () => {
    return (
        <Fragment>
            {/* <PageTitle pageTitle={'Events'} pagesub={'Events'} /> */}
            <EventImages/>
            <EventDescription />
            <Quote />
            <Event />
        </Fragment>
    )
};
export async function getStaticProps() {
    const data = await getHeaderMenuJson();
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: { menus: data },
    }
}
export default ContactPage;