import { NextSeo } from "next-seo";
import "react-modal-video/scss/modal-video.scss";
import Footer from "../components/footer";
import Header from "../components/header";
import useWindowSize from "../helpers/hook";
import "../public/css/flaticon.css";
import "../public/css/font-awesome.min.css";
import "../public/css/themify-icons.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const { menus } = pageProps;

  const { width } = useWindowSize();

  // temporary block for mobile screens
  if (width < 1050)
    return (
      <p
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        Please visit the site using desktop
      </p>
    );

  return (
    <>
      <NextSeo
        title="Vivekanand Seva Mandal"
        description="Vivekanand Seva Mandal is basically a group of young philanthropists involving themselves in a Rural Development Programs with a view of social development while pursuing their own academic/ professional activities."
      />
      <Header menus={menus} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
