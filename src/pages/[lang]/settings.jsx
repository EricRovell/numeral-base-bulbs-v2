import useLocale from "components/Hooks/useLocale";
import { useState } from "react";

import SettingsSections from "domain/Settings/SettingsSections";
import Tabs from "components/Tabs/Tabs";
import LayoutSettings from "components/Layout/Settings/LayoutSettings";

import style from "style/pages/settings.module.css";
import styleTabs from "components/Tabs/tabs-settings.module.css";

export default function SettingsPage() {

  const [ locale ] = useLocale("settings/settings-app.js");
  const [ section, setSection ] = useState("globals");
  
  return locale && (
    <LayoutSettings className={style.settings}>
      <Tabs
        data={locale.sections}
        value={section}
        setTab={setSection}
        style={styleTabs["tabs-settings"]}
        lang={"EN"} />
      <SettingsSections
        section={section}
        locale={locale[section]} />
    </LayoutSettings>
  );
};
