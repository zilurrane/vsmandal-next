import React, { Fragment } from "react";
import Hero from "../components/hero";
import Mission from "../components/mission";
import About from "../components/about";
import CaseSlide from "../components/case";
import CounterSection from "../components/counter";
import TeamSection from "../components/team";
import EventSection from "../components/event";
import CtaSection from "../components/cta";
import WorldSection from "../components/world";
import BlogSection from "../components/BlogSection";
import { getHeaderMenuJson } from "../shared/api";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Mission />
      <About />
      <CaseSlide />
      <CounterSection />
      <TeamSection />
      <WorldSection />
      <EventSection />
      <CtaSection />
      <BlogSection />
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
