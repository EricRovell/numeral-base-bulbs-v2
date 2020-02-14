import ButtonWithMessage from "components/Settings/Controls/ButtonWithMessage/ButtonWithMessage";
import style from "./set-settings.css";

const SetSettings = ({ state, defaultState, storageKey, dispatch }) => {

  console.log(storageKey);

  const saveUserSettings = () => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(state)
    );
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
