import style from "./layout-main.module.css";

const LayoutMain = ({ children }) => (
  <main className={style["layout-main"]}>
    {children}
  </main>
);

export default LayoutMain;
