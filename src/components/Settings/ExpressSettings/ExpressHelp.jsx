import { useRouter } from "next/router";
import ExpressTab from "components/UI/ExpressTab/ExpressTab";

export default function ExpressHelp({ locale }) {

  const router = useRouter();

  const routeTomanual = () => {
    router.push(
      "/[lang]/manual/[...route]",
      `/${router.query.lang || "en"}/manual/${router.query.lang || "en"}/sandbox/about`
    );
  };

  return (
    <ExpressTab
      label={locale.label}
      title={locale.title}
      handleClick={routeTomanual}
    />
  );
};
