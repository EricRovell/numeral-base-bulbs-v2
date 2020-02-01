const Incrementor = ({ actionType, base, value, baseMin, baseMax, dispatch }) => {

  const increment = () => {

    if (actionType === 1 && value >= baseMax) {
      dispatch({
        type: "setBase",
        base,
        value: baseMin
      });
      return;
    }
    
    if (actionType === -1 && value <= baseMin) {
      dispatch({
        type: "setBase",
        base,
        value: baseMax
      });
      return;
    }

    dispatch({
      type: "setBase",
      base,
      value: value + actionType,
    });
  };

  return (
    <button onClick={increment}>
      <svg viewBox="0 0 320 191.9">
        <path d="M2.9,24.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6s14.6-3.4,19.2-8.6L315,27.1l2.3-2.6C319,22,320,19,320,15.8
          C320,7.1,312.6,0,303.4,0l0,0H16.6l0,0C7.4,0,0,7.1,0,15.8C0,19.1,1.1,22.2,2.9,24.7z"/>
      </svg>
    </button>
  );
};

export default Incrementor;
