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

    default:
      return state;
  }
};
