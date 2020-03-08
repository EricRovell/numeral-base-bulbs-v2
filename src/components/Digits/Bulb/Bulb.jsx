import Label from "../Label/Label";

import BulbDefaultSkin from "./Skins/Default";
import BulbModernSkin from "./Skins/Modern";
import BulbLampSkin from "./Skins/Lamp";

import style from "./bulb.module.css";

const bulbSkin = props => ({
  "default": <BulbDefaultSkin {...props} />,
  "modern": <BulbModernSkin {...props} />,
  "lamp": <BulbLampSkin {...props} />
});

const Bulb = ({ digits, skin, value, index, baseIn, representation, labelsUp, labelsDown, dispatch }) => {

  const handleSwitch = () => {
    dispatch({
      type: "mutateDigit",
      index,
      value: (value === 1) ? 0 : 1,
    });
  };

  return (
    <div className={style.bulb}>
      <Label {...{
        type: "labelsUp",
        labelsUp,
        labelsDown,
        digits,
        index,
        baseIn,
        representation,
        dispatch
      }} />
      {bulbSkin({ value, index, handleSwitch })[skin]}
      <Label {...{
        type: "labelsDown",
        labelsUp,
        labelsDown,
        digits,
        index,
        baseIn,
        representation,
        dispatch
     }} />
    </div> 
  ); 
};

export default Bulb;
