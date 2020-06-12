import React, { useState, useEffect } from "react";

function WantedItemSales(props) {
  const [saleitems, setsaleitems] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3002/api/v1/sales/${props.wantid}`)
      .then((res) => res.json())
      .then((result) => {
        if(result.listing[0]) {
        setsaleitems(result.listing[0].price)
        }
        else {
          setsaleitems('none')
        }
        setIsLoaded(true);
      })
  }, []);
  if (isLoaded === false) return <h3>loading</h3>;

  return <p>Cheapest Now: {saleitems}</p>;
}

export default WantedItemSales;