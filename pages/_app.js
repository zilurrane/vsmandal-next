import { NextSeo } from 'next-seo';
import '../styles/globals.scss'
import 'react-modal-video/scss/modal-video.scss';
import '../public/css/font-awesome.min.css';
import '../public/css/themify-icons.css';
import '../public/css/flaticon.css';

function MyApp({ Component, pageProps }) {

  return <>
    <NextSeo
      title="Vivekanand Seva Mandal"
      description="Vivekanand Seva Mandal is basically a group of young philanthropists involving themselves in a Rural Development Programs with a view of social development while pursuing their own academic/ professional activities."
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
