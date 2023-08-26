export const convertToCurrency = (value: number) => {
  const result = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currencyDisplay: "code",
    currency: "NGN",
  }).format(value ?? 0);

  return result;
};
