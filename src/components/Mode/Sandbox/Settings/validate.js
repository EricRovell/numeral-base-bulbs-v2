export const validate = (name, value, state) => {
  switch (name) {

    case "baseIn":
    case "baseOut":
      return validateBase(state, value);

    case "digitsMin":
      return validateMinDigits(state, value);

    case "digitsMax":
      return validateMaxDigits(state, value);

    case "digits":
      return validateDigits(state, value);
  }
};

// change digits when set baseIn

const validateBase = ({ baseMin, baseMax }, value) => {
  const base = ~~value;
  return (base <= baseMin)
    ? baseMin
    : (base >= baseMax)
    ? baseMax
    : base
};

const validateMinDigits = ({ digitsMax, DIGITS_MIN, DIGITS_MAX }, value) => {
  const digits = ~~value;
  return (digits > digitsMax)
    ? digitsMax
    : (digits < DIGITS_MIN)
    ? DIGITS_MIN
    : (digits > DIGITS_MAX)
    ? DIGITS_MAX
    : digits;
};

const validateMaxDigits = ({ digitsMin, DIGITS_MIN, DIGITS_MAX }, value) => {
  const digits = ~~value;
  return (digits < digitsMin)
    ? digitsMin
    : (digits < DIGITS_MIN)
    ? DIGITS_MIN
    : (digits > DIGITS_MAX)
    ? DIGITS_MAX
    : digits;
};

const validateDigits = ({ baseIn }, value) => {
  // value:
  //  -> split by comma
  //  -> convert to int
  //  -> normalize according to the digits' base
  return value
    .split(",")
    .map(digit => ~~digit)
    .map(digit => (digit > baseIn - 1) ? baseIn - 1 : digit)
};
