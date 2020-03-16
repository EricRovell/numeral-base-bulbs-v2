import useUserSettingsReducer from "components/Settings/useUserSettings/useUserSettingsReducer";

import initialState from "../initialState";
import reducer from "../reducer";
import SetSettings from "components/Settings/SetSettings/SetSettings";

import Radio from "components/Settings/Controls/Radio";
import SettingsSection from "components/Settings/Section";

import { lang, theme } from "./data";

import selectStyle from "./select-style.module.css";


const SettingsGlobal = () => {

  const [ state, dispatch, isLoading ] = useUserSettingsReducer({
    defaultState: initialState,
    reducer,
    itemKey: "SettingsGlobal"
  });

  const handleInputChange = ({ target }) => {
    dispatch({
      name: target.name,
      value: target.value 
    });
  };

  return !isLoading && (    
    <form>
      <SetSettings
        state={state}
        defaultState={initialState}
        dispatch={dispatch}
        storageKey={"SettingsGlobal"} />
      <SettingsSection name="User Preferences">
        <span>{lang.label["EN"]}</span>
        <div className={selectStyle["select"]}>
          <Radio
            data={lang}
            value={state.lang}
            handleInputChange={handleInputChange} />
        </div>
        <span>{theme.label["EN"]}</span>
        <div className={selectStyle["select"]}>
          <Radio
            data={theme}
            value={state.theme}
            handleInputChange={handleInputChange} />
        </div>
      </SettingsSection>
    </form>    
  );
};

export default SettingsGlobal;
