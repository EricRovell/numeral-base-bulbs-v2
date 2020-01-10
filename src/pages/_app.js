import { StateProvider, initialState, reducer } from "components/StateProvider/Context";

import Header from "components/Header/Header";
import "style/global.css";

import style from "style/pages/app.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateProvider {...{ initialState, reducer }}>
      <div className={style.app}>
        <Header />
        <Component {...pageProps} />
      </div>
    </StateProvider>
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
