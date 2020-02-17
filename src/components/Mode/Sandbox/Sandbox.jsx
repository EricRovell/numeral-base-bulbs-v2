import useUserSettings from "components/Settings/useUserSettings/useUserSettings";
import { StateProvider, defaultState, reducer } from "./State/useStateSandbox";

import Loader from "components/Loader/Loader";

import LayoutMain from "components/Layout/Main/LayoutMain";
import DigitsSection from "./Sections/DigitsSection";
import NumberSection from "./Sections/NumberSection";

import ExpressSettings from "components/Settings/ExpressSettings/ExpressSettings";


const Sandbox = () => {

  const [ state, isLoading ] = useUserSettings(defaultState, "SettingsSandbox");

  if (isLoading) {
    return <Loader />
  }

  return !isLoading && (
    <StateProvider
      defaultState={state}
      reducer={reducer}>
        <LayoutMain>        
          <DigitsSection />
          <NumberSection />
          <ExpressSettings />        
        </LayoutMain>
    </StateProvider>
  );
};

export default Sandbox;
