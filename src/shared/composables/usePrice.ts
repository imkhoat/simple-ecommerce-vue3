export function usePrice() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
    }).format(price as number);
  };
  return { formatPrice };
}
