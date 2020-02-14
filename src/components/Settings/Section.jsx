import style from "./section.css";

const SettingsSection = ({ children, name }) => (
  <div className={style.section}>
    <header>{name}</header>
    {children}
  </div>
);

export default SettingsSection;
