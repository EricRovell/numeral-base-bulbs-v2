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
  },

  addDigit({ action, digits, digitsMax, digitsMin }) {
    // prevent adding more digits than allowed
    if (action === 1) {
      if (digits.length >= digitsMax) {
        return digits;
      }
    }
  
    // prevent removing more digits than allowed
    if (action === -1) {
      if (digits.length <= digitsMin) {
        return digits;
      }
    }
  
    return (action === 1)
      ? [ 0, ...digits]
      : digits.slice(1)
  },

  incrementBase({ action, base, value, state }) {

    if (!action) {
      // no action -> setter
      return {
        [base]: value
      };
    }

    // user increment max base value -> set the min value
    // user decrement min base value -> set the max value
    // allows cycling
    // if the base value in allowed range -> compute next value   
    const nextValue = (action === 1 && value >= state.baseMax)
      ? state.baseMin
      : (action === -1 && value <= state.baseMin)
      ? state.baseMax
      : value + action;

    if (base === "baseIn" && value === 2 && nextValue !== 2) {
      // using binary mode for digits has no sense with non-binary base
      // set non-binary mode/skin for non-binary base
      return {
        [base]: nextValue,
        mode: (state.mode !== "symbol") ? "symbol" : state.mode,
        skin: (state.mode !== "symbol") ? "default" : state.skin
      }
    }
      
    return {
      [base]: nextValue
    };
  }


};
