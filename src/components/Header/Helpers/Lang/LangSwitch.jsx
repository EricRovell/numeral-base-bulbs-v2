import useLocaleSwitch from "components/Hooks/useLocaleSwitch";

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

  const handleLocaleChange = useLocaleSwitch(dispatch);

  return (
    <label className={style.switch} title={locale}>
      <LangIcon />
      <span>{value}</span>
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
