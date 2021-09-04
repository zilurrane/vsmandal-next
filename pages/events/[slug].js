import React, { Fragment } from "react";
import CarouselComponent from "../../components/Carousel";
import JsonToHTML from "../../components/JsonToHTML";
import JsonToTabs from "../../components/JsonToTabs";
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
              {
                jsonData.map((item, index) => {
                  if (item.type === "richtexteditor") {
                    return <JsonToHTML key={index} json={item.tokens} />
                  } else if (item.type === "tabs") {
                    return <JsonToTabs key={index} tabs={item.tabs} />
                  } else if (item.type === "content1image1") {
                    return <JsonToHTML key={index} json={item.tokens} />
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
