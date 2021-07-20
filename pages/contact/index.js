import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contact'
import Header from '../../components/header';
import Footer from '../../components/footer';

const ContactPage = () => {
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
            <Footer />
        </Fragment>
    )
};
export default ContactPage;

