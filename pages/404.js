import React, { Fragment } from 'react'
import Error from '../components/404'
import Header from '../components/header'
import Footer from '../components/footer'

const ErrorPage = () => {
    return (
        <Fragment>
            <Header />
            <Error />
            <Footer />
        </Fragment>
    )
};
export default ErrorPage;

