import initialState from "./initialState";

export default (state, action) => {
  switch (action.name) {

    case "lang":
    case "theme": 
      return {
        ...state,
        [action.name]: action.value
      };

    case "user-preferences":
      return {
        ...state,
        lang: action.lang,
        theme: action.theme
      }

    case "reset":
      return action.state || initialState;

    default:
      return state;
  }
};
