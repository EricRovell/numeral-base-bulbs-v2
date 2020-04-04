import { useState, useEffect } from "react";
import routesLocale from "./routes";

export default function useLocale(lang) {

  const [ routes, setRoutes ] = useState(null);

  useEffect(() => {
    const loadLocale = async () => {
      const locale = (await import(`components/Header/routes/routes-${lang}.js`)).default;
      setRoutes(routesLocale(locale));
    };
    loadLocale();    
  }, [lang]);

  return routes;
};
