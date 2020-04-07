import LayoutMain from "components/Layout/Main/LayoutMain";
import DigitsSection from "./Sections/DigitsSection";
import NumberSection from "./Sections/NumberSection";

import ExpressOptions from "components/UI/ExpressOptions/ExpressOptions";
import ExpressSettings from "components/Settings/ExpressSettings/ExpressSettings";
import ExpressTutorial from "components/UI/SVGLink/SVGLink";

import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox"; 

const Sandbox = () => {

  const [ state, dispatch ] = useStateSandbox();

  return (
    <LayoutMain>        
      <DigitsSection
        state={state}
        dispatch={dispatch} />
      <NumberSection
        state={state}
        dispatch={dispatch} />
      <ExpressOptions>
        <ExpressSettings
          state={state}
          dispatchSB={dispatch} />
        <ExpressTutorial /> 
      </ExpressOptions>       
    </LayoutMain>
  );
};

export default Sandbox;
