import useUserSettings from "components/Hooks/useUserSettings";
import { StateProvider, defaultState, reducer } from "components/Mode/Sandbox/State/useStateSandbox";

import Sandbox from "components/Mode/Sandbox/Sandbox";
import LoaderPuzzle from "components/Loaders/LoaderPuzzle/LoaderPuzzle";

export default function HomePage() {

  const [ state, isLoading ] = useUserSettings(defaultState, "SettingsSandbox");

  if (isLoading) {
    return <LoaderPuzzle />
  }

  return !isLoading && (
    <StateProvider
      defaultState={state}
      reducer={reducer}>
        <Sandbox />
    </StateProvider>
  );
};
