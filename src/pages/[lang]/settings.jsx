import useLocale from "components/Hooks/useLocale";
import { useState } from "react";

import dynamic from "next/dynamic";

import Tabs from "components/Tabs/Tabs";
import LayoutSettings from "components/Layout/Settings/LayoutSettings";

import style from "style/pages/settings.module.css";
import styleTabs from "components/Tabs/tabs-settings.module.css";


const SettingsSections = ({ section, locale }) => {
  const Section = ({
    "sandbox": dynamic(() => import("components/Mode/Sandbox/Settings/Settings")),
    "globals": dynamic(() => import("components/StateProvider/SettingsGlobal/SettingsGlobal")),
    "challenge": dynamic(() => import("components/Loader/Loading/Loading")),
  }[section]);
  
  return (
    <Section locale={locale} />
  );
};

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
