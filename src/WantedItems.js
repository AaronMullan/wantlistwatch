import React, { useState, useEffect } from 'react';
import { sampleWantsObject, sampleRates } from './sampledata.js';
import { getExchangeRates, currencyConverter } from './currencyConverter.js';
import styles from './WantedItems.css';

function WantedItems(props) {
  const [wantlist, setWantlist] = useState(sampleWantsObject);
  const [wantedItems, setWantedItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(sampleRates);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.discogs.com/users/${props.username}/wants`)
      .then((res) => res.json())
      .then((result) => {
        setWantedItems([]);
        setSortedItems([]);
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
    })
  }, [wantlist]) //eslint-disable-line

  useEffect(() => {
    const sorted = [...wantedItems].filter(
      item => item.percentage !== 0
    );
    setSortedItems(() => sorted.sort((a, b) => a.percentage - b.percentage))
    setIsLoaded(true)
  }, [wantedItems])

  async function addPrices(want) {
    let output = {}
    setIsLoaded(false)
    output.id = want.basic_information.id
    output.artist = want.basic_information.artists[0].name
    output.title = want.basic_information.title
    output.format = want.basic_information.formats[0].name
    Promise.all([
      await fetch(`https://sicdogs.herokuapp.com/api/v1/sales/${want.id}`)
        .then((res) => res.json())
        .then((data) => data.listing.filter(item => item.condition_media !== 'Fair (F)'))
        .then((data) => data[0] ? data[0].price : 'none')
        .then((data) => {
          output.currentPrice = data
          output.convertedPrice = currencyConverter(data, exchangeRate)
        }),
      await fetch(`https://sicdogs.herokuapp.com/api/v1/price/${want.id}`)
        .then((res) => res.json())
        .then((data) => data["Very Good (VG)"] ?
          output.veryGoodPrice = data["Very Good (VG)"]["value"] : output.veryGoodPrice = 0)
        .then(() => output.percentage = output.convertedPrice / output.veryGoodPrice)
    ])
      .then(setWantedItems(wantedItems => [...wantedItems, output]))
  };

  if (isLoaded === false) return <h3>loading</h3>;

  return (
    <ul>
      {sortedItems.map(element => (
        <li key={element.id}>
          <a href={`https://www.discogs.com/sell/release/${element.id}`} target="_blank" rel="noopener noreferrer" >
            <h3 className={styles.artist}>{`${element.artist}: ${element.title}`}</h3>
            <p className={styles.veryGoodPrice}>{`Suggested Very Good Price: $${element.veryGoodPrice.toFixed(2)}`}</p>
            <p className={styles.currentPrice}>{`Current Price in USD: $${(element.convertedPrice).toFixed(2)}`}  </p>
            <p className={styles.discount}>Percentage Discount: <span style={{ color: element.percentage < 1 ? '#60C43F' : '#BF3A38'}}>{((1 - element.percentage) * 100).toFixed(2)}%</span></p>
          </a>
        </li>
      ))}
    </ul>
  )
};

export default WantedItems;
