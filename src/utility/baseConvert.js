// convertion algorithms

const toDigits = (number, base) => {
  // convert a positive {number} to it's digit representation in {base}
  const digits = [];
  while (number) {
    digits.unshift(number % base);
    number = number / base | 0;
  }
  return digits;
};

const fromDigits = (digits, base) => {
  // compute the number given by {digits} in {base}    
  if (!Array.isArray(digits) && Number.isInteger(digits)) {
    digits = digits.toString().split("").map(Number);
  }

  let number = 0;
  for (let digit of digits) {
    number = base * number + digit;
  }
  return number;
};

export const digits2chars = digits => (
  // convert digits from 10 up to 36 into char representation
  digits.map(digit =>
    (digit > 9 && digit <= 36)
      ? String.fromCharCode(digit + 55)
      : digit
  )
);

export const chars2Digits = chars => (
  // convert digits from 10 up to 36 into char representation
  chars.split("").map(char => (
    (isNaN(char))
      ? char.toUpperCase().charCodeAt() - 55
      : +char
  ))
);

// Base Convertion

const unaryBaseConvert = ({ digits = [], baseIn, baseOut }) => {
  // unary -> any other
  if (baseIn === 1 && baseOut !== 1) {
    return toDigits(fromDigits(digits.length, baseIn), baseOut);
  }
  // other <- unary
  if (baseIn !== 1 && baseOut === 1) {
    /* too easily may overflow, hence, not supported */
    return [ 0 ];
  }
  // unary -> unary (baseIn === baseOut === 1)
  return new Array(digits.length).fill(0);
}

export const baseConvert = ({ digits, baseIn, baseOut, representation }) => {
  // Converts number representation from one base to another

  // validate zero array is an array is given
  if (!Array.isArray(digits)) {
    if (typeof digits === "string") {
      digits = chars2Digits(digits);
    }
  }

  if (digits.length === 0) {
    return [];
  }

  // unary base
  if (baseIn === 1 || baseOut === 1) {
    return unaryBaseConvert({
      digits,
      baseIn,
      baseOut
    });
  }

  if (digits.every(digit => digit === 0)) {
    return [0];
  }  

  const converted = toDigits(fromDigits(digits, baseIn), baseOut);

  switch (representation) {
    case "numeral": 
      return converted;
    case "symbol":
    default:
      return digits2chars(converted);    
  }
};

/* 
console.log(baseConvert({
  digits: "12",
  baseIn: 10,
  baseOut: 1,
  representation: "symbol"
})); */
