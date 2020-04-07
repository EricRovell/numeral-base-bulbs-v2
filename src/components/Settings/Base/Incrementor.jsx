const Incrementor = ({ actionType, base, value, baseMin, baseMax, dispatch }) => {

  const increment = () => {
    // user increment max base value -> set the min value
    // user decrement min base value -> set the max value
    // allows cycling
    // if the base value in allowed range -> compute next value    
    const nextValue = (actionType === 1 && value >= baseMax)
      ? baseMin
      : (actionType === -1 && value <= baseMin)
      ? baseMax
      : value + actionType;

    if (value === 2 && nextValue !== 2) {
      // using binary mode has no sense with non-binary base
      // action "setModeSkin" w/o params to reset do defaults:
      //  mode: symbol, skin: default -> it is universal
      dispatch({ type: "setModeSkin" });
    }
      
    dispatch({
      type: "setBase",
      base,
      value: nextValue
    });

    // decrement digits' values if incompatible base selected
    // example: user had digit "3" and changed to binary
    //   -> shift to the max possible binary value
    dispatch({ type: "normalizeDigits" });
  };

  return (
    <button onClick={increment} title={(actionType === 1) ? "Increment base" : "Decrement base"}>
      <svg viewBox="0 0 320 191.9">
        <path d="M2.9,24.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6s14.6-3.4,19.2-8.6L315,27.1l2.3-2.6C319,22,320,19,320,15.8
          C320,7.1,312.6,0,303.4,0l0,0H16.6l0,0C7.4,0,0,7.1,0,15.8C0,19.1,1.1,22.2,2.9,24.7z"/>
      </svg>
    </button>
  );
};

export default Incrementor;
