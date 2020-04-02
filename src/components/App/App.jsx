import Providers from "components/App/Providers";

import Head from "components/App/Head";
import Header from "components/Header/Header";
import Modal from "components/UI/Modal/Modal";

import style from "style/pages/app.module.css";

const MyApp = ({ children }) => (
  <Providers>
    <div className={style.app}>
      <Head />
      <Header />
      {children}
      <Modal />
    </div>
  </Providers>  
);

export default MyApp;

/*
  global styles at: "style/global.css"
  should be imported at nextJS custom app component: _app.jsx
*/
