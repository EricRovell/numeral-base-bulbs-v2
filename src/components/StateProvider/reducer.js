export default (state, action) => {
  switch (action.type) {

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
      
    case "addDigit":
      return {
        ...state,
        digits: (action.value === 1)
          ? [ 0, ...state.digits]
          : state.digits.slice(0, -1)
      }

    default:
      return state;
  }
};
