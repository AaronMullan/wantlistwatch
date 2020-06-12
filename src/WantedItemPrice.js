import React, { useState, useEffect } from "react";

function WantedItemPrice(props) {
  const [fairPrice, setFairPrice] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3002/api/v1/price/${props.wantid}`)
      .then((res) => res.json())
      .then((result) => {
        if(result["Very Good (VG)"]) {
        setFairPrice(result["Very Good (VG)"]["value"].toFixed(2))
        }
        else {
        setFairPrice('unknown')
        }
        setIsLoaded(true);
      });
  }, []);
  // console.log(fairPrice);
  if (isLoaded === false) return <h3>loading</h3>;

  return <p>Suggested Price (VG Condition): {fairPrice}</p>;
}
export default WantedItemPrice;
