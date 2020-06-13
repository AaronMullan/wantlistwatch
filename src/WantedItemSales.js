import React, { useState, useEffect } from "react";
import { getExchangeRates, currencyConverter } from './currencyConverter.js'
import { sampleRates } from './sampledata.js'

function WantedItemSales(props) {
  const [saleitems, setsaleitems] = useState('none');
  const [isLoaded, setIsLoaded] = useState(false);
  const [exchangeRate, setExchangeRate] = useState({});
  const [convertedPrice, setConvertedPrice] = useState();

  useEffect(() => {
    let newprice;
    getExchangeRates()
      .then(res => setExchangeRate(res.rates))
    fetch(`http://localhost:3002/api/v1/sales/${props.wantid}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.listing[0]) {
          setsaleitems(result.listing[0].price)
        }
        else {
          setsaleitems('none')
        }
      }
      .then(() => newprice = currencyConverter('€340.0 0', sampleRates)
      .then(()=> setConvertedPrice(newprice))

      setIsLoaded(true)
      )
  }, []);

  if (isLoaded === false) return <h3>loading</h3>;

  return <p>Cheapest Now: {convertedPrice}</p>;
}

export default WantedItemSales;