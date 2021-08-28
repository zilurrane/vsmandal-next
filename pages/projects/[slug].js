import React, { Fragment } from "react";
import JsonToHTML from "../../components/JsonToHTML";
import {
  getAllProjects,
  getHeaderMenuJson,
  getProjectByUrlSlug,
} from "../../shared/api";
import { contentJson } from '../../shared/constant';

const Projects = ({ project }) => {
  const jsonData = JSON.parse(project.contentJson);
  return (
    <Fragment>
      <div className={`wpo-donation-page-area section-padding`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-md-12`}>
              {
                jsonData.map((item, index) => {
                  if (item.type === "richtexteditor") {
                    return <JsonToHTML key={index} json={item.tokens} />
                  } else if (item.type === "tabs") {
                    return <div key={index}>Tabs Component Preview</div>
                  } else {
                    return <div key={index}>Unhandled Component Preview</div>
                  }
                })
              }
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
    params: { slug: p.urlSlug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const menus = await getHeaderMenuJson();
  const project = await getProjectByUrlSlug(params.slug);
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
