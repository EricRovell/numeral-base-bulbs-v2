import { useState, useEffect } from "react";

export default function useUserSettings(state, item) {
  /**
    * Return custom state from localStrorage if present, overriding the default state
    * @param {object} state Default state
    * @param {string} item  Local Storage key to get custom settings
    * 
    * @return {object} Array with combined state and loading indicator
  */
  const [ isLoading, setIsLoading ] = useState(true);
  const [ storageState, setStorageState ] = useState(null);

  useEffect(() => {
    setStorageState(JSON.parse(
      localStorage.getItem(item)
    ));

    setIsLoading(false);
  }, []);

  return [ { ...state, ...storageState }, isLoading ]
}
