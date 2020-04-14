import useLocaleSwitch from "components/Hooks/useLocaleSwitch";

import Select from "./Select";
import style from "./lang-switch.module.css";

const data = {
  name: "lang",
  options: {
    EN: "English",
    RU: "Русский"
  }
};

const LangSwitch = ({ value, dispatch, locale }) => {

  const handleLocaleChange = useLocaleSwitch(dispatch);

  return (
    <Select
      styles={style["lang-select"]}
      label={locale}
      options={data.options}
      name={data.name}
      value={value}
      handleInputChange={handleLocaleChange}
    />
  );
};

export default LangSwitch;
