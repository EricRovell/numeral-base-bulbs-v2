import { useRouter } from "next/router";

import Tabs from "components/UI/Tabs/Tabs";
import LayoutSettings from "components/Layout/Settings/LayoutSettings";

import SettingsGlobal from "components/StateProvider/SettingsGlobal/SettingsGlobal";
import SettingsSandbox from "components/Mode/Sandbox/Settings/Settings";

import style from "style/pages/settings.css";
import styleTabs from "components/Tabs/tabs-settings.css";

const routes = [
  {
    path: "/settings?tab=globals",
    name: {
      "EN": "Globals",
      "RU": "Основные",
    },
  },
  {
    path: "/settings?tab=sandbox",
    name: {
      "EN": "Sandbox",
      "RU": "Песочница",
    },
  },
  {
    path: "/settings?tab=Game",
    name: {
      "EN": "Game",
      "RU": "Игра",
    },
  },
];

const settingsTab = () => ({
  "sandbox": <SettingsSandbox />,
  "globals": <SettingsGlobal />
});

const SettingsPage = () => {

  const { query: { tab, lang }} = useRouter();
  
  return (
    <LayoutSettings className={style.settings}>
      <div>
        <Tabs
          routes={routes}
          style={styleTabs}
          lang={lang || "EN"} />
      </div>
      {settingsTab()[tab]}
    </LayoutSettings>
  );
};

export default SettingsPage;
