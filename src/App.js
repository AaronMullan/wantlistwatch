import React, { useState } from "react";
import WantedItems from "./WantedItems.js";
import "./App.css";

function App() {
  const [username, setUsername] = useState("aaroncmullan");
  const [displayName, setDisplayName] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(displayName);
    console.log(username);
    console.log(displayName);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wantlist Watcher</h1>
        <div>
        <h5 className="Subheader">
          Enter {" "}
          <a
            href="https://www.discogs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discogs.com
          </a> {" "}
          User Name to See Deals on Wantlist Items
        </h5>
        </div>
        <form onSubmit={handleSubmit}>
          <label>username:</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          <input type="submit" value="Submit" />
        </form>
      </header>
      <div>
        <WantedItems username={username} />
      </div>
    </div>
  );
}

export default App;
