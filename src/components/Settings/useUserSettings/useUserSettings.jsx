import { useState, useEffect } from "react";

export default function useUserSettings(state, item) {
  // item: localStorage item key, string
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
