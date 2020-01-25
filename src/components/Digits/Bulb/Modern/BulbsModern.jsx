import BulbModern from "./BulbModern";

import style from "./bulb-modern.css"

const BulbsModern = ({ digits, dispatch }) => (
  <div className={style.container}>
    {digits.map((value, index) => (
      <BulbModern
        value={value}
        index={index}
        dispatch={dispatch}
        key={`bulb-${index}`} />
    ))}
  </div>
);

export default BulbsModern;
