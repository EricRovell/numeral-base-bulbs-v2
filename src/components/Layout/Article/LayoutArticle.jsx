import style from "./layout-article.css";

const LayoutArticle = ({ children }) => (
  <main className={style["layout-article"]}>
    {children}
  </main>
);

export default LayoutArticle;
