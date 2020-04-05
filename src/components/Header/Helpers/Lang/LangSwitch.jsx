import { useCallback } from "react";
import { useRouter } from "next/router";

import LangIcon from "./SVGIcon";
import Radio from "./Radio";
import style from "./lang-switch.module.css";

const data = {
  name: "lang",
  options: {
    EN: "English",
    RU: "Русский"
  }
};

const LangSwitch = ({ value, dispatch, locale }) => {

  const router = useRouter();
  const regex = /\/en\/|\/ru\//g;

  const handleLocaleChange = useCallback(
    (event) => {
      const value = event.target.value;
      dispatch({ name: "lang", value });
      router.push(router.pathname, router.asPath.replace(regex, `/${value.toLowerCase()}/`));      
    },
    [router, value]
  ); 

  return (
    <label className={style.switch} title={locale}>
      <LangIcon />
      <input type="checkbox" defaultChecked={true} />
      <div>
        <Radio
          data={data}
          value={value}
          handleInputChange={handleLocaleChange} />
      </div>
    </label>
  );
};

export default LangSwitch;
