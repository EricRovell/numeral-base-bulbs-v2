import MyApp from "components/App/App";
import "style/global.css";

export default ({ Component, pageProps }) => (
  <MyApp>
    <Component {...pageProps} />
  </MyApp>
);
