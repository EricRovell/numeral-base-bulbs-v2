import useUserSettingsReducer from "components/Hooks/useUserSettingsReducer";

import SettingsSection from "components/Settings/Section";
import SetSettings from "components/Settings/SetSettings/SetSettings";

import Labels from "./Sections/Labels";
import Base from "./Sections/Base";
import Digits from "./Sections/Digits";
import Representation from "./Sections/Representation";

import defaultState from "../State/defaultState";
import validate from "./validation/validation";


const SettingsSandbox = ({ locale }) => {

  const [ state, dispatch, isLoading ] = useUserSettingsReducer({
    defaultState,
    itemKey: "SettingsSandbox"
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
        locale={locale.settingsControls}
        defaultState={defaultState}
        storageKey={"SettingsSandbox"}
        validate={validate}
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

export default SettingsSandbox;
