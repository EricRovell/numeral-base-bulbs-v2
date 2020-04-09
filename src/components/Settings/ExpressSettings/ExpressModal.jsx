import useLocale from "components/Hooks/useLocale";
import useUserSettingsReducer from "components/Settings/useUserSettings/useUserSettingsReducer";

import SettingsSection from "components/Settings/Section";
import SetSettings from "components/Settings/SetSettings/SetSettings";

import Labels from "components/Mode/Sandbox/Settings/Sections/Labels";
import Base from "components/Mode/Sandbox/Settings/Sections/Base";
import Digits from "components/Mode/Sandbox/Settings/Sections/Digits";
import Representation from "components/Mode/Sandbox/Settings/Sections/Representation";

import defaultState from "components/Mode/Sandbox/State/defaultState";
import validate from "components/Mode/Sandbox/Settings/validation/validation";

import style from "./modal-form.module.css";
import { useEffect } from "react";

const ExpressModal = ({ stateSB, dispatchSB }) => {

  const [ locale ] = useLocale("settings/express-settings.js");
  
  const [ state, dispatch, isLoading ] = useUserSettingsReducer({
    defaultState,
    itemKey: "SettingsSandbox"
  });

  useEffect(() => {
    // updating the settings state
    // according to the latest Sandbox state
    dispatch({
      name: "reset",
      state: stateSB
    });
  }, [ stateSB ]);

  const handleInputChange = ({ target }) => {
    dispatch({
      name: target.name,
      value: target.value
    });
  };

  const resetSandBoxState = state => {
    dispatchSB({
      type: "reset",
      state
    });
  };

  return !isLoading && locale && (    
    <form className={style["express-form"]}>
      <SetSettings
        state={state}
        locale={locale.settingsControls}
        defaultState={defaultState}
        storageKey={"SettingsSandbox"}
        validate={validate}
        sideEffect={resetSandBoxState}
        dispatch={dispatch} />
      <SettingsSection name={locale.digits.name}>
        <Digits
          locale={locale.digits.options}
          digits={state.digits}
          digitsMin={state.digitsMin}
          digitsMax={state.digitsMax}
          handleInputChange={handleInputChange} />
      </SettingsSection>
      <SettingsSection name={locale.base.name}>
        <Base
          locale={locale.base.options}
          baseIn={state.baseIn}
          baseOut={state.baseOut}
          handleInputChange={handleInputChange} />
      </SettingsSection>       
      <SettingsSection name={locale.representation.name}>
        <Representation
          locale={locale.representation.options}
          mode={state.mode}
          skin={state.skin}
          handleInputChange={handleInputChange} />
      </SettingsSection>
      <SettingsSection name={locale.labels.name}>
        <Labels
          locale={locale.labels}
          valueUp={state.labelsUp}
          valueDown={state.labelsDown}
          handleInputChange={handleInputChange} />  
      </SettingsSection>       
    </form>    
  );
};

export default ExpressModal;
