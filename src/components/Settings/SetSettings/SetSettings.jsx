import ButtonIcon from "components/Settings/Controls/ButtonIcon/ButtonIcon";
import { SetSettingsIcon, ResetSettingsIcon } from "./Icons";
import style from "./set-settings.module.css";

const SetSettings = ({ state, defaultState, storageKey, dispatch, locale, validate = null, sideEffect = null }) => {
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
      <ButtonIcon
        title={locale.reset} 
        handleClick={resetSettings}>
          <ResetSettingsIcon />
      </ButtonIcon>
      <ButtonIcon
        title={locale.set}
        handleClick={saveUserSettings}>
          <SetSettingsIcon />
      </ButtonIcon>
    </div>
  );
};

export default SetSettings;
