import useUserSettingsReducer from "components/Settings/useUserSettings/useUserSettingsReducer";

import SetSettings from "components/Settings/SetSettings/SetSettings";
import Labels from "./Labels/Labels";
import Base from "./Base/Base";
import Digits from "./Digits/Digits";
import Representation from "./Representation/Representation";

import SettingsSection from "components/Settings/Section";

import defaultState from "../State/defaultState";
import validate from ".//validation/validation";

const SettingsSandbox = () => {

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
      <SettingsSection name={"Digits"}>
        <Digits
         digits={state.digits}
         digitsMin={state.digitsMin}
         digitsMax={state.digitsMax}
         handleInputChange={handleInputChange} />
      </SettingsSection>
      <SettingsSection name={"Base"}>
        <Base
          baseIn={state.baseIn}
          baseOut={state.baseOut}
          handleInputChange={handleInputChange} />
      </SettingsSection>       
      <SettingsSection name={"Representation"}>
        <Representation
          mode={state.mode}
          skin={state.skin}
          handleInputChange={handleInputChange} />
      </SettingsSection>
      <SettingsSection name={"Labels"}>
        <Labels
          valueUp={state.labelsUp}
          valueDown={state.labelsDown}
          handleInputChange={handleInputChange} />  
      </SettingsSection>      
    </form>    
  );
};

export default SettingsSandbox;
