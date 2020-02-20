import Article from "./Article";
import style from "./layout-article.module.css";

const LayoutArticle = ({ children }) => (
  <main className={style["layout-article"]}>
    <Article>
      {children}
    </Article>
  </main>
);

export default LayoutArticle;
