export default (state, action) => {
  switch (action.type) {

    // universal (careful)

    case "setStateProperty": 
      return {
        ...state,
        [action.property]: action.value
      };

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
        digits: (action.value === 1)
          ? [ 0, ...state.digits]
          : state.digits.slice(1)
      };

    case "mutateDigit":
      return {
        ...state,
        digits: state.digits.map((val, i) =>
          (i === action.index) ? action.value : val)
      };

    case "setDigits":
      return {
        ...state,
        digits: action.digits
      };

    // base

    case "setBase":
      return {
        ...state,
        [action.base]: action.value
      };

    // labels

    case "setLabel":
      return {
        ...state,
        [action.label]: action.value
      };

    default:
      return state;
  }
};
