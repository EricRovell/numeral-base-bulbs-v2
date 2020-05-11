export const baseRegExp = base => {
  if (base <= 10 && base >= 2) {
    return new RegExp(`^[0-${base - 1}]+$`);
  }
  if (base <= 36 && base >= 11) {
    const char = String.fromCharCode(base + 54);
    return new RegExp(`^[\\dA-${char}a-${char.toLowerCase()}]+$`);
  }
  if (base === 11) {
    return /[\\dAa]+/;
  }
  if (base === 1) {
    return /[\\d]+/;
  }
};
