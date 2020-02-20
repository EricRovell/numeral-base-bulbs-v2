import SelectSkin from "./SelectSkin";

import { data } from "./data";

import style from "./representation.module.css";

const RepresentationSelect = ({ mode, skin, dispatch }) => {

  const handleMode = event => {
    dispatch({
      type: "setMode",
      mode: event.target.value
    });
  };

  const handleSkin = event => {
    dispatch({
      type: "setSkin",
      skin: event.target.value
    });
  };

  return (
    <div className={style.representation}>
      <h4>Represenation / Skin</h4>
      <SelectSkin
        data={data}
        mode={mode}
        skin={skin}
        handleMode={handleMode}
        handleSkin={handleSkin} />      
    </div>
  );
};

export default RepresentationSelect;
