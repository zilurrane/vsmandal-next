import React, { Fragment } from "react";
import CarouselComponent from "../../components/Carousel";
import JsonToContent from "../../components/JsonToContent";
import BlockQuote from "../../components/Quote/BlockQuote";
import {
  getAllProjects,
  getHeaderMenuJson,
  getProjectByUrlSlug,
} from "../../shared/api";

const Projects = ({ project }) => {
  const jsonData = JSON.parse(project.contentJson);
  return (
    <Fragment>
      <div className={`page-container`}>
        <div className={`container`}>
          <div className="row">
            <div className="col-md-12">
              <h2 className="page-title">
                {project.title}
              </h2>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-md-8 carousel-container`}>
              <CarouselComponent commaSeparatedSliderImages={project.sliderImage} />
            </div>
            <div className={`col-md-4 quote-container`}>
              <BlockQuote quote={project.quote} />
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-md-12 content-container`}>
              <JsonToContent jsonData={jsonData} />
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
