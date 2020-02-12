import { useState, useEffect } from "react";

export default function useUserSettings(item) {
  // item: localStorage item key, string
  const [ isLoading, setIsLoading ] = useState(true);
  const [ userSettings, setUserSettings ] = useState(null);

  useEffect(() => {
    setUserSettings(JSON.parse(
      localStorage.getItem(item)
    ));
    setIsLoading(false);
  }, []);

  return [ isLoading, userSettings ];
}
