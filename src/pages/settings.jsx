import { useStateContext } from "components/StateProvider/Context"; 

const SettingsPage = () => {

  const [ { theme }, dispatch ] = useStateContext();
  
  return (
    <main>
      <div>Settings Page, theme is {theme}</div>
    </main>
  );
};

export default SettingsPage;
