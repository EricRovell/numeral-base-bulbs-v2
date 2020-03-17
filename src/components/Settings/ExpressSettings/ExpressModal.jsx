import useUserSettingsReducer from "components/Settings/useUserSettings/useUserSettingsReducer";

import SetSettings from "components/Settings/SetSettings/SetSettings";

import Labels from "components/Mode/Sandbox/Settings/Labels/Labels";
import Base from "components/Mode/Sandbox/Settings/Base/Base";
import Digits from "components/Mode/Sandbox/Settings/Digits/Digits";
import Representation from "components/Mode/Sandbox/Settings/Representation/Representation";

import defaultState from "components/Mode/Sandbox/State/defaultState";
import validate from "components/Mode/Sandbox/Settings/validation/validation";

import style from "./modal-form.module.css";
import sectionStyle from "./section.module.css";

const Section = ({ children, name }) => (
  <div className={sectionStyle.section}>
    <header>{name}</header>
    {children}
  </div>
);

const ExpressModal = ({ dispatchSB }) => {

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

  const resetSandBoxState = state => {
    dispatchSB({
      type: "reset",
      state
    });
  };

  return !isLoading && (    
    <form className={style["express-form"]}>
      <SetSettings
        state={state}
        defaultState={defaultState}
        storageKey={"SettingsSandbox"}
        validate={validate}
        sideEffect={resetSandBoxState}
        dispatch={dispatch} />
      <Section name={"Digits"}>
        <Digits
          digits={state.digits}
          digitsMin={state.digitsMin}
          digitsMax={state.digitsMax}
          handleInputChange={handleInputChange} />
      </Section>
      <Section name={"Base/Radix"}>
        <Base
          baseIn={state.baseIn}
          baseOut={state.baseOut}
          handleInputChange={handleInputChange} />
      </Section>      
      <Section name={"Representation"}>
        <Representation
          mode={state.mode}
          skin={state.skin}
          handleInputChange={handleInputChange} />
      </Section>
      <Section name={"Labels"}>
        <Labels
          valueUp={state.labelsUp}
          valueDown={state.labelsDown}
          handleInputChange={handleInputChange} /> 
      </Section>       
    </form>    
  );
};

export default ExpressModal;
