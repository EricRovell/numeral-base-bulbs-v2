import { useState, useEffect, useReducer } from "react";

export default function useUserSettingsReducer({ defaultState, reducer, itemKey }) {
  // item: localStorage item key, string
  const [ isLoading, setIsLoading ] = useState(true);
  const [ state, dispatch ] = useReducer(reducer, defaultState);

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
