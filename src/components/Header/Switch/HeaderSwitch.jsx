import { useStateContext } from "components/StateProvider/Context";

import LangSwitch from "./Lang/LangSwitch";
import ThemeSwitch from "./Theme/ThemeSwitch";

import style from "./header-switch.module.css";

const HeaderSwitch = () => {

  const [ { lang, theme }, dispatch ] = useStateContext();

  return (
    <div className={style["header-switch"]}>
      <ThemeSwitch
        value={theme}
        dispatch={dispatch} />
      <LangSwitch
        value={lang}
        dispatch={dispatch} />      
    </div>
  );
};

export default HeaderSwitch;
