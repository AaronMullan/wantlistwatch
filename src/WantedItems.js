import React, { useState, useEffect } from "react";
import WantedItemPrice from "./WantedItemPrice.js";
import WantedItemSales from "./WantedItemSales.js";

function WantedItems(props) {
  const [wantlist, setWantlist] = useState();

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(`https://api.discogs.com/users/${props.username}/wants`)
      .then((res) => res.json())
      .then((result) => {
        setWantlist(result);
        setIsLoaded(true);
      });
  }, [props.username]);

  if (isLoaded === false) return <h3>loading</h3>;

  const wantedItems = wantlist.wants.map((item) => (
 
    <li>
     
      <WantedItemSales wantid={item.basic_information.id} artist={item.basic_information.artists[0].name} title={item.basic_information.title}/>
    </li>
  ));

  return <ul>{wantedItems}</ul>;
}
export default WantedItems;
