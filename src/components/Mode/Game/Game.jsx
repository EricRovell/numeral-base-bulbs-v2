import { StateProvider, defaultState, reducer } from "./State/useStateGame";

import LayoutGame from "components/Layout/Game/LayoutGame";


const Game = () => {

  return (
    <StateProvider {...{ defaultState, reducer }}>
      <LayoutMain>        
              
      </LayoutMain>
    </StateProvider>
  );
};

export default Game;
