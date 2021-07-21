import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contact'

const ContactPage = () => {
    return (
        <Fragment>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
        </Fragment>
    )
};
export default ContactPage;

