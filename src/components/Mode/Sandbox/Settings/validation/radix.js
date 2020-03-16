const isInInterval = (values, limitLeft, limitRight) => (
  values.every(value => value >= limitLeft && value <= limitRight)
);

export default (state) => {

  const {
    baseIn: baseInInput,
    baseOut: baseOutInput,
    baseMin,
    baseMax,
    mode
  } = state;

  const baseIn = +baseInInput;
  const baseOut = +baseOutInput;

  if (!Number.isNaN(baseIn) && !Number.isNaN(baseOut)) {
    if (isInInterval([ baseIn, baseOut ], baseMin, baseMax)) {
      return {
        ...state,
        baseIn: (mode === "bulb") ? 2 : baseIn,
        baseOut
      };
    }
  }

  // default for invalid cases
  return {
    ...state,
    baseIn: 2,
    baseOut: 10
  };
};
