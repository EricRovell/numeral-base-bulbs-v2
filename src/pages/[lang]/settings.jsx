import { useRouter } from "next/router";
import useLocale from "components/Hooks/useLocale";

import SettingsSections from "domain/Settings/SettingsSections";
import TabLink from "components/Settings/TabLink/TabLink";
import LayoutSettings from "components/Layout/Settings/LayoutSettings";

import style from "style/pages/settings.module.css";

export default function SettingsPage() {

  const [ locale ] = useLocale("settings/settings-app.js");

  const router = useRouter();
  const { query: { tab = "globals" }} = router;
  
  return locale && (
    <LayoutSettings className={style.settings}>
      <TabLink 
        data={locale.sections.options}
        className={style.tabs}
        linkClassName={style["tabs-link"]}
        activeLinkClassName={style["tabs-link-active"]} />
      <SettingsSections
        section={tab}
        locale={locale[tab]} />
    </LayoutSettings>
  );
};
