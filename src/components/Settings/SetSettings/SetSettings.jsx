import ButtonWithMessage from "components/Settings/Controls/ButtonWithMessage/ButtonWithMessage";
import style from "./set-settings.module.css";

const SetSettings = ({ state, defaultState, storageKey, dispatch, validate = null, sideEffect = null }) => {
  // state -> current settings state
  // defaultState -> for reset
  // validate -> validation function, if not presentt -> pass w/o it
  // dispatch -> state dispatcher
  // sideEffect -> functions to run when user set/reset state 

  const saveUserSettings = () => {
    // if a validation function not passed
    const validState = (validate !== null)
      ? validate(state)
      : state;

    if (sideEffect !== null) {
      sideEffect(validState);
    }

    localStorage.setItem(
      storageKey,
      JSON.stringify(validState)
    );
    
    dispatch({ 
      name: "reset",
      state: validState
    });
  };

  const resetSettings = () => {
    if (sideEffect !== null) {
      sideEffect();
    }

    localStorage.setItem(
      storageKey,
      JSON.stringify(defaultState)
    );

    dispatch({ 
      name: "reset",
      state: defaultState
    });
  };

  return (
    <div className={style["set-settings"]}>
      <ButtonWithMessage
        title={"Reset to defaults"}
        action={"Done!"}
        handleClick={resetSettings} />
      <ButtonWithMessage
        title={"Save user settings"}
        action={"Saved successfully!"}
        handleClick={saveUserSettings} />    
    </div>
  );
};

export default SetSettings;
