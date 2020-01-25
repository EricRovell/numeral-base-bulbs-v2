import BulbSimple from "./BulbSimple";

import style from "./bulb-simple.css"

const BulbsSimple = ({ digits, dispatch }) => (
  <div className={style.container}>
    {digits.map((value, index) => (
      <BulbSimple
        value={value}
        index={index}
        dispatch={dispatch}
        key={`bulb-${index}`} />
    ))}
  </div>
);

export default BulbsSimple;
