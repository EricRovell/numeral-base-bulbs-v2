const isInInterval = (values, limitLeft, limitRight) => (
  values.every(value => value >= limitLeft && value <= limitRight)
);

export default (state) => {

  const {
    digitsMin: digitsMinInput,
    digitsMax: digitsMaxInput,
    DIGITS_MIN,
    DIGITS_MAX
  } = state;

  const digitsMin = +digitsMinInput;
  const digitsMax = +digitsMaxInput;

  if (!Number.isNaN(digitsMin) && !Number.isNaN(digitsMax)) {
    if (isInInterval([ digitsMin, digitsMax ], DIGITS_MIN, DIGITS_MAX)) {
      return {
        ...state,
        digitsMin,
        digitsMax
      }
    }
  }

  // default for invalid cases
  return {
    ...state,
    digitsMin: 0,
    digitsMax: 8
  };
};
