import { useRouter } from "next/router";
import ExpressTab from "components/UI/ExpressTab/ExpressTab";

export default function ExpressHelp() {

  const router = useRouter();

  const routeToTutorial = () => {
    router.push(
      "/[lang]/tutorial/[...route]",
      `/${router.query.lang || "en"}/tutorial/${router.query.lang || "en"}/sandbox/about`
    );
  };

  return (
    <ExpressTab
      title={"Помощь"}
      handleClick={routeToTutorial}
    />
  );
};
