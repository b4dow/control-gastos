export const FormatCurrency = (value: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};
