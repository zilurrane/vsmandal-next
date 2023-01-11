import React, { Fragment } from 'react';
import { getHeaderMenuJson } from '../../shared/api';
import Banner from '../../components/Getinvolved/Banner/Banner.js';
import Donationdiv from '../../components/Getinvolved/Donationdiv/Donationdiv.js';
import DonationDiv from '../../components/Getinvolved/Donationdiv/Donationdiv.js';
import CounterSection from '../../components/counter';
import Donationcard from '../../components/Getinvolved/Donationcards';
const ContactPage = () => {
    return (
        <Fragment>
            {/* <PageTitle pageTitle={'Events'} pagesub={'Events'} /> */}
            {/* <BlogImages/>
            <BlogDescription />
            <Quote />
            <Blog /> */}
            
            <Banner/>
            <DonationDiv/>            
            <CounterSection/>
            <Donationcard/>

             
            
            
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