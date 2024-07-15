import currencySymbolMap from 'currency-symbol-map';

export const formatCurrency = (amount: number, currency: string): string => {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  const formatter = new Intl.NumberFormat('en-US', options);

  let formattedAmount = formatter.format(amount);

  formattedAmount = formattedAmount.replace(/,/g, ' ');

  const currencySymbol = currencySymbolMap(currency) || currency;

  return `${formattedAmount} ${currencySymbol}`;
};
