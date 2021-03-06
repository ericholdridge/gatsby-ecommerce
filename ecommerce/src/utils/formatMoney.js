const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol'
});

export default function formatMoney(cents) {
  return formatter.format(cents / 1000);
}