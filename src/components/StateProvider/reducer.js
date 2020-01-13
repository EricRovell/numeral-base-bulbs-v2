export default (state, action) => {
  switch (action.type) {

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
          : state.digits.slice(0, -1)
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


    default:
      return state;
  }
};
