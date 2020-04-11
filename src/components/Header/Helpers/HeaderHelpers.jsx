import { useStateContext } from "components/StateProvider/Context";
import { useEffect } from "react";

import LangSwitch from "./Lang/LangSwitch";
import ThemeSwitch from "./Theme/ThemeSwitch";

import style from "./header-helpers.module.css";

export default function Helpers({ locale }) {

  const [ state, dispatch ] = useStateContext();

  useEffect(() => {
    localStorage.setItem(
      "SettingsGlobal",
      JSON.stringify(state)
    );
  }, [state]);

  return (
    <div className={style["header-switch"]}>
      <ThemeSwitch
        locale={locale.theme}
        value={state.theme}
        dispatch={dispatch} />
      <LangSwitch
        locale={locale.lang}
        value={state.lang}
        dispatch={dispatch} />
    </div>
  );
};
