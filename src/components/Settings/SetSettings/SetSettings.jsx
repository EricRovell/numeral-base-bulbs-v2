import ButtonWithMessage from "components/Settings/Controls/ButtonWithMessage/ButtonWithMessage";
import style from "./set-settings.module.css";

const SetSettings = ({ state, defaultState, validate, storageKey, dispatch }) => {

  const saveUserSettings = () => {
    // if a validation function not passed
    const validState = (typeof validate !== "undefined")
      ? validate(state)
      : state;

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
