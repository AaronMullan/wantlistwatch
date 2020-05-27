import React, { useState, useEffect } from "react";
import WantedItemPrice from "./WantedItemPrice.js";

function WantedItems(props) {
  const [wantlist, setWantlist] = useState();

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(`https://api.discogs.com/users/${props.username}/wants`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
      });
  }, []); //eslint-disable-line

  if (isLoaded === false) return <h3>loading</h3>;

  const wantedArray = Array.from(wantlist);
  const wantedItems = wantedArray.map((item) => (
    <li>
      <p>
        {item.basic_information.artists[0].name} :{item.basic_information.title}
      </p>
      <WantedItemPrice wantid={item.basic_information.id} />
    </li>
  ));

  return <ul>{wantedItems}</ul>;
}
export default WantedItems;
