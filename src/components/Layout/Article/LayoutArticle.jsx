import Navigation from "components/UI/Navigation/Navigation";
import Article from "./Article";

import contentsEN from "components/UI/Navigation/map-en";
import contentsRU from "components/UI/Navigation/map-ru";

import style from "./layout-article.module.css";

/* const contents = async ({ lang }) => {
  return await {
    "EN": import("components/UI/Navigation/map-en"),
    "RU": import("components/UI/Navigation/map-ru")
  }[lang];
}; */

const LayoutArticle = ({ children }) => {

  return (
    <main className={style["layout-article"]}>
      <Navigation items={contentsRU} />
      <Article>
        {children}
      </Article>
    </main>
  );
};

export default LayoutArticle;
