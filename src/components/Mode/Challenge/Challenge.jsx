import { StateProvider, defaultState, reducer } from "./State/useStateChallenge";

export default function Challenge() {

  return (
    <StateProvider {...{ defaultState, reducer }}>
      <LayoutMain>        
              
      </LayoutMain>
    </StateProvider>
  );
};
