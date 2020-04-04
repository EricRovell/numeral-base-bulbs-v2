import useUserSettings from "components/Settings/useUserSettings/useUserSettings";
import { StateProvider, defaultState, reducer } from "components/Mode/Sandbox/State/useStateSandbox";

import Sandbox from "components/Mode/Sandbox/Sandbox";
import Loader from "components/Loader/Loader";

const HomePage = ({ lang }) => {

  const [ state, isLoading ] = useUserSettings(defaultState, "SettingsSandbox");

  if (isLoading) {
    return <Loader />
  }

  return !isLoading && (
    <StateProvider
      defaultState={state}
      reducer={reducer}>
        <Sandbox />
    </StateProvider>
  );
};

HomePage.getInitialProps = async ({ query }) => {
  return {
    lang: query.lang
  };
};

export default HomePage;
