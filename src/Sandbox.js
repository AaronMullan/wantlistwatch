import React, { useState, useEffect } from "react";
import WantedItemSales from "./WantedItemSales.js";
import { sampleWantsObject} from "./sampledata.js";
var originalFetch = require('isomorphic-fetch');
var fetch = require('fetch-retry')(originalFetch);

function Sandbox(props) {
  const [wantlist, setWantlist] = useState(sampleWantsObject);
  const [wantedItems, setWantedItems] =useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.discogs.com/users/${props.username}/wants`)
      .then((res) => res.json())
      .then((result) => {
        setWantlist(result);
        setIsLoaded(true);
      });
  }, [props.username]);
  
  useEffect(()=> {
    wantlist.wants.forEach((item)=> {
      addPrices(item)
    })
  },[wantlist])
  
  async function addPrices (want) {
    let output = {}
    output.id = want.basic_information.id
    output.artist = want.basic_information.artists[0].name
    output.title = want.basic_information.title
    await fetch(`http://localhost:3002/api/v1/sales/${want.id}`)
    .then((res) => res.json())
    .then((result) => result.listing[0] ?
    result.listing[0].price : 'none')
    .then((data) => output.currentPrice = data)
    .then(setWantedItems(wantedItems =>[...wantedItems, output]))
    
    // await fetch(`http://localhost:3002/api/v1/price/${want.id}`)
    //     .then((res) => res.json())
    //     .then((result) => {
      //       if (result["Very Good (VG)"]) {
        //         output.veryGoodPrice = result["Very Good (VG)"]["value"].toFixed(2)
        //       }
        //       else {
          //         output.veryGoodPrice ='unknown'
          //       }
          // })
        }
        if (isLoaded === false) return <h3>loading</h3>;
        return('hi')
        
      }
      export default Sandbox;
