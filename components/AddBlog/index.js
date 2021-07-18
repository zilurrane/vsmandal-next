import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import Donate from '../../components/Donate'


const DonatePage =() => {
    return(
        <Fragment>
            <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <Donate/>
        </Fragment>
    )
};
export default DonatePage;