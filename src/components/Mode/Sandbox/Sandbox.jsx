import LayoutMain from "components/Layout/Main/LayoutMain";
import DigitsSection from "./Sections/DigitsSection";
import NumberSection from "./Sections/NumberSection";

import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox";
import useLocale from "components/Hooks/useLocale";

import ExpressOptions from "components/UI/ExpressOptions/ExpressOptions";
import ExpressSettings from "components/Settings/ExpressSettings/ExpressSettings";
import ExpressHelp from "components/Settings/ExpressSettings/ExpressHelp"

export default function Sandbox() {

  const [ state, dispatch ] = useStateSandbox();
  const [ locale ] = useLocale("sandbox/sandbox-app.js");

  return locale && (
    <LayoutMain>        
      <DigitsSection
        locale={locale}
        state={state}
        dispatch={dispatch} />
      <NumberSection
        locale={locale}
        state={state}
        dispatch={dispatch} />
      <ExpressOptions>
        <ExpressSettings
          state={state}
          dispatchSB={dispatch} />
        <ExpressHelp />
      </ExpressOptions>       
    </LayoutMain>
  );
}
