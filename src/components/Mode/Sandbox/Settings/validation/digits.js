export default (state) => {
  const { digits, baseIn, digitsMin, digitsMax } = state;

  const parseDigits = digits => (
    digits.map(digit => {
      const value = +digit;
      return (Number.isNaN(value))
        ? 0 
        : (value >= baseIn)
        ? baseIn - 1
        : value 
    })
  );

  if (!digits) {
    return { ...state, digits: [0] }
  }

  const digitsArr = (Array.isArray(digits))
    ? parseDigits(digits)
    : parseDigits(digits.split(/[,\s-]/));

  if (digitsArr.length > digitsMax) {
    digitsArr.length = digitsMax
  };

  if (digitsArr.length < digitsMin) {
    const oldLength = digitsArr.length;
    digitsArr.length = digitsMin;
    digitsArr.fill(0, oldLength);
  };

  return {
    ...state,
    digits: digitsArr
  };
};
