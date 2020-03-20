import useUserSettingsReducer from "components/Settings/useUserSettings/useUserSettingsReducer";

import SettingsSection from "components/Settings/Section";
import SetSettings from "components/Settings/SetSettings/SetSettings";

import Labels from "./Sections/Labels";
import Base from "./Sections/Base";
import Digits from "./Sections/Digits";
import Representation from "./Sections/Representation";

import defaultState from "../State/defaultState";
import validate from "./validation/validation";


const SettingsSandbox = ({ langData }) => {

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
        defaultState={defaultState}
        storageKey={"SettingsSandbox"}
        validate={validate}
        dispatch={dispatch} />
      <SettingsSection name={langData.digits.name}>
        <Digits
          langData={langData.digits.options}
          digits={state.digits}
          digitsMin={state.digitsMin}
          digitsMax={state.digitsMax}
          handleInputChange={handleInputChange} />
      </SettingsSection>
      <SettingsSection name={langData.base.name}>
        <Base
          langData={langData.base.options}
          baseIn={state.baseIn}
          baseOut={state.baseOut}
          handleInputChange={handleInputChange} />
      </SettingsSection>       
      <SettingsSection name={langData.representation.name}>
        <Representation
          langData={langData.representation.options}
          mode={state.mode}
          skin={state.skin}
          handleInputChange={handleInputChange} />
      </SettingsSection>
      <SettingsSection name={langData.labels.name}>
        <Labels
          langData={langData.labels}
          valueUp={state.labelsUp}
          valueDown={state.labelsDown}
          handleInputChange={handleInputChange} />  
      </SettingsSection>      
    </form>    
  );
};

export default SettingsSandbox;
