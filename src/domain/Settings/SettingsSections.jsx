import dynamic from "next/dynamic";

export default function SettingsSections({ section, locale }) {
  const Section = ({
    "sandbox": dynamic(() => import("components/Mode/Sandbox/Settings/Settings")),
    "globals": dynamic(() => import("components/StateProvider/SettingsGlobal/SettingsGlobal")),
    "challenge": dynamic(() => import("components/Loader/Loading/Loading")),
  }[section]);
  
  return (
    <Section locale={locale} />
  );
};