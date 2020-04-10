import { useStateContext } from "components/StateProvider/Context";
import useUserSettingsReducer from "components/Hooks/useUserSettingsReducer";
import useLocaleSwitch from "components/Hooks/useLocaleSwitch";

import initialState from "../initialState";
import reducer from "../reducer";
import SetSettings from "components/Settings/SetSettings/SetSettings";

import Radio from "components/Settings/Controls/Radio";
import SettingsSection from "components/Settings/Section";

import selectStyle from "./select-style.module.css";


const SettingsGlobal = ({ locale }) => {

  const [ {}, dispatchGlobal ] = useStateContext();
  const handleLocaleChange = useLocaleSwitch(dispatchGlobal);

  const sideEffect = state => {
    dispatchGlobal({
      name: "reset",
      state
    });
  };

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
    dispatchGlobal({
      name: target.name,
      value: target.value 
    });
  };

  return !isLoading && (
    <form>
      <SetSettings
        state={state}
        sideEffect={sideEffect}
        defaultState={initialState}
        locale={locale.settingsControls}
        dispatch={dispatch}
        storageKey={"SettingsGlobal"} />
      <SettingsSection name={locale.userPreferences.name}>
        <span>{locale.userPreferences.lang.label}</span>
        <div className={selectStyle["select"]}>
          <Radio
            data={locale.userPreferences.lang}
            value={state.lang}
            handleInputChange={handleLocaleChange} />
        </div>
        <span>{locale.userPreferences.theme.label}</span>
        <div className={selectStyle["select"]}>
          <Radio
            data={locale.userPreferences.theme}
            value={state.theme}
            handleInputChange={handleInputChange} />
        </div>
      </SettingsSection>
    </form>    
  );
};

export default SettingsGlobal;
