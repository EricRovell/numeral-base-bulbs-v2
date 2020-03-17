import LayoutMain from "components/Layout/Main/LayoutMain";
import DigitsSection from "./Sections/DigitsSection";
import NumberSection from "./Sections/NumberSection";

import ExpressSettings from "components/Settings/ExpressSettings/ExpressSettings";

import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox"; 

const Sandbox = () => {

  const [ state , dispatch ] = useStateSandbox();

  return (
    <LayoutMain>        
      <DigitsSection
        state={state}
        dispatch={dispatch} />
      <NumberSection
        state={state}
        dispatch={dispatch} />
      <ExpressSettings dispatchSB={dispatch} />        
    </LayoutMain>
  );
};

export default Sandbox;
