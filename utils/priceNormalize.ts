export const priceNormalize = (price: string | number) => {
  if (typeof price === "number") return price

  if (price.includes(",")) {
    return parseFloat(price.replace(",", ""))
  }
  return parseFloat(price)
};