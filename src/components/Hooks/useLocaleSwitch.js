import { useCallback } from "react";
import { useRouter } from "next/router";

export default function useLocaleSwitch(dispatch) {

  const router = useRouter();
  const regex = /\/en\/|\/ru\//g;

  const handleLocaleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name !== "lang") return;
      if (dispatch) {
        dispatch({ name: "lang", value });
      }
      router.push(router.pathname, router.asPath.replace(regex, `/${value.toLowerCase()}/`));      
    },
    [ router ]
  );

  return handleLocaleChange;
};