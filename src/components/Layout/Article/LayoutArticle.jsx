import Navigation from "components/UI/Navigation/Navigation";
import Article from "./Article";

import style from "./layout-article.module.css";

const LayoutArticle = ({ children, contents }) => (
  <main className={style["layout-article"]}>
    <Navigation items={contents} />
    <Article>
      {children}
    </Article>
  </main>
);

export default LayoutArticle;
