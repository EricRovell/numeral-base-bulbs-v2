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

const SettingsSection = ({ section, lang }) => {
  const sections = {
    "sandbox": "Mode/Sandbox/Settings/Settings",
    "globals": "StateProvider/SettingsGlobal/SettingsGlobal",
    "game": "Loader/Loading/Loading"
  };

  const Section = dynamic(() => import(`components/${sections[section]}`))
  
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
      <SettingsSection lang="EN" section={section} />
    </LayoutSettings>
  );
};

export default SettingsPage;
