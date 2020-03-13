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

export const baseConvert = ({ digits, baseIn, baseOut, representation }) => {
  // Converts number representation from one base to another

  // validate zero array is an array is given
  if (Array.isArray(digits)) {
    if (digits.every(digit => digit === 0)) {
      return [0];
    }
  }
  
  if (typeof digits === "string") {
    digits = chars2Digits(digits);
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


/* console.log(baseConvert({
  digits: "123AB6",
  baseIn: 18,
  baseOut: 6,
  representation: "symbol"
})); */