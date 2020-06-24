import React, { useState, useEffect } from "react";
import { getExchangeRates, currencyConverter } from './currencyConverter.js'
import { sampleRates } from './sampledata.js'

function WantedItemSales(props) {
  const [lowestprice, setlowestprice] = useState('$100');
  const [isLoaded, setIsLoaded] = useState(false);
  const [exchangeRate, setExchangeRate] = useState({});
  const [convertedPrice, setConvertedPrice] = useState();
  const [veryGoodPrice, setveryGoodPrice] = useState();
  const [percentage, setPercentage] = useState()
  

  useEffect(() => {
    fetch(`http://localhost:3002/api/v1/sales/${props.wantid}`)
      .then((res) => res.json())
      .then((result) => result.listing[0] ?
        result.listing[0].price : 'none')
      .then((data) => setlowestprice(data))

      .then(() => setIsLoaded(true))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    let newprice;
    getExchangeRates()
      .then(res => setExchangeRate(sampleRates))
      .then(() => newprice = currencyConverter(lowestprice, exchangeRate).toFixed(2))
      .then(() => setConvertedPrice(newprice))
  })

  useEffect(() => {
    fetch(`http://localhost:3002/api/v1/price/${props.wantid}`)
      .then((res) => res.json())
      .then((result) => {
        if (result["Very Good (VG)"]) {
          setveryGoodPrice(result["Very Good (VG)"]["value"].toFixed(2))
        }
        else {
          setveryGoodPrice('unknown')
        }
      })
    },[])
  useEffect(()=>{
    let percentage;
    if(convertedPrice && veryGoodPrice) percentage = (convertedPrice/veryGoodPrice  * 100).toFixed(2)
    setPercentage(percentage)
  }
  )
  

    if(isLoaded === false) return <h3>loading</h3>;

    return (
      <>
        <p>Suggested Price (VG Condition): {veryGoodPrice}</p>
        <p>Cheapest Now: {lowestprice} $USD {convertedPrice}</p>
        <p>Percentage Difference = {percentage}%</p>
      </>
    );
  }


    export default WantedItemSales;
