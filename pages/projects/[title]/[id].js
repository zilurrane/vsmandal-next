import React, { Fragment } from "react";
import JsonToHTML from "../../../components/JsonToHTML";
import {
  getAllProjects,
  getHeaderMenuJson,
  getProjectById,
} from "../../../shared/api";
import { contentJson } from '../../../shared/constant';

const Projects = ({ project }) => {
  return (
    <Fragment>
      <div className={`wpo-donation-page-area section-padding`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-12`}>
              <JsonToHTML json={contentJson} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const projects = await getAllProjects();
  const paths = projects.map((p) => ({
    params: { id: p.id.toString(), title: p.title },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const menus = await getHeaderMenuJson();
  const project = await getProjectById(params.id);
  if (!project || !menus) {
    return {
      notFound: true,
    };
  }
  return {
    props: { project, menus },
  };
}
export default Projects;
