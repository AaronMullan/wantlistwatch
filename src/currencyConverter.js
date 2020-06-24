import { sampleRates } from './sampledata.js'

export function getExchangeRates() {
  return fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(res => res.json())
};

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
    default: return 0
  }
}
let test = currencyConverter('£340.0 0', sampleRates);
console.log(test)