import React, { Fragment } from "react";
import About from "../components/about";
import BlogSection from "../components/BlogSection";
import ControlledCarousel from "../components/ControlledCarousel";
import CounterSection from "../components/counter";
import EventSection from "../components/event";
import Hero from "../components/hero";
import Mission from "../components/mission";
import WorldSection from "../components/world";
import { getHeaderMenuJson } from "../shared/api";

const HomePage = () => {
  const counterData = [
    {
      id: 1,
      data: [
        { count: 6200, title: "Donation" },
        { count: 80, title: "Fund Raised" },
        // { count: 245, title: 'Volunteers' },
        // { count: 605, title: 'Projects' },
      ],
    },
    {
      id: 2,
      data: [
        // { count: 6200, title: 'Donation' },
        // { count: 80, title: 'Fund Raised' },
        { count: 245, title: "Volunteers" },
        { count: 605, title: "Projects" },
      ],
    },
    {
      id: 3,
      data: [
        { count: 200, title: "Donation" },
        { count: 85, title: "Fund Raised" },
        { count: 350, title: "Volunteers" },
        { count: 75, title: "Projects" },
      ],
    },
  ];

  return (
    <Fragment>
      <ControlledCarousel
        variant="dark"
        items={[
          { id: 1, comp: <Hero /> },
          { id: 2, comp: <Hero /> },
          { id: 3, comp: <Hero /> },
        ]}
      />

      <ControlledCarousel
        items={
          counterData?.map((dataObj) => {
            return {
              id: dataObj.id,
              comp: <CounterSection data={dataObj.data} />,
            };
          })
          // [
          // {
          //   id: 1, comp: <CounterSection data={counterData.slide1} />,
          // },
          // {
          //   id: 2, comp: <CounterSection data={counterData.slide2} />,
          // },
          // {
          //   id: 3, comp: <CounterSection data={counterData.slide3} />,
          // },
          // ]
        }
      />

      <Mission />
      <EventSection />
      <About />
      <BlogSection />
      <WorldSection />
      {/* <Hero />
      <Mission />
      <About />
      <CaseSlide />
      <CounterSection />
      <TeamSection />
      <WorldSection />
      <EventSection />
      <CtaSection />
      <BlogSection /> */}
    </Fragment>
  );
};

export async function getStaticProps() {
  const data = await getHeaderMenuJson();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { menus: data },
  };
}

export default HomePage;
