import { StateProvider, defaultState, reducer } from "./State/useStateSandbox";

import LayoutMain from "components/Layout/Main/LayoutMain";
import DigitsSection from "./Sections/DigitsSection";
import NumberSection from "./Sections/NumberSection";

import ExpressSettings from "components/Settings/ExpressSettings/ExpressSettings";

const Sandbox = () => {

  return (
    <StateProvider {...{ defaultState, reducer }}>
      <LayoutMain>        
        <DigitsSection />
        <NumberSection />
        <ExpressSettings />        
      </LayoutMain>
    </StateProvider>
  );
};

export default Sandbox;
