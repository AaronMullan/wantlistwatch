import React, { useState, useEffect } from "react";
// import WantedItemSales from "./WantedItemSales.js";
import { sampleWantsObject, sampleRates } from "./sampledata.js";
import { getExchangeRates, currencyConverter } from './currencyConverter.js'
import styles from "./WantedItems.css"


function Sandbox(props) {
  const [wantlist, setWantlist] = useState(sampleWantsObject);
  const [wantedItems, setWantedItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(sampleRates);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.discogs.com/users/${props.username}/wants`)
      .then((res) => res.json())
      .then((result) => {
        setWantlist(result);

      });
  }, [props.username]);

  useEffect(() => {
    getExchangeRates()
      .then(res => setExchangeRate(res.rates))
  }, [])

  useEffect(() => {
    wantlist.wants.forEach((item) => {
      addPrices(item)
      setIsLoaded(true)
    })
  }, [wantlist])

  useEffect(() => {
    const sorted = [...wantedItems]
    setSortedItems(() => sorted.sort((a, b) => a.percentage - b.percentage))
  }, [wantedItems])

  async function addPrices(want) {
    let sorted = []
    let output = {}
    setIsLoaded(false)
    output.id = want.basic_information.id
    output.artist = want.basic_information.artists[0].name
    output.title = want.basic_information.title
    output.format = want.basic_information.formats[0].name
    Promise.all([
      await fetch(`http://localhost:3002/api/v1/sales/${want.id}`)
        .then((res) => res.json())
        .then((data) => data.listing[0] ? data.listing[0].price : 'none')
        .then((data) => {
          output.currentPrice = data
          output.convertedPrice = currencyConverter(data, exchangeRate)
        }),
    await fetch(`http://localhost:3002/api/v1/price/${want.id}`)
        .then((res) => res.json())
        .then((data) => data["Very Good (VG)"] ?
          output.veryGoodPrice = data["Very Good (VG)"]["value"] : output.veryGoodPrice = 'unknown')
        .then(() => output.percentage = output.convertedPrice / output.veryGoodPrice)
    ])
      .then(setWantedItems(wantedItems => [...wantedItems, output]))
  }

  if (isLoaded === false) return <h3>loading</h3>;
  return (
    // {const sorted = [...wantedItems].sort((a, b) => b.percentage - a.percentage))}
    <ul>
      {sortedItems.map(element => (
        <div>

          <div>{`${element.title}`}</div>
          <div>{`${element.veryGoodPrice}`}</div>
        </div>

      ))}
      {/* <li>
        <a href={'https://www.discogs.com/sell/release/1292887'} target="_blank" rel="noopener noreferrer" >
          <p>
            <span className={styles.artist}>Can </span>
            <span className={styles.title}>Ege Bamyasi </span>
            <span className={styles.format}>(Vinyl) </span>
            <span className={styles.veryGoodPrice}>Very Good Price: $92 </span>
            <span className={styles.currentPrice}>Current Price: $96 (€85.00)</span>
         </p>
        </a>
      </li> */}
    </ul>
  )

}
export default Sandbox;
