import React, { useState } from "react";
import WantedItems from "./WantedItems.js";
import "./App.css";

function App() {
  const [username, setUsername] = useState();
  const [displayName, setDisplayName] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(displayName);
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
        <form>
          <label>username:</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </header>
      <div>
        {username && <WantedItems username={username} />}
      </div>
    </div>
  );
}

export default App;
