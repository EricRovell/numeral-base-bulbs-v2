import { useEffect } from "react";
import { useRouter } from "next/router";

export default () => {

  const router = useRouter();

  useEffect(() => {
    const preferences = JSON.parse(
      localStorage.getItem("SettingsGlobal")
    );

    if (preferences) {
      router.replace("/[lang]/sandbox", `/${preferences.lang.toLowerCase()}/sandbox`)
    } else {
      router.replace("/", `/en/sandbox`)
    }
  }, []);

  return null;
};
