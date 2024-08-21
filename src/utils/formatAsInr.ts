export const currencyFormat = (price: string | number): string => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2, // Ensures two decimal places
  }).format(Number(price) / 100);

  return formatter;
};
