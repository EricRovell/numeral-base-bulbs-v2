import { useState } from "react";

import dynamic from "next/dynamic";

import Tabs from "components/Tabs/Tabs";
import LayoutSettings from "components/Layout/Settings/LayoutSettings";

import style from "style/pages/settings.module.css";
import styleTabs from "components/Tabs/tabs-settings.module.css";

const routes = {
  name: "settings-tabs",
  options: [
    {
      title: "Globals",
      value: "globals"
    },
    {
      title: "Sandbox",
      value: "sandbox"
    },
    {
      title: "Game",
      value: "game"
    }
  ]
};

const SettingsSections = ({ section, lang }) => {
  const Section = ({
    "sandbox": dynamic(() => import("components/Mode/Sandbox/Settings/Settings")),
    "globals": dynamic(() => import("components/StateProvider/SettingsGlobal/SettingsGlobal")),
    "game": dynamic(() => import("components/Loader/Loading/Loading")),
  }[section]);
  
  return (
    <Section lang={lang} />
  );
};

const SettingsPage = () => {

  const [ section, setSection ] = useState("sandbox");
  
  return (
    <LayoutSettings className={style.settings}>
      <Tabs
        data={routes}
        value={section}
        setTab={setSection}
        style={styleTabs["tabs-settings"]}
        lang={"EN"} />
      <SettingsSections lang="EN" section={section} />
    </LayoutSettings>
  );
};

export default SettingsPage;
