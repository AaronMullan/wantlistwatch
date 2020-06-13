export function getExchangeRates() {
  return fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(res => res.json())
};

const sampleRates = {
  "CAD": 1.357661005,
  "HKD": 7.7500884643,
  "ISK": 134.5541401274,
  "PHP": 50.2149681529,
  "DKK": 6.59509908,
  "HUF": 306.0863411182,
  "CZK": 23.6181882519,
  "GBP": 0.7931086341,
  "RON": 4.2766277424,
  "SEK": 9.2978591649,
  "IDR": 14205.8032554848,
  "INR": 75.8912774239,
  "BRL": 5.0767869781,
  "RUB": 69.6799363057,
  "HRK": 6.6932059448,
  "JPY": 107.2717622081,
  "THB": 30.9501061571,
  "CHF": 0.9463021939,
  "EUR": 0.8846426044,
  "MYR": 4.2675159236,
  "BGN": 1.7301840057,
  "TRY": 6.8315640481,
  "CNY": 7.0762561925,
  "NOK": 9.5961606511,
  "NZD": 1.5528131635,
  "ZAR": 17.055378627,
  "USD": 1.0,
  "MXN": 22.5097310686,
  "SGD": 1.3904812456,
  "AUD": 1.4549716914,
  "ILS": 3.4668259023,
  "KRW": 1203.5120311394,
  "PLN": 3.9352441614
}


export function currencyConverter(price, rates) {
  switch (true) {
    case (price.substring(0, 1).split('.')[0] === '$'):
      return (Number(price.slice(1)));
    case (price.substring(0, 1) === '£'):
      return (Number(price.slice(1).split('.')[0]) / rates.GBP);
    case (price.substring(0, 1) === '€'):
      return (Number(price.slice(1).split('.')[0]) / rates.EUR);
    case (price.substring(0, 3) === 'CA$'):
      return (Number(price.slice(3).split('.')[0]) / rates.CAD);
    case (price.substring(0, 2) === 'A$'):
      return (Number(price.slice(2).split('.')[0]) / rates.AUD);
    case (price.substring(0, 1) === '¥'):
      return (Number(price.slice(1).split('.')[0]) / rates.JPY);
    case (price.substring(0, 3) === 'CHF'):
      return (Number(price.slice(3).split('.')[0]) / rates.CHF);
    case (price.substring(0, 3) === 'MX$'):
      return (Number(price.slice(3).split('.')[0]) / rates.MXN);
    case (price.substring(0, 2) === 'R$'):
      return (Number(price.slice(2).split('.')[0]) / rates.BRL);
    case (price.substring(0, 3) === 'NZ$'):
      return (Number(price.slice(3).split('.')[0]) / rates.NZD);
    case (price.substring(0, 3) === 'SEK'):
      return (Number(price.slice(3).split('.')[0]) / rates.ZAR);
    default: return NaN
  }
}
let test = currencyConverter('€340.0 0', sampleRates);
console.log(test)