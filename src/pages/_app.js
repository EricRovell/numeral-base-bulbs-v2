import { StateProvider, initialState, reducer } from "components/StateProvider/Context";
import ModuleProvider from "components/UI/Modal/context";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { useStateContext } from "components/StateProvider/Context";

import Header from "components/Header/Header";
import Modal from "components/UI/Modal/Modal";
import "style/global.css";

import style from "style/pages/app.module.css";

const Head = () => {

  const [ { lang, theme } ] = useStateContext();
  
  return (
    <Helmet>
      <html lang={lang || "EN"} theme={theme || "dark"} />
      <title>Numeral Base Bulbs 2</title>
    </Helmet>
  );
};

const MyApp = ({ Component, pageProps }) => {

  return (
    <HelmetProvider>
      <StateProvider {...{ initialState, reducer }}>
        <ModuleProvider>
          <div className={style.app}>
            <Head />
            <Header />
            <Component {...pageProps} />
            <Modal />
          </div>
        </ModuleProvider>
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
