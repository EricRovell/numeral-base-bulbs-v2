export default {

  labelNextMode(mode) {
    // another mode based on previous, order
    switch (mode) {
      case "index":
        return "value";
      case "value":
        return "power";
      case "power":
        return "index"; 
    };
  },

  mutateDigit({ digits, action = 0, value, baseIn, index }) {

    // reverse the index prop to get the real index in array
    // the reason: the 1st element is the last digit
    const trueIndex = digits.length - index - 1;

    // mutate logic
    if (!action) {
      return digits.map((val, i) =>
        (i === trueIndex) ? value : val)
    }

    // increment logic
    const nextValue = (action === 1 && value === baseIn - 1)
      ? 0
      : (action === -1 && value === 0)
      ? baseIn - 1
      : value + action 

    return digits.map((val, i) =>
      (i === trueIndex) ? nextValue : val)
  }

};
