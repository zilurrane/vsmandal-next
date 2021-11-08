import React, { Fragment } from "react";
import CarouselComponent from "../../components/Carousel";
import JsonToContent from "../../components/JsonToContent";
import BlockQuote from "../../components/Quote/BlockQuote";
import {
  getAllEvents,
  getHeaderMenuJson,
  getEventByUrlSlug,
} from "../../shared/api";

const Events = ({ event }) => {
  const jsonData = JSON.parse(event.contentJson);
  return (
    <Fragment>
      <div className={`page-container`}>
        <div className={`container`}>
          <div className="row">
            <div className="col-md-12">
              <h2 className="page-title">
                {event.title}
              </h2>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-md-8 carousel-container`}>
              <CarouselComponent commaSeparatedSliderImages={event.sliderImage} />
            </div>
            <div className={`col-md-4 quote-container`}>
              <BlockQuote quote={event.quote} />
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
  const projects = await getAllEvents();
  const paths = projects.map((p) => ({
    params: { slug: p.urlSlug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const menus = await getHeaderMenuJson();
  const event = await getEventByUrlSlug(params.slug);
  if (!event || !menus) {
    return {
      notFound: true,
    };
  }
  return {
    props: { event, menus },
  };
}
export default Events;
