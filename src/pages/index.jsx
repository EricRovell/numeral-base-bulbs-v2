import { useStateContext } from "components/StateProvider/Context";

import LayoutMain from "components/Layout/Main/LayoutMain";

import Digits from "components/Digits/Digits";
import Number from "components/Number/Number";

import Switcher from "components/Digits/Switcher/Switcher";

import BaseSelector from "components/Settings/Base/BaseSelector";

const HomePage = () => {

  const [ { digits }, dispatch ] = useStateContext();
  
  return (
    <LayoutMain>
      <section>
        <Switcher increment={1} />
        <Digits digits={digits} />
        <Switcher increment={-1} />
      </section>      
      <section>
        <BaseSelector base={"baseIn"} />
        <Number />
        <BaseSelector base={"baseOut"} />
      </section>
    </LayoutMain>
  );
};

export default HomePage;
