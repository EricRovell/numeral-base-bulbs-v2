import style from "./article.module.css";

const Article = ({ children }) => (
  <article className={style.article}>
    {children}
  </article>
);

export default Article;
