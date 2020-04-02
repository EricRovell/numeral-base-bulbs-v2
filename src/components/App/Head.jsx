import { Helmet } from "react-helmet-async";
import { useStateContext } from "components/StateProvider/Context";

export default function Head() {

  const [ { lang, theme } ] = useStateContext();
  
  return (
    <Helmet>
      <html lang={lang || "EN"} theme={theme || "dark"} />
      <title>Numeral Base Bulbs 2</title>
    </Helmet>
  );
};