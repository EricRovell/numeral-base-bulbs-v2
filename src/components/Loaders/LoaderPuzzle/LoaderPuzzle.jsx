import style from "./loader-puzzle.module.css";

const Loader = () => (
  <aside className={style["loader-wrapper"]}>
    <div className={style.loader}>    
      <span />
      <span />
      <span />          
    </div>
  </aside>
);

export default Loader;
