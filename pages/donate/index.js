import { Fragment } from "react";
import Donate from "../../components/Donate";
import PageTitle from "../../components/PageTitle";
import { getHeaderMenuJson } from "../../shared/api";

const DonatePage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Donate Now"} pageSub={"Donate"} />
      <Donate />
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

export default DonatePage;
