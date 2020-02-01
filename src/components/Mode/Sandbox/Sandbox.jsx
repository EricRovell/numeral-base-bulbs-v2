import { StateProvider, defaultState, reducer } from "./State/useStateSandbox";

import LayoutMain from "components/Layout/Main/LayoutMain";
import DigitsSection from "./Sections/DigitsSection";
import NumberSection from "./Sections/NumberSection";

const Sandbox = () => {

  return (
    <StateProvider {...{ defaultState, reducer }}>
      <LayoutMain>        
        <DigitsSection />
        <NumberSection />        
      </LayoutMain>
    </StateProvider>
  );
};

export default Sandbox;
