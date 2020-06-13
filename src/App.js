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
        <h5>
          Enter {" "}
          <a
            href="https://www.discogs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discogs.com
          </a> {" "}
          User Name to see Deals on Wantlist Items
        </h5>
        <form onSubmit={handleSubmit}>
          <label>
            username
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
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
