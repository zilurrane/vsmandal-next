import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contact'
import { getHeaderMenuJson } from '../../shared/api';

const ContactPage = () => {
    return (
        <Fragment>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
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

