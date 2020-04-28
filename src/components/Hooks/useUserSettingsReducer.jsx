import { useState, useEffect, useReducer } from "react";

export default function useUserSettingsReducer({ defaultState, itemKey }) {
  // item: localStorage item key, string
  const [ isLoading, setIsLoading ] = useState(true);
  const [ state, dispatch ] = useReducer((state, action) => {
    switch (action.name) {
      case "reset":
        return action.state;

      case "labelsUpShow":
      case "labelsDownShow":
        return {
          ...state,
          [action.name]: (action.value === "true") ? false : true
        }
    
      default:
        return {
          ...state,
          [action.name]: action.value
        };
    }
  }, defaultState);

  useEffect(() => {
    const storageState = JSON.parse(
      localStorage.getItem(itemKey)
    );

    if (storageState) {
      dispatch({
        name: "reset",
        state: { ...defaultState, ...storageState }
      });
    }

    setIsLoading(false);
  }, []);

  return [
    state,
    dispatch,
    isLoading
  ];
}
