import { useRouter } from "next/router";
import ExpressTab from "components/UI/ExpressTab/ExpressTab";

export default function ExpressHelp({ locale }) {

  const router = useRouter();

  const routeToTutorial = () => {
    router.push(
      "/[lang]/tutorial/[...route]",
      `/${router.query.lang || "en"}/tutorial/${router.query.lang || "en"}/sandbox/about`
    );
  };

  return (
    <ExpressTab
      label={locale.label}
      title={locale.title}
      handleClick={routeToTutorial}
    />
  );
};
