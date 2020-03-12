// chars to digits
export default (string) => [ ...string ].map(digit => (
  Number.isInteger(+digit)
    ? +digit
    : digit.charCodeAt() - 55     
));