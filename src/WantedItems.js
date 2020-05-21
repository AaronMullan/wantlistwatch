import React, { useState, useEffect } from 'react';

function WantedItems(props) {
  const [wantlist, setWantlist] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      fetch(
        "https://api.discogs.com/users/aaroncmullan/wants"
      )
        .then((res) => res.json())
        .then((result) => {
          setWantlist(result.wants)
          setIsLoaded(true);
        });
      }, []);
      console.log(wantlist)

if(isLoaded === false) return (<h3>loading</h3>)

const wantedArray = Array.from(wantlist);
const wantedItems = wantedArray.map((item => 

  <li>
    <p>{item.basic_information.artists[0].name} :  
     {item.basic_information.title}</p>
  </li>
  ));

  return(
    <ul>
      {wantedItems}
      {/* <li>hi</li> */}
    </ul>
  )
};
export default WantedItems;