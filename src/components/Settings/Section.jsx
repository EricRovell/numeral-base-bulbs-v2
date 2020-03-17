import style from "./section.module.css";

const SettingsSection = ({ children, name }) => (
  <div className={style.section}>
    <header>{name}</header>
    <div>
      {children}
    </div>
  </div>
);

export default SettingsSection;
