import { useState } from "react";

import Tabs from "components/Tabs/Tabs";
import LayoutSettings from "components/Layout/Settings/LayoutSettings";

import SettingsGlobal from "components/StateProvider/SettingsGlobal/SettingsGlobal";
import SettingsSandbox from "components/Mode/Sandbox/Settings/Settings";

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

const settingsTab = () => ({
  "sandbox": <SettingsSandbox />,
  "globals": <SettingsGlobal />
});

const SettingsPage = () => {

  const [ tab, setTab ] = useState("globals");
  
  return (
    <LayoutSettings className={style.settings}>
      <Tabs
        data={routes}
        value={tab}
        setTab={setTab}
        style={styleTabs["tabs-settings"]}
        lang={"EN"} />
      {settingsTab()[tab]}
    </LayoutSettings>
  );
};

export default SettingsPage;
