import { useModalContext } from "components/UI/Modal/context";
import ExpressModal from "./ExpressModal";

import style from "./express-settings.module.css";

const ExpressSettings = ({ dispatchSB }) => {

  const [ { open }, dispatchModal ] = useModalContext();

  const openModal = () => {
    dispatchModal({
      type: "show",
      title: "Express Settings",
      contents: <ExpressModal dispatchSB={dispatchSB} />
    });
  };

  return (
    <div className={style["express-settings"]} onClick={openModal}>
      <svg viewBox="0 0 23.3 23.9">
        <title>Express Settings</title>
          <path d="M11.6,16.1c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S13.9,16.1,11.6,16.1 M20.5,13.1c0-0.4,0.1-0.8,0.1-1.2
            c0-0.4,0-0.8-0.1-1.2L23,8.8c0.2-0.2,0.3-0.5,0.1-0.8l-2.4-4.1c-0.1-0.3-0.5-0.4-0.7-0.3l-3,1.2c-0.6-0.5-1.3-0.9-2-1.2l-0.4-3.2
            C14.6,0.2,14.3,0,14,0H9.2C8.9,0,8.7,0.2,8.6,0.5L8.2,3.7C7.4,4,6.8,4.4,6.2,4.8l-3-1.2c-0.3-0.1-0.6,0-0.7,0.3L0.1,8
            C-0.1,8.3,0,8.6,0.2,8.8l2.5,1.9c0,0.4-0.1,0.8-0.1,1.2c0,0.4,0,0.8,0.1,1.2l-2.5,2c-0.2,0.2-0.3,0.5-0.1,0.8L2.5,20
            c0.1,0.3,0.5,0.4,0.7,0.3l3-1.2c0.6,0.5,1.3,0.9,2,1.2l0.4,3.2c0,0.3,0.3,0.5,0.6,0.5H14c0.3,0,0.6-0.2,0.6-0.5l0.4-3.2
            c0.8-0.3,1.4-0.7,2-1.2l3,1.2c0.3,0.1,0.6,0,0.7-0.3l2.4-4.1c0.1-0.3,0.1-0.6-0.1-0.8L20.5,13.1z"/>
      </svg>    
    </div>
  );
};

export default ExpressSettings;
