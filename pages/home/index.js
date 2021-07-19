import React, { Fragment } from 'react';
import Hero from '../../components/hero'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import EventSection from '../../components/event'
import CtaSection from '../../components/cta'
import WorldSection from '../../components/world'
import BlogSection from '../../components/BlogSection'
import Header from '../../components/header'

const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <Mission />
            {/* <About/>
            <CaseSlide/>
            <CounterSection/>
            <TeamSection/>
            <WorldSection/>
            <EventSection/>
            <CtaSection/>
            <BlogSection/> */}
        </Fragment>
    )
};
export default HomePage;