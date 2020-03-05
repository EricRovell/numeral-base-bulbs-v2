import { useEffect } from "react";
import Router from "next/router";

export default () => {

  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/tutorial") {
      Router.push("/tutorial/ru/welcome");
    }
  }, []);

  return null;
};
