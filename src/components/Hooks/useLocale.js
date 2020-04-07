import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useLocale(path) {
  // localization files are located in "locale/" path
  // path parameter should contain path-part inside that folder
  // up until lang parameter
  //  Example: `/locale/${path}-${lang}.js`

  const { query: { lang }} = useRouter();
  const [ locale, setLocale ] = useState(null);
  const [ loadingLocale, setLoadingLocale ] = useState(true);  

  useEffect(() => {
    const loadLocale = async () => {
      const localeFileData = (await import(`locale/${path}-${lang}.js`)).default;
      setLocale(localeFileData);
      setLoadingLocale(false);
    };
    loadLocale();
  }, [lang]);

  return [ locale, loadingLocale, lang ];
};
