import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import VedioCta from '../../components/vediocta'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import Header from '../../components/header'
import Footer from '../../components/footer'


const CasePage =() => {
    return(
        <Fragment>
            <Header />
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <VedioCta/>
            <Mission subclass={'section-padding'}/>
            <About/>
            <CaseSlide/>
            <CounterSection/>
            <TeamSection/>
            <Footer />
        </Fragment>
    )
};
export default CasePage;
