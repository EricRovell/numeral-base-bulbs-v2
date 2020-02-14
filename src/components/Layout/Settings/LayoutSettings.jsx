import style from "./layout-settings.css";

const LayoutSettings = ({ children }) => (
  <main className={style["layout-settings"]}>
    {children}
  </main>
);

export default LayoutSettings;
