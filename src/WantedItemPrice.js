import React, { useState, useEffect } from "react";

function WantedItemPrice(props) {
  const [veryGoodPrice, setveryGoodPrice] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
 

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
        setIsLoaded(true);

      });
  }, []);

  if (isLoaded === false) return <h3>loading</h3>;

  return <p>Suggested Price (VG Condition): {veryGoodPrice}</p>;
}
export default WantedItemPrice;
