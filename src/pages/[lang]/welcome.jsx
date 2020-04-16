import useLocale from "components/Hooks/useLocale";

import Link from "next/link";

import LoaderBrick from "components/Loaders/LoaderBrick/LoaderBrick";
import Helpers from "components/Header/Helpers/HeaderHelpers";

import style from "style/pages/welcome.module.css";

export default function Welcome() {
  
  const [ locale ] = useLocale("welcome-page.js");

  return locale && (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Helpers locale={locale.helpers}  />
        <LoaderBrick />
        <h1>{locale.title}</h1>
        <p>{locale.warning}</p>
        <p>{locale.description}</p>
        <div>
          <Link href={locale.links.sandbox.href} as={locale.links.sandbox.as}>
            <a title={locale.links.sandbox.title}>
              {locale.links.sandbox.label}
            </a>
          </Link>
          <Link href={locale.links.tutorial.href} as={locale.links.tutorial.as}>
            <a title={locale.links.tutorial.title}>
              {locale.links.tutorial.label}
            </a>
          </Link>          
        </div>
      </div>
    </div>
  );
}
