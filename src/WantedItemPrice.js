import React, { useState, useEffect } from "react";

function WantedItemPrice(props) {
  const [fairPrice, setFairPrice] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:7891/api/v1/price/${props.wantid}`)
      .then((res) => res.json())
      .then((result) => {
        setFairPrice(result["Very Good (VG)"]["value"].toFixed(2));
        setIsLoaded(true);
      });
  }, []);
  // console.log(fairPrice);
  if (isLoaded === false) return <h3>loading</h3>;

  return <p>Suggested Price (VG Condition): {fairPrice}</p>;
}
export default WantedItemPrice;
