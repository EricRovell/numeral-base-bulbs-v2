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
      router.push("/[lang]/sandbox", `/en/sandbox`)
    }
  }, []);

  return null;
};
