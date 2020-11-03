const sizes = {
  Small: 0.75,
  Medium: 1,
  Large: 1.25,
};

export default function calculatePizzaPrice(cents, size) {
  return cents * sizes[size];
}
