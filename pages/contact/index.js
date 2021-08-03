import { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Contact from "../../components/Contact";
import { getHeaderMenuJson } from "../../shared/api";

const ContactPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact"} />
      <Contact />
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

export default ContactPage;
