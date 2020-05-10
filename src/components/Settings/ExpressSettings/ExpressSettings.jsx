import { useModalContext } from "components/Hooks/useModal/useModalContext";
import ExpressModal from "./ExpressModal";
import ExpressTab from "components/UI/ExpressTab/ExpressTab";

const ExpressSettings = ({ state, dispatchSB, locale }) => {

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
      label={locale.label}
      title={locale.title}
      handleClick={openModal}
    />
  );
};

export default ExpressSettings;
