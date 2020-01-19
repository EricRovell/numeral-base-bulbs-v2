export const baseRegExp = base => {
  switch (true) {
    case (base <= 10 && base >= 2):
      return new RegExp(`^[0-${base - 1}]+$`);
    case (base <= 36 && base > 11):
      const char = String.fromCharCode(base + 54);
      return new RegExp(`^[\dA-${char}]+$`);
    case (base === 11):
      return /[\dA]+/;  
    case (base === 1):
    default:
      return /[\d]+/;
  }  
};