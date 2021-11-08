import React, { Fragment } from 'react';
import { getHeaderMenuJson } from '../../shared/api';
import Blog from '../../components/blogs/index.js'
import BlogDescription from '../../components/blogs/blogDescription.js'
import BlogImages from '../../components/blogs/blogImages';
import Quote from '../../components/Quote/quote.js';
import React1, { abc1 as abc2 } from '../../components/blogs/blogDescription.js';
// import as from this
console.log(abc2);
const ContactPage = () => {
    return (
        <Fragment>
            {/* <PageTitle pageTitle={'Events'} pagesub={'Events'} /> */}
            <BlogImages/>
            <BlogDescription />
            <Quote />
            <Blog />
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