import { validate } from "./validate";

export default (state, action) => {
  switch (action.name) {

    // labels
    case "labelsUp":
    case "labelsDown":
      return {
        ...state,
        [action.name]: action.value
      };

    // representation
    case "mode": {
      return {
        ...state,
        skin: "default",
        mode: action.value || "symbol"
      };
    };

    case "skin": {
      return {
        ...state,
        skin: action.value || "default",
      };
    };

    // base
    case "baseIn":
    case "baseOut":
    case "digitsMin":
    case "digitsMax":
    case "digits":
      return {
        ...state,
        [action.name]: validate(action.name, action.value, state)
      };
    
    case "reset":
      return action.state;  

    default:
      return state;
  }
};
