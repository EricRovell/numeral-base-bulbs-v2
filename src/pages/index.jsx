import { useStateContext } from "components/StateProvider/Context";
import { useEffect } from "react";
import { useRouter } from "next/router";

import LoaderPuzzle from "components/Loaders/LoaderPuzzle/LoaderPuzzle";

export default () => {

  const router = useRouter();
  const [ _, dispatch ] = useStateContext();

  useEffect(() => {
    // determine if this is the new user
    const firstTime = localStorage.getItem("guest");
    const preferences = JSON.parse(
      localStorage.getItem("SettingsGlobal")
    );

    if (!!firstTime) {
      router.push("/[lang]/sandbox", `/${preferences.lang.toLowerCase() || "en"}/sandbox`);
      return;
    }

    // trying to get user preferences: language
    let preferedLanguage = navigator.language.slice(0, 2);
    if (!["en", "ru"].some(lang => lang === preferedLanguage)) {
      // fallback language
      preferedLanguage = "en";
    }

    // trying to get user preferences: theme
    const theme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: light").matches)
        ? "light"
        : "dark";

    dispatch({
      name: "user-preferences",
      lang: preferedLanguage.toUpperCase(),
      theme
    });

    localStorage.setItem("guest", 1);
    router.push("/[lang]/welcome", `/${preferedLanguage}/welcome`);

  }, []);

  return <LoaderPuzzle />;
};
