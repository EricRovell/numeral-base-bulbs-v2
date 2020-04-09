import { useModalContext } from "components/UI/Modal/context";
import ExpressModal from "./ExpressModal";

import ExpressTab from "components/UI/ExpressTab/ExpressTab";

const ExpressSettings = ({ state, dispatchSB }) => {

  const [ { open }, dispatchModal ] = useModalContext();

  const openModal = () => {
    dispatchModal({
      type: "show",
      title: "Express Settings",
      contents: <ExpressModal
        stateSB={state}
        dispatchSB={dispatchSB} />
    });
  };

  return (
    <ExpressTab
      title={"Настройки"}
      handleClick={openModal}
    />
  );
};

export default ExpressSettings;
