import useUserSettingsReducer from "components/Settings/useUserSettings/useUserSettingsReducer";

import initialState from "../initialState";
import reducer from "../reducer";
import SetSettings from "components/Settings/SetSettings/SetSettings";

import Radio from "components/Settings/Controls/Radio";
import SettingsSection from "components/Settings/Section";

import { lang, theme } from "./data";

import selectStyle from "./select-style.module.css";


const SettingsGlobal = ({ langData }) => {

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
        langData={langData.settingsControls}
        dispatch={dispatch}
        storageKey={"SettingsGlobal"} />
      <SettingsSection name={langData.userPreferences.name}>
        <span>{langData.userPreferences.lang.label}</span>
        <div className={selectStyle["select"]}>
          <Radio
            data={langData.userPreferences.lang}
            value={state.lang}
            handleInputChange={handleInputChange} />
        </div>
        <span>{langData.userPreferences.theme.label}</span>
        <div className={selectStyle["select"]}>
          <Radio
            data={langData.userPreferences.theme}
            value={state.theme}
            handleInputChange={handleInputChange} />
        </div>
      </SettingsSection>
    </form>    
  );
};

export default SettingsGlobal;
