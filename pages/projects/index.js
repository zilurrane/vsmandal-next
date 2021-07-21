import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'

const Projects = () => {
    return (
        <Fragment>
            <PageTitle pageTitle={'Project Management'} pagesub={'Handle Projects'} />
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="wpo-donate-header">
                                <h2>Projects</h2>
                            </div>
                            show add new project button
                            <br />

                            show table below as:<br />
                            project name     description     other deatils(if needed)    edit and delete button for each project
                            {/* <Table /> with column names to be passed , which  buttons to show that to be passed */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Projects;
