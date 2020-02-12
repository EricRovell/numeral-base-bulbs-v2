import { useReducer } from "react";

import SetSettings from "./SetSettings/SetSettings";
import Labels from "./Labels/Labels";
import Base from "./Base/Base";
import Digits from "./Digits/Digits";
import Representation from "./Representation/Representation";

import defaultState from "../State/defaultState";
import validationReducer from "./reducerValidate";

import style from "./settings.css";


const SettingsSandbox = () => {

  const [ state, dispatch ] = useReducer(validationReducer, defaultState);

  const handleInputChange = ({ target }) => {
    console.log(target.name, target.value);

    dispatch({
      name: target.name,
      value: target.value 
    });
  };

  const saveUserSettings = event => {
    //event.preventDefault();
    localStorage.setItem(
      "SettingsSandbox",
      JSON.stringify(state)
    );
  };

  const resetSettings = event => {
    //event.preventDefault();
    localStorage.setItem(
      "SettingsSandbox",
      JSON.stringify(defaultState)
    );
  };

  return (    
    <form className={style.settings}>
      <SetSettings
        resetSettings={resetSettings}
        saveUserSettings={saveUserSettings} />
      <Digits
        digits={state.digits}
        digitsMin={state.digitsMin}
        digitsMax={state.digitsMax}
        handleInputChange={handleInputChange} />        
      <Base
        baseIn={state.baseIn}
        baseOut={state.baseOut}
        handleInputChange={handleInputChange} />
      <Representation
        mode={state.mode}
        skin={state.skin}
        handleInputChange={handleInputChange} />
      <Labels
        valueUp={state.labelsUp}
        valueDown={state.labelsDown}
        handleInputChange={handleInputChange} />    
    </form>    
  );
};

export default SettingsSandbox;
