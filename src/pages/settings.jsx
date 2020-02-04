//import { useStateContext } from "components/StateProvider/Context";

import style from "style/pages/settings.css";

const SettingsPage = () => {

  //const [ { theme }, dispatch ] = useStateContext();
  
  return (
    <main className={style.settings}>
      <aside>
        <a href="#user-settings-1">settings 1</a>
        <a href="#user-settings-2">settings 2</a>
        <a href="#user-settings-3">settings 3</a>
        <a href="#user-settings-4">settings 4</a>
      </aside>
      <div>
        <section id="user-settings-1">
          <h2>User Settings</h2>
        </section>
        <section id="user-settings-2">
          <h2>User Settings</h2>
        </section>
        <section id="user-settings-3">
          <h2>User Settings</h2>
        </section>
        <section id="user-settings-4">
          <h2>User Settings</h2>
        </section>
        <section id="user-settings-5">
          <h2>User Settings</h2>
        </section> 
        <section id="user-settings-6">
          <h2>User Settings</h2>
        </section>  
      </div>     
    </main>
  );
};

export default SettingsPage;
