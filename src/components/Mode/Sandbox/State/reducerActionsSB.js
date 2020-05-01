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

  validateBaseMode({ prevBase, nextBase, type, mode }) {
    if (type !== "baseIn") return;
    // some modes are not compatible with every base value
    // this check set default mode for some cases
    // unary -> binary
    if (prevBase === 1 && nextBase === 2) {
      return {
        mode: "binary",
        skin: "default"
      };
    }
    // binary -> unary
    if (prevBase === 2 && nextBase === 1) {
      return {
        mode: "unary",
        skin: "default"
      };
    }
    // unary -> ternary and more
    if (prevBase === 1 && nextBase > 2) {
      return {
        mode: "symbol",
        skin: "default"
      };
    }  
    // binary -> ternary and more
    if (prevBase === 2 && nextBase > 2) {
      return {
        mode: "symbol",
        skin: "default"
      };
    }
    // any -> binary
    if (nextBase === 2 && mode !== "binary") {
      return {
        mode: "binary",
        skin: "default"
      };
    }
    // any -> unary
    if (nextBase === 1 && mode !== "unary") {
      return {
        mode: "unary",
        skin: "default"
      };
    }
  },

  incrementBase({ action, base, value, state }) {

    // user increment max base value -> set the min value
    // user decrement min base value -> set the max value
    // allows cycling
    // if the base value in allowed range -> compute next value   
    const nextValue = () => (action === 1 && value >= state.baseMax)
      ? state.baseMin
      : (action === -1 && value <= state.baseMin)
      ? state.baseMax
      : value + action;

    // no action -> setter
    return {
      [base]: (action) ? nextValue() : value,
      ...this.validateBaseMode({
        type: base,
        prevBase: state[base],
        nextBase: (action) ? nextValue() : value,
        mode: state.mode
      })
    }
  }


};
