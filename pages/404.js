import React, { Fragment } from 'react'
import Error from '../components/404'
import { getHeaderMenuJson } from '../shared/api';

const ErrorPage = () => {
    return (
        <Fragment>
            <Error />
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
export default ErrorPage;

