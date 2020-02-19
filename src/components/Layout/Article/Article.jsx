import style from "./article.css";

const Article = ({ children }) => (
  <article className={style.article}>
    {children}
  </article>
);

export default Article;
