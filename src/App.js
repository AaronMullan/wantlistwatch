import React, { useState, useEffect } from "react";
import WantedItems from "./WantedItems.js";
import "./App.css";

function App() {
  const [username, setUsername] = useState("aaroncmullan");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wantlist Watcher</h1>
        <h5>
          Enter{" "}
          <a
            href="https://www.discogs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discogs.com
          </a>{" "}
          User Name to see Deals on Wantlist Items
        </h5>
      </header>
      <div>
        <WantedItems username={username} />
      </div>
    </div>
  );
}

export default App;
