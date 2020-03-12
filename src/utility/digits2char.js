// digits to chars
export default (digits) => [ ...digits ].map(value => (
  (value > 9 && value <= 36)
    ? String.fromCharCode(value + 55)
    : value    
));