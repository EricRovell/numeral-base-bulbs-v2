//import { useStateContext } from "components/StateProvider/Context";
import SettingsSandbox from "components/Mode/Sandbox/Settings/Settings";

import style from "style/pages/settings.css";

const SettingsPage = () => {

  //const [ { theme }, dispatch ] = useStateContext();
  
  return (
    <main className={style.settings}>
       <SettingsSandbox />   
    </main>
  );
};

export default SettingsPage;
