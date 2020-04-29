import defaultState from "./defaultState";
import reducerActionsSB from "./reducerActionsSB";

export default (state, action) => {
  switch (action.type) {

    // universal (careful)

    case "setStateProperty": 
      return {
        ...state,
        [action.property]: action.value
      };

    case "reset":
      return action.state || defaultState;

    // User Preferences

    case "setLanguage":
      return {
        ...state,
        [action.option]: action.language,
      };  

    case "setTheme":
      return {
        ...state,
        theme: action.theme,
      };


    // Digits
      
    case "addDigit":
      return {
        ...state,
        digits: reducerActionsSB.addDigit({
          action: action.action,
          ...state
        })
      };

    case "mutateDigit":
      return {
        ...state,
        digits: reducerActionsSB.mutateDigit({
          digits: state.digits,
          action: action.action,
          value: action.value,
          baseIn: state.baseIn,
          index: action.index
        })
      };

    case "setDigits":
      return {
        ...state,
        digits: action.digits
      };

    case "normalizeDigits":
      return {
        ...state,
        digits: state.digits.map(val =>
          (val > state.baseIn - 1) ? state.baseIn - 1 : val)
      };

    // base

    case "setBase":
      return {
        ...state,
        ...reducerActionsSB.incrementBase({
          state,
          base: action.base,
          action: action.action,
          value: action.value
        })
      };

    // labels

    case "switchLabel":
      return {
        ...state,
        [action.label]: reducerActionsSB.labelNextMode(state[action.label])
      };

    // mode / skin
    case "setMode": {
      return {
        ...state,
        skin: "default",
        mode: action.mode || "symbol"
      };
    }

    case "setSkin": {
      return {
        ...state,
        skin: action.skin || "default",
      };
    }

    /* case "binaryCheck": {
      return {
        ...state,
        mode: (state.mode !== "symbol") ? "symbol" : state.mode,
        skin: (state.mode !== "symbol") ? "default" : state.skin
      };
    } */

    default:
      return state;
  }
};
