import React, { useState, useEffect } from 'react';
import { sampleRates } from './sampledata.js';
import { getExchangeRates, currencyConverter } from './currencyConverter.js';
import styles from './WantedItems.css';

function Liquidations(props) {
  const [collection, setCollection] = useState({});
  const [pricedItems, setPricedItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(sampleRates);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCollection([]);
    fetch(`https://api.discogs.com/users/${props.username}/collection/folders/0/releases?page=1&per_page=200`)
      .then((res) => res.json())
      .then((result) => {
        setPricedItems([]);
        setSortedItems([]);
        setCollection(result)
       });
  }, [props.username]);

  useEffect(() => {
    getExchangeRates()
      .then(res => setExchangeRate(res.rates))
  }, [])

  useEffect(() => {
    if (collection.releases && collection.releases.length > 0) {
      collection.releases.forEach((item) => {
        addPrices(item)
      })
    }
  }, [collection]) //eslint-disable-line

  useEffect(() => {
    const sorted = [...pricedItems].filter(
      item => item.percentage !== 0
    );
    setSortedItems(() => sorted.sort((a, b) => b.percentage - a.percentage))
    setIsLoaded(true)
  }, [pricedItems])

  async function addPrices(item) {
    let output = {}
    setIsLoaded(false)
    output.id = item.basic_information.id
    output.artist = item.basic_information.artists[0].name
    output.title = item.basic_information.title
    output.format = item.basic_information.formats[0].name
    Promise.all([
      await fetch(`https://sicdogs.herokuapp.com/api/v1/sales/${item.id}`)
        .then((res) => res.json())
        .then((data) => data.listing.filter(item => item.condition_media !== 'Fair (F)'))
        .then((data) => data[0] ? data[0].price : 'none')
        .then((data) => {
          output.currentPrice = data
          output.convertedPrice = currencyConverter(data, exchangeRate)
        }),
      await fetch(`https://sicdogs.herokuapp.com/api/v1/price/${item.id}`)
        .then((res) => res.json())
        .then((data) => data["Very Good (VG)"] ?
          output.veryGoodPrice = data["Very Good (VG)"]["value"] : output.veryGoodPrice = 0)
        .then(() => output.percentage = output.convertedPrice / output.veryGoodPrice)
    ])
      .then(setPricedItems(pricedItems => [...pricedItems, output]))
  };

  switch (true) {
    case (isLoaded === false):
      return <h3>loading</h3>;
    case (sortedItems < 1):
      return <h3>*Unburdened*</h3>;
    default: return (
      <ul>
        {sortedItems.map(element => (
          <li key={element.id}>
            <a href={`https://www.discogs.com/sell/release/${element.id}`} target="_blank" rel="noopener noreferrer" >
              <h3 className={styles.artist}>{`${element.artist}: ${element.title}`}</h3>
              <p className={styles.veryGoodPrice}>{`Suggested Very Good Price: $${element.veryGoodPrice.toFixed(2)}`}</p>
              <p className={styles.currentPrice}>{`Current Price in USD: $${(element.convertedPrice).toFixed(2)}`}  </p>
              <p className={styles.discount}>Price Mismatch: <span style={{ color: element.percentage < 1 ? '#60C43F' : '#BF3A38' }}>{(( element.percentage) * 100).toFixed(2)}%</span></p>
            </a>
          </li>
        ))}
      </ul>
    )
  }
};

export default Liquidations;
