export const dataBaseIn = {
  label: "baseIn",
  min: 2,
  max: 36,
  datalist: [
    {
      value: 2,
      label: "Binary"
    },
    {
      value: 8,
      label: "Octal"
    },
    {
      value: 10,
      label: "Decimal"
    },
    {
      value: 16,
      label: "Hex"
    },
  ]
};

export const dataBaseOut = {
  ...dataBaseIn,
  label: "baseOut",
};
