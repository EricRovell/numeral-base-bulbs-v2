import ThemeIcon from "./SVGIcon";
import style from "./theme-switch.module.css";

const ThemeSwitch = ({ value, dispatch, locale }) => {

  const handleSwitch = () => {
    dispatch({
      name: "theme",
      value: (value === "dark")
        ? "light"
        : "dark"
    });
  };
  
  return (
    <div
      title={locale}
      className={style.switch}
      onClick={handleSwitch}>
        <ThemeIcon />
    </div>
  );
};

export default ThemeSwitch;
