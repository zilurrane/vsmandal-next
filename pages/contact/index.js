import { Fragment } from "react";
import PageTitle from "../../components/PageTitle";
import Contact from "../../components/Contact";
import { getHeaderMenuJson } from "../../shared/api";

const ContactPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Contact Us"} pageSub={"Contact"} />
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
