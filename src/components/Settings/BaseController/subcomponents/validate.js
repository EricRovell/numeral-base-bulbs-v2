export default ({ increment, digitsLength, digitsMax, digitsMin }) => {
  // prevent adding more digits than allowed
  if (increment === 1) {
    if (digitsLength >= digitsMax) {
      return 1;
    }
  }

  // prevent removing more digits than allowed
  if (increment === -1) {
    if (digitsLength <= digitsMin) {
      return -1;
    }
  }

  return 0;
};
