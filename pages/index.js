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
  return (
    <Fragment>
      <ControlledCarousel
        items={[
          { id: 1, comp: <Hero />, caption: 123 },
          { id: 2, comp: <Hero />, caption: 456 },
          { id: 3, comp: <Hero />, caption: 789 },
        ]}
      />
      <Hero />
      <CounterSection />
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
