import Article from "./Article";
import style from "./layout-article.css";

const LayoutArticle = ({ children }) => (
  <main className={style["layout-article"]}>
    <Article>
      {children}
    </Article>
  </main>
);

export default LayoutArticle;
