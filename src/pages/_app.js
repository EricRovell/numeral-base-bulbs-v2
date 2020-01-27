import { StateProvider, initialState, reducer } from "components/StateProvider/Context";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "components/Header/Header";
import "style/global.css";

import style from "style/pages/app.css";

const Head = () => (
  <Helmet>
    <html lang="EN" theme="dark" />
    <title>Numeral Base Bulbs 2</title>
  </Helmet>
);

const MyApp = ({ Component, pageProps }) => {

  return (
    <HelmetProvider>
      <StateProvider {...{ initialState, reducer }}>
        <div className={style.app}>
          <Head />
          <Header />
          <Component {...pageProps} />
        </div>
      </StateProvider>
    </HelmetProvider>
  )
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
