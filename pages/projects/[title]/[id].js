import React, { Fragment } from 'react';
import { getAllProjects, getHeaderMenuJson, getProjectById } from '../../../shared/api';

const Projects = ({ project }) => {
    return (
        <Fragment>
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>
                                {project.title}
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: project.content }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export async function getStaticPaths() {
    const projects = await getAllProjects();
    const paths = projects.map((p) => ({
        params: { id: p.id.toString(), title: p.title },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const menus = await getHeaderMenuJson();
    const project = await getProjectById(params.id);
    if (!project || !menus) {
        return {
            notFound: true,
        }
    }
    return {
        props: { project, menus },
    }
}
export default Projects;
