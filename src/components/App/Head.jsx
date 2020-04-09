import { useEffect } from "react";
import { useStateContext } from "components/StateProvider/Context";
import { Helmet } from "react-helmet-async";

export default function Head() {

  const [ state, dispatch ] = useStateContext();

  useEffect(() => {
    const preferences = JSON.parse(
      localStorage.getItem("SettingsGlobal")
    );

    if (preferences) {
      dispatch({ name: "reset", state: preferences });
    }
  }, []);
  
  return (
    <Helmet>
      <html lang={state.lang || "EN"} theme={state.theme || "dark"} />
      <title>Numeral Base Bulbs 2</title>
    </Helmet>
  );
}
