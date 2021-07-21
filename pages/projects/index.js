import React, { Fragment } from 'react';

import { getAllProjects, getHeaderMenuJson } from '../../shared/api';

const Projects = ({ projects = [] }) => {
    const sectionedProjects = projects.reduce((acc, project) => {
        const sectionIndex = acc.indexOf((a) => a.section === project.section);
        if (sectionIndex === -1) {
            acc.push({ section: project.section, projects: [project] });
            return acc;
        }
        acc[sectionIndex].projects.push(project);
        return acc;
    }, []);
    return (
        <Fragment>
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ol>
                                {
                                    sectionedProjects.map(section =>
                                    (<li key={section.section}>
                                        <h3>{section.section}</h3>
                                        <ol>{section.projects.map((project) => (
                                            <li key={project.title}>
                                                {project.title}
                                            </li>
                                        ))}
                                        </ol>
                                    </li>)
                                    )
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export async function getStaticProps() {
    const menus = await getHeaderMenuJson();
    const projects = await getAllProjects()
    if (!menus || !projects) {
        return {
            notFound: true,
        }
    }
    return {
        props: { menus, projects },
    }
}
export default Projects;
