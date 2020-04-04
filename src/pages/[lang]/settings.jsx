import { useState } from "react";

import dynamic from "next/dynamic";

import Tabs from "components/Tabs/Tabs";
import LayoutSettings from "components/Layout/Settings/LayoutSettings";

import style from "style/pages/settings.module.css";
import styleTabs from "components/Tabs/tabs-settings.module.css";


const SettingsSections = ({ section, langData }) => {
  const Section = ({
    "sandbox": dynamic(() => import("components/Mode/Sandbox/Settings/Settings")),
    "globals": dynamic(() => import("components/StateProvider/SettingsGlobal/SettingsGlobal")),
    "game": dynamic(() => import("components/Loader/Loading/Loading")),
  }[section]);
  
  return (
    <Section langData={langData} />
  );
};

const SettingsPage = ({ lang, langData }) => {

  const [ section, setSection ] = useState("globals");
  
  return (
    <LayoutSettings className={style.settings}>
      <Tabs
        data={langData.sections}
        value={section}
        setTab={setSection}
        style={styleTabs["tabs-settings"]}
        lang={"EN"} />
      <SettingsSections
        section={section}
        langData={langData[section]} />
    </LayoutSettings>
  );
};

SettingsPage.getInitialProps = async ({ query }) => {
  // dynamically importing contents data in required language
  const lang = query.lang;

  const langData = (await import(
    `components/Settings/lang/settings-lang-data-${lang}`
  )).default;
  
  return {
    lang: query.lang.toUpperCase(),
    langData
  };
};

export default SettingsPage;
