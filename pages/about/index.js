import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'
import VedioCta from '../../components/vediocta'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import { getHeaderMenuJson } from '../../shared/api';

const CasePage = () => {
    return (
        <Fragment>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <VedioCta />
            <Mission subclass={'section-padding'} />
            <About />
            <CaseSlide />
            <CounterSection />
            <TeamSection />
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
export default CasePage;
