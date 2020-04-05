import { useStateContext } from "components/StateProvider/Context";

import LangSwitch from "./Lang/LangSwitch";
import ThemeSwitch from "./Theme/ThemeSwitch";
import GithubLink from "./GithubLink";

import style from "./header-helpers.module.css";

export default function Helpers({ locale }) {

  const [ { lang, theme }, dispatch ] = useStateContext();

  return (
    <div className={style["header-switch"]}>
      <ThemeSwitch
        locale={locale.theme}
        value={theme}
        dispatch={dispatch} />
      <LangSwitch
        locale={locale.lang}
        value={lang}
        dispatch={dispatch} />
      <GithubLink />      
    </div>
  );
};
