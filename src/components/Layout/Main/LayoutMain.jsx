import style from "./layout-main.css";

const LayoutMain = ({ children }) => (
  <main className={style["layout-main"]}>
    {children}
  </main>
);

export default LayoutMain;
