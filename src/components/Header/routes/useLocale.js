import { useState, useEffect } from "react";

export default function useLocale(lang) {

  const [ locale, setLocale ] = useState(null);

  useEffect(() => {
    const loadLocale = async () => {
      const locale = (await import(`../locale/header-locale-${lang}.js`)).default;
      setLocale(locale);
    };
    loadLocale();    
  }, [lang]);

  return locale;
};
