import Label from "../Label/Label";

import BulbDefaultSkin from "./Skins/Default";
import BulbModernSkin from "./Skins/Modern";
import BulbLampSkin from "./Skins/Lamp";

import style from "./bulb.css";

const bulbSkin = props => ({
  "default": <BulbDefaultSkin {...props} />,
  "modern": <BulbModernSkin {...props} />,
  "lamp": <BulbLampSkin {...props} />
});

const Bulb = ({ skin, value, index, dispatch }) => {

  const handleSwitch = () => {
    dispatch({
      type: "mutateDigit",
      index,
      value: (value === 1) ? 0 : 1,
    });
  };

  return (
    <div className={style.bulb}>
      <Label
        index={index}
        type={"labelsUp"} />
      {bulbSkin({ value, index, handleSwitch })[skin]}
      <Label
        index={index}
        type={"labelsDown"} />
    </div> 
  ); 
};

export default Bulb;
